import React from "react";
import { Card } from "../ui/card";
import { Edit3, Zap, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
      <section id="tentang" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Decorative Blur Element - Dipertahankan */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px] transform -translate-y-1/2 animate-float-slow hidden lg:block"></div>
        
        {/* Kontainer Utama */}
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Teks & Penjelasan */}
          <div className="space-y-6 lg:pr-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-2 animate-fade-in-down">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Inti dari Jaspem Creative</span>
            </div>
            
            {/* Judul Utama - Penyesuaian ukuran teks untuk mobile/desktop */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
              Kenapa Pilih <br />
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Jaspem Creative
              </span>
            </h2>
            
            {/* Paragraf Utama - Penyesuaian ukuran teks untuk mobile */}
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className="text-primary font-semibold">Jaspem Creative</span> adalah layanan jasa pembuatan website freelance yang dikelola oleh Yoga — developer yang berfokus membantu **UMKM, travel, dan bisnis lokal** membangun kehadiran online yang profesional dan berdaya jual.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-base animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Kami tidak hanya membuat website, tapi membangun **aset digital** yang:
            </p>
            
            {/* Daftar Fitur */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3 group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-foreground font-semibold">Fokus Konversi</span>
                  <p className="text-sm text-muted-foreground">Desain dibuat untuk mengarahkan pengguna menjadi pembeli.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-foreground font-semibold">Teknologi Terkini</span>
                  <p className="text-sm text-muted-foreground">Dibangun dengan teknologi modern (React/Next.js) untuk kecepatan maksimal.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-foreground font-semibold">Dukungan Penuh</span>
                  <p className="text-sm text-muted-foreground">Garansi dan panduan setelah peluncuran website Anda.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative space-y-6 sm:space-y-8 mt-10 lg:mt-0">
            
            {/* Pilar 1: Kecepatan & Performa */}
            <Card className="p-5 sm:p-6 bg-gradient-card border-primary/30 shadow-2xl hover:shadow-glow transition-all duration-300 transform translate-x-0 hover:translate-x-3 animate-fade-in-right" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/50">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 text-foreground">1. Kecepatan & Performa</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Kami menjamin loading time di bawah 3 detik. Cepat = Konversi Tinggi.
                  </p>
                </div>
              </div>
            </Card>

            {/* Pilar 2: Custom Design (Menjorok hanya di desktop) */}
            <Card className="p-5 sm:p-6 bg-gradient-card border-cyan-400/30 shadow-2xl hover:shadow-glow-cyan transition-all duration-300 transform translate-x-0 hover:translate-x-3 lg:ml-12 animate-fade-in-right" style={{ animationDelay: '1.6s' }}>
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 border border-cyan-400/50">
                  <Edit3 className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 text-foreground">2. Custom Design</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Bukan template pasaran. Desain eksklusif yang benar-benar mencerminkan brand Anda.
                  </p>
                </div>
              </div>
            </Card>

            {/* Pilar 3: SEO Ready */}
            <Card className="p-5 sm:p-6 bg-gradient-card border-primary/30 shadow-2xl hover:shadow-glow transition-all duration-300 transform translate-x-0 hover:translate-x-3 animate-fade-in-right" style={{ animationDelay: '1.8s' }}>
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/50">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 text-foreground">3. SEO Ready</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Struktur kode yang bersih siap untuk diindeks oleh mesin pencari (Google).
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
        </div>
      </section>
  );
};

export default AboutSection;