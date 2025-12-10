import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, recaptchaToken } = await request.json();

    // Validar campos requeridos
    if (!name || !email || !subject || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Verificar reCAPTCHA
    const recaptchaResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'Verificación de reCAPTCHA fallida' },
        { status: 400 }
      );
    }

    // 🔥 CONFIGURAR TRANSPORTER DE GMAIL
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Clave de aplicación de Google
      },
    });

    // 🔥 ENVIAR CORREO
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_TO, // A dónde llegará
      subject: `📩 Nuevo mensaje: ${subject}`,
      text: `
Nombre: ${name}
Correo: ${email}
Asunto: ${subject}

Mensaje:
${message}
      `,
    });

    // Respuesta exitosa
    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error procesando contacto:', error);
    
    // Mensaje más informativo del error
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Detalles del error:', errorMessage);
    
    return NextResponse.json(
      { 
        error: 'Error al enviar el mensaje',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
