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
    // Penempatan komentar sudah benar, menyatu dengan baris <section>
    <section 
      className="pt-32 sm:pt-40 pb-16 md:pb-32 px-4 bg-background relative overflow-hidden"
    >
      
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[180px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCA2MCAwIDYwIDYwIDAgNjAgMCAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjAsIDIyMCwgMjUwLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkpIi8+PC9zdmc=')] opacity-5"></div>
      
      <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Kolom Kiri: Teks & CTA (7 Kolom di LG) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7">
          
          {/* Tagline */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 transition-all hover:bg-primary/20 animate-fade-in-down" 
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Jadikan Bisnis Anda Eksis di Dunia Digital</span>
          </div>
          
          {/* Title - Font Size Mobile: text-4xl -> sm:text-5xl -> md:text-7xl */}
          <h2 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight animate-fade-in-down" 
            style={{ animationDelay: '0.3s' }}
          >
            Website <span className="text-foreground/80">Premium</span>
            <br />
            & <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Berdaya Jual Tinggi</span>
          </h2>
          
          {/* Subtitle - Font Size Mobile: text-base -> sm:text-lg -> md:text-xl */}
          <p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in" 
            style={{ animationDelay: '0.5s' }}
          >
            Kami adalah partner freelance terpercaya Anda dalam membangun Company Profile, Landing Page, dan Toko Online yang dirancang untuk <span className="font-semibold text-primary">Konversi</span>.
          </p>
          
          {/* Tombol CTA - Padding & Text Size Mobile: px-8 py-5 text-lg (di mobile) */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 animate-fade-in-up" 
            style={{ animationDelay: '0.7s' }}
          >
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:shadow-glow-strong font-bold px-8 py-5 sm:px-10 sm:py-7 text-lg sm:text-xl transition-all duration-300 hover:scale-[1.03]"
            >
              <MessageCircle className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Mulai Proyek Saya
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto border border-border/50 text-foreground hover:bg-secondary/50 font-medium px-8 py-5 sm:px-10 sm:py-7 text-base sm:text-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]"
            >
              <Eye className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Lihat Demo Website
            </Button>
          </div>

          {/* Trust Indicators - Ukuran Icon & Text: text-sm -> sm:text-md */}
          <div 
            className="pt-5 sm:pt-8 flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4 text-sm sm:text-md text-muted-foreground border-t border-border/50 mt-4 sm:mt-5 animate-fade-in-up" 
            style={{ animationDelay: '0.9s' }}
          >
            {trustIndicators.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className="flex items-center gap-2 group">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-foreground/90">{item.text}</span>
                    </div>
                );
            })}
          </div>
        </div>

        {/* Kolom Kanan: Ilustrasi Berlapis (Ukuran Card disesuaikan untuk mobile) */}
        <div 
          className="lg:col-span-5 flex justify-center lg:justify-end relative mt-12 lg:mt-0 h-[350px] md:h-[450px] lg:h-[550px] w-full animate-fade-in-right" 
          style={{ animationDelay: '1.1s' }}
        >
          
          {/* Card Belakang */}
          <div className="absolute w-[80%] h-[80%] max-w-[350px] max-h-[300px] bg-secondary/70 backdrop-blur-md rounded-xl p-5 border border-border/50 shadow-2xl shadow-primary/10 -top-4 left-0 transition-all duration-700 hover:scale-[1.02] lg:hover:rotate-[-2deg]">
            <LayoutDashboard className="h-7 w-7 text-primary mb-2" />
            <h4 className="text-lg font-bold text-foreground mb-1">Clean Dashboard</h4>
            <p className="text-xs text-muted-foreground">Sistem manajemen konten yang mudah digunakan.</p>
            <div className="mt-4 space-y-2">
                <div className="h-2 bg-primary/30 rounded-full w-full"></div>
                <div className="h-2 bg-cyan-400/30 rounded-full w-3/4"></div>
            </div>
          </div>

          {/* Card Depan */}
          <div className="absolute w-full max-w-xs sm:max-w-md lg:max-w-lg h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gradient-card backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-primary/40 shadow-xl shadow-primary/30 bottom-0 right-0 transition-all duration-700 hover:scale-[1.05] lg:hover:rotate-[2deg]">
            <div className="h-full bg-background/50 rounded-xl sm:rounded-2xl flex items-center justify-center p-6 sm:p-8 overflow-hidden border border-border/50 relative">
                <div className="absolute inset-0 bg-repeat [background-size:10px_10px] [background-image:linear-gradient(to_right,rgba(var(--foreground-rgb),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--foreground-rgb),0.05)_1px,transparent_1px)]"></div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 opacity-70 text-center animate-pulse">
                    Website Anda di Sini!
                    <p className="text-xs sm:text-sm mt-2 text-muted-foreground/60 font-normal">Tampilan Responsif & Modern</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;