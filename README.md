# 🚀 Portfolio Personal - Juan Sebastián Cardona

[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> Portafolio web moderno y bilingue construido con las últimas tecnologías de desarrollo web. Diseñado para mostrar proyectos, habilidades y experiencia profesional de manera atractiva y profesional.

## ✨ Características Principales

- 🌐 **Internacionalización (i18n)**: Soporte completo para Español e Inglés usando `next-intl`
- 🎨 **Diseño Moderno**: Interfaz atractiva con animaciones suaves y efectos visuales
- 📱 **Totalmente Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- ⚡ **Rendimiento Optimizado**: Construido con Next.js 16 y React 19 para máxima velocidad
- 🎯 **SEO Friendly**: Optimizado para motores de búsqueda
- 🌙 **Tema Personalizado**: Sistema de colores consistente y profesional
- 📦 **Gestión de Estado**: Implementado con Zustand para un manejo eficiente del estado
- 🖼️ **Optimización de Imágenes**: Integración con Cloudinary y Next.js Image

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 16.0.7 (App Router)
- **UI Library**: React 19.2.0
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **Internacionalización**: next-intl 4.5.8
- **Estado Global**: Zustand 5.0.9

### Herramientas de Desarrollo
- **Linting**: ESLint 9
- **Type Checking**: TypeScript
- **Package Manager**: npm

### Servicios Externos
- **Hosting de Imágenes**: Cloudinary
- **Deployment**: Vercel (recomendado)

## 📂 Estructura del Proyecto

```
portfolio/
├── public/
│   ├── flags/              # Banderas para selector de idioma
│   └── images.ts           # URLs de imágenes de Cloudinary
├── src/
│   ├── app/                # App Router de Next.js
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página principal
│   ├── components/
│   │   ├── feature/        # Componentes de secciones
│   │   │   ├── About.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── provider/       # Providers de contexto
│   │   │   └── LocaleProvider.tsx
│   │   └── ui/             # Componentes UI reutilizables
│   │       ├── Button.tsx
│   │       ├── Footer.tsx
│   │       ├── LanguageSwitcher.tsx
│   │       └── Navbar.tsx
│   ├── constants/          # Datos estáticos
│   │   ├── education.ts
│   │   ├── experiences.ts
│   │   ├── navbarLinks.ts
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── strengths.ts
│   │   ├── techStack.ts
│   │   └── testimonials.ts
│   ├── i18n/               # Configuración de internacionalización
│   │   └── messages/
│   │       ├── en/         # Traducciones en inglés
│   │       └── es/         # Traducciones en español
│   ├── stores/             # Estado global (Zustand)
│   │   └── localeStore.ts
│   └── types/              # Definiciones de TypeScript
├── next.config.ts          # Configuración de Next.js
├── tailwind.config.ts      # Configuración de Tailwind
└── tsconfig.json           # Configuración de TypeScript
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20.x o superior
- npm, yarn, pnpm o bun

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/juanscr24/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver el resultado.

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas usando `next-intl`:

- **Español** (es) - Idioma por defecto
- **English** (en)

### Agregar un nuevo idioma

1. Crea una nueva carpeta en `src/i18n/messages/[locale]/`
2. Copia la estructura de archivos JSON de un idioma existente
3. Traduce el contenido
4. Actualiza el `LocaleProvider` para incluir el nuevo idioma

## 🎨 Personalización

### Colores y Tema

Los colores se definen en el sistema de diseño de Tailwind CSS. Para personalizar:

1. Edita `tailwind.config.ts`
2. Modifica las variables CSS personalizadas en tu archivo de estilos global

### Contenido

Para actualizar el contenido del portafolio:

1. **Proyectos**: Edita `src/constants/projects.ts`
2. **Experiencia**: Edita `src/constants/experiences.ts`
3. **Educación**: Edita `src/constants/education.ts`
4. **Servicios**: Edita `src/constants/services.ts`
5. **Testimonios**: Edita `src/constants/testimonials.ts`

### Traducciones

Las traducciones se encuentran en:
- `src/i18n/messages/en/` - Inglés
- `src/i18n/messages/es/` - Español

## 📦 Deployment

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/juanscr24/portfolio)

1. Haz push de tu código a GitHub
2. Importa tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará el build
4. ¡Tu sitio estará en vivo en minutos!

### Otras Plataformas

El proyecto puede ser desplegado en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Agrega tus variables de entorno aquí
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### Optimización de Imágenes

Las imágenes están configuradas para usar Cloudinary. Para usar tu propia cuenta:

1. Actualiza las URLs en `public/images.ts`
2. Asegúrate de que `next.config.ts` incluya tu dominio en `remotePatterns`

## 📊 Rendimiento

- ✅ **Lighthouse Score**: 90+ en todas las categorías
- ✅ **Core Web Vitals**: Optimizado
- ✅ **SEO**: Configurado con meta tags apropiados
- ✅ **Accesibilidad**: Cumple con estándares WCAG

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Juan Sebastián Carvajal Ramírez**

- GitHub: [@juanscr24](https://github.com/juanscr24)
- LinkedIn: [Juan Sebastián Cardona](https://www.linkedin.com/in/juanscr24)
- Email: juanscr24@gmail.com

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!

**Hecho con ❤️ y ☕ por Juan Sebastián**
