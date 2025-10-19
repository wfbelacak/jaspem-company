import React from 'react';
import { GitBranch, Palette, Rocket, CheckSquare, Sparkles, Zap } from 'lucide-react';

// Data Langkah Kerja (Workflow Steps)
const steps = [
    { 
        icon: GitBranch, 
        title: "1. Konsultasi & Strategi", 
        description: "Kami menganalisis tujuan bisnis, merumuskan peta jalan, dan menyusun blueprint fungsional untuk website yang siap konversi." 
    },
    { 
        icon: Palette, 
        title: "2. Desain Eksklusif (UI/UX)", 
        description: "Pembuatan wireframe dan desain visual yang menawan, mobile-first, dan sesuai dengan identitas (brand identity) unik perusahaan Anda." 
    },
    { 
        icon: Rocket, 
        title: "3. Development & Coding Cepat", 
        description: "Implementasi desain ke dalam kode (React/Vite) yang bersih, SEO-friendly, dan dioptimasi penuh untuk kecepatan loading maksimal." 
    },
    { 
        icon: CheckSquare, 
        title: "4. Pengujian & Go Live", 
        description: "Pengujian fungsionalitas dan keamanan secara menyeluruh (Quality Assurance) sebelum website Anda siap diluncurkan dan beroperasi penuh." 
    },
];

const TechWorkflowSection: React.FC = () => {

    return (
        // Menggunakan padding vertikal yang lebih besar
        <section className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">
            
            {/* Background Effect - Lebih terpusat */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-down transition-colors duration-300 hover:bg-primary/20 cursor-pointer">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Proses Kerja Cerdas</span>
                    </div>
                    {/* Judul Utama - Lebih mencolok */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                        Alur <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Proyek</span> Kami
                    </h2>
                    {/* Deskripsi - Responsive Font Size */}
                    <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        Proses yang transparan dan terstruktur. Kami selalu memastikan komunikasi lancar di setiap tahapan.
                    </p>
                </div>
                
                {/* Timeline Container (Grid Dinamis dengan Efek Jarak) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            // Wrapper Group untuk Hover effect & Staggered Animation
                            className="group animate-fade-in-up" 
                            style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                        >
                            {/* Card Langkah - Full Animasi Hover */}
                            <div 
                                // Tailwind Classes untuk Animasi, Border & Shadow Kuat
                                className="p-6 sm:p-8 bg-gradient-card rounded-2xl border border-border/50 shadow-xl shadow-primary/5 flex flex-col h-full transition-all duration-500 ease-in-out transform 
                                hover:translate-y-[-10px] 
                                hover:shadow-glow-strong 
                                hover:border-cyan-400/70 
                                cursor-pointer relative"
                            >
                                
                                {/* Efek Bawaan di Sudut (Nomor Langkah) */}
                                <div className="absolute top-0 right-0 p-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-cyan-400/80 text-white font-bold text-xl opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
                                        0{index + 1}
                                    </div>
                                </div>

                                {/* Icon Utama - Di Sisi Kiri Atas */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border-2 border-primary/50 transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-105">
                                        <step.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-cyan-400" />
                                    </div>
                                </div>
                                
                                {/* Judul */}
                                <h3 className="text-2xl font-extrabold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                                    {step.title}
                                </h3>

                                {/* Deskripsi - Responsive Font Size */}
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-auto">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechWorkflowSection;