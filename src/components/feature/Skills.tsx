import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { skillCategories } from '@/constants/skillCategories';

export default function Skills() {
    return (
        <section id="skills" className="bg-(--base-1) text-(--text-1) py-20">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    Skills & <span className="text-(--principal-1)">Tech Stack.</span>
                </SectionTitle>

                <p className="text-gray-400 text-xl text-center mb-16 max-w-3xl mx-auto">
                    Estas son las tecnologías y herramientas con las que trabajo día a día para crear
                    soluciones web de alta calidad.
                </p>
                <div className="grid md:grid-cols-2 gap-12">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-[#0A0A0A] p-8 rounded-lg border border-(--base-3) hover:border-(--principal-1) transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">{category.icon}</span>
                                <h3 className="text-2xl font-bold">{category.category}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-(--text-2)">{skill.name}</span>
                                            <span className="text-(--text-1) font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-linear-to-r from-(--principal-1) to-(--principal-2) h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
