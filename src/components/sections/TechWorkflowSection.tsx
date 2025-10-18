import React from 'react';
import { GitBranch, Palette, Rocket, CheckSquare, Sparkles } from 'lucide-react';

const steps = [
    { icon: GitBranch, title: "1. Konsultasi & Strategi", description: "Kami mendengarkan kebutuhan bisnis Anda dan merancang blueprint fungsional website." },
    { icon: Palette, title: "2. Desain & Mockup", description: "Pembuatan wireframe dan desain visual (UI/UX) yang disesuaikan dengan brand Anda." },
    { icon: Rocket, title: "3. Development & Coding", description: "Proses coding cepat, bersih (Clean Code), dan dioptimasi penuh untuk performa." },
    { icon: CheckSquare, title: "4. Testing & Launching", description: "Pengujian menyeluruh (QA) sebelum website siap diluncurkan (Go Live) di domain Anda." },
];

const TechWorkflowSection: React.FC = () => {

    return (
        // Penyesuaian padding vertikal untuk mobile/desktop
        <section className="py-16 md:py-24 px-4 bg-secondary/30">
            <div className="container mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    {/* Badge (DIPERTAHANKAN) */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Transparansi Proses</span>
                    </div>
                    {/* Judul Utama - Penyesuaian ukuran teks untuk mobile/desktop */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Alur Kerja Kami
                    </h2>
                    {/* Deskripsi - Penyesuaian ukuran teks untuk mobile/desktop */}
                    <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg">
                        Kami menjamin proses yang transparan, terstruktur, dan berorientasi hasil.
                    </p>
                </div>
                
                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line - Hanya terlihat di desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 transform -translate-x-1/2"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12 md:space-y-16">
                        {steps.map((step, index) => (
                            // Penyesuaian tata letak grid untuk mobile/desktop
                            <div 
                                key={index} 
                                className={`flex relative items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} ${index < steps.length - 1 ? 'border-l border-border/50 md:border-none ml-6 pl-4 md:ml-0 md:pl-0' : 'border-none ml-6 pl-4 md:ml-0 md:pl-0'}`}
                            >
                                {/* Konten Card */}
                                <div 
                                    className={`relative w-full ${index % 2 === 0 ? 'md:max-w-[45%]' : 'md:max-w-[45%]'} ${index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2 md:text-left'}`}
                                >
                                    {/* Circle Marker - Hanya terlihat di desktop */}
                                    <div 
                                        className={`hidden md:flex w-12 h-12 rounded-full bg-primary/80 border-4 border-background items-center justify-center flex-shrink-0 absolute top-0 ${index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'}`}
                                    >
                                        <step.icon className="h-6 w-6 text-primary-foreground" />
                                    </div>

                                    {/* Content Card - Penyesuaian padding dan ukuran teks untuk mobile */}
                                    <div className="p-5 sm:p-6 bg-gradient-card rounded-xl border border-border/50 shadow-md w-full md:w-auto flex-grow transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                                        {/* Icon di Mobile (Menggantikan circle di desktop) */}
                                        <div className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                                            <step.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        {/* Ukuran Teks Judul */}
                                        <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                                        {/* Ukuran Teks Deskripsi */}
                                        <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechWorkflowSection;