import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Eye, Zap, Shield, Sparkles, Code, LayoutDashboard } from "lucide-react";
import { openWhatsApp } from "@/components/FloatingButtons"; 

// Data untuk indikator kepercayaan
const trustIndicators = [
  { icon: Shield, text: "Garansi Proyek" },
  { icon: Zap, text: "Performa Cepat" },
  { icon: Code, text: "Clean Code" },
];

const HeroSection: React.FC = () => {
  return (
    <section className="pt-40 pb-20 md:pb-32 px-4 bg-background relative overflow-hidden">
      
      {/* Background Effect: Gradient Bulat Besar dan Grid (Pulsing Effect Enhanced) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[180px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern yang lebih subtle */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCA2MCAwIDYwIDYwIDAgNjAgMCAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjAsIDIyMCwgMjUwLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkpIi8+PC9yZWN0Pjwvc3ZnPg==')] opacity-5"></div>
      
      <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Kolom Kiri: Teks & CTA (7 Kolom di LG) */}
        <div className="lg:col-span-7 space-y-7">
          
          {/* Tagline - Stagger 1 */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 transition-all hover:bg-primary/20 animate-fade-in-down" 
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Jadikan Bisnis Anda Eksis di Dunia Digital</span>
          </div>
          
          {/* Title - Stagger 2 */}
          <h2 
            className="text-5xl md:text-7xl font-extrabold leading-tight animate-fade-in-down" 
            style={{ animationDelay: '0.3s' }}
          >
            Website <span className="text-foreground/80">Premium</span>
            <br />
            & <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Berdaya Jual Tinggi</span>
          </h2>
          
          {/* Subtitle - Stagger 3 */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in" 
            style={{ animationDelay: '0.5s' }}
          >
            Kami adalah partner freelance terpercaya Anda dalam membangun Company Profile, Landing Page, dan Toko Online yang dirancang untuk <span className="font-semibold text-primary">Konversi</span>.
          </p>
          
          {/* Tombol CTA - Stagger 4 */}
          <div 
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" 
            style={{ animationDelay: '0.7s' }}
          >
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:shadow-glow-strong font-bold px-10 py-7 text-xl transition-all duration-300 hover:scale-[1.03]"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Mulai Proyek Saya
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto border border-border/50 text-foreground hover:bg-secondary/50 font-medium px-10 py-7 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]"
            >
              <Eye className="mr-3 h-6 w-6" />
              Lihat Demo Website
            </Button>
          </div>

          {/* Trust Indicators di bawah CTA - Stagger 5 */}
          <div 
            className="pt-8 flex flex-wrap gap-x-10 gap-y-4 text-md text-muted-foreground border-t border-border/50 pt-5 mt-5 animate-fade-in-up" 
            style={{ animationDelay: '0.9s' }}
          >
            {trustIndicators.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className="flex items-center gap-2 group">
                        <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-foreground/90">{item.text}</span>
                    </div>
                );
            })}
          </div>
        </div>

        {/* Kolom Kanan: Ilustrasi Berlapis (5 Kolom di LG) */}
        <div 
          className="lg:col-span-5 flex justify-center lg:justify-end relative mt-16 lg:mt-0 h-[400px] md:h-[500px] lg:h-[550px] w-full animate-fade-in-right" 
          style={{ animationDelay: '1.1s' }}
        >
          
          {/* Card Belakang (Desain abstrak/Admin Panel) */}
          <div className="absolute w-[80%] h-[80%] max-w-[400px] max-h-[350px] bg-secondary/70 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-2xl shadow-primary/10 -top-4 left-0 transition-all duration-700 hover:scale-[1.02] lg:hover:rotate-[-2deg]">
            <LayoutDashboard className="h-8 w-8 text-primary mb-3" />
            <h4 className="text-xl font-bold text-foreground mb-1">Clean Dashboard</h4>
            <p className="text-sm text-muted-foreground">Sistem manajemen konten yang mudah digunakan.</p>
            <div className="mt-4 space-y-2">
                <div className="h-2 bg-primary/30 rounded-full w-full"></div>
                <div className="h-2 bg-cyan-400/30 rounded-full w-3/4"></div>
            </div>
          </div>

          {/* Card Depan (Mockup Website Responsif) - Jendela Utama [REVISI BAGIAN INI] */}
          <div className="absolute w-full max-w-sm sm:max-w-md lg:max-w-lg h-[350px] md:h-[400px] lg:h-[450px] bg-gradient-card backdrop-blur-lg rounded-3xl p-6 border-2 border-primary/40 shadow-xl shadow-primary/30 bottom-0 right-0 transition-all duration-700 hover:scale-[1.05] lg:hover:rotate-[2deg]">
            
            {/* CONTAINER BARU UNTUK DIAGRAM GARIS */}
            <div className="h-full bg-background/50 rounded-2xl flex items-center justify-center p-4 sm:p-6 overflow-hidden border border-border/50 relative">
                {/* Efek Garis Diagonal Estetika */}
                <div className="absolute inset-0 bg-repeat [background-size:10px_10px] [background-image:linear-gradient(to_right,rgba(var(--foreground-rgb),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--foreground-rgb),0.05)_1px,transparent_1px)]"></div>
                
                {/* Konten DIAGRAM GARIS STATISTIK KONVERSI (Baru) */}
                <div className="relative w-full h-full flex flex-col justify-end">
                    
                    {/* Header Statistik */}
                    <div className="mb-4 text-left">
                        <p className="text-sm font-semibold text-primary/80">Rata-Rata Konversi (3 Bulan)</p>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                            +37.5%
                            <span className="text-base font-normal text-muted-foreground ml-2">Goal: +40%</span>
                        </h3>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="h-24 sm:h-32 relative w-full pt-4">
                        {/* Grid lines (Simulated Y-Axis markers) */}
                        <div className="absolute inset-x-0 top-0 h-full flex flex-col justify-between opacity-30">
                            <div className="h-px bg-border/50"></div>
                            <div className="h-px bg-border/50"></div>
                            <div className="h-px bg-border/50"></div>
                            <div className="h-px bg-border/50"></div>
                        </div>
                        
                        {/* The Line Chart Path (Static SVG representation) */}
                        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                            {/* The line itself - menggunakan warna Cyan-400 dengan glow */}
                            <polyline 
                                fill="none" 
                                stroke="#06B6D4" // Hex untuk Cyan-400
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                points="0,45 25,10 50,35 75,20 100,5" 
                                className="transition-all duration-1000"
                                style={{ filter: 'drop-shadow(0 0 5px rgba(6, 182, 212, 0.5))' }} 
                            />
                            {/* Area di bawah garis (untuk kedalaman visual) */}
                            <path 
                                d="M 0,45 L 25,10 L 50,35 L 75,20 L 100,5 L 100,50 L 0,50 Z" 
                                fill="#06B6D4" // Hex untuk Cyan-400
                                opacity="0.1"
                            />
                        </svg>
                    </div>
                    <p className="text-xs text-muted-foreground/70 mt-4 text-center">Data konversi rata-rata, sumber: Google Analytics.</p>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;