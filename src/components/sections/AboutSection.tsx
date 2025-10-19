import React from "react";
import { Card } from "@/components/ui/card";
import { Edit3, Zap, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
      // Padding disesuaikan
      <section id="tentang" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Decorative Blur Element */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px] transform -translate-y-1/2 animate-float-slow"></div>
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Teks & Penjelasan */}
          <div className="space-y-6 lg:pr-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-2 animate-fade-in-down">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Inti dari Jaspem Creative</span>
            </div>
            
            {/* Judul & Deskripsi - Responsive Font Size */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
                Kenapa Harus Memilih Jasa <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Kami</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Kami fokus pada kualitas, performa, dan hasil konversi. Website yang kami buat adalah aset digital yang bekerja keras untuk bisnis Anda, bukan sekadar pajangan.
            </p>

            {/* Benefit Utama - Responsive Font Size */}
            <div className="pt-4 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg font-medium text-foreground">Mobile-First Development: Tampilan sempurna di semua perangkat.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg font-medium text-foreground">Garansi Kualitas & Support Penuh setelah *launching*.</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Pilar Utama (Hover Effect Unik) */}
          <div className="space-y-8 lg:space-y-10 mt-8 lg:mt-0">
            
            {/* Pilar 1: Performa */}
            <Card className="p-6 bg-gradient-card border-primary/30 shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:translate-y-[-4px] cursor-pointer animate-fade-in-right" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/50 transition-colors group-hover:bg-primary/30">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">1. Sangat Cepat (Performance)</h3>
                  <p className="text-muted-foreground">
                    Pengalaman pengguna terbaik dengan loading website secepat kilat (menggunakan teknologi modern seperti React/Vite).
                  </p>
                </div>
              </div>
            </Card>

            {/* Pilar 2: Custom Design */}
            <Card className="p-6 bg-gradient-card border-primary/30 shadow-2xl hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-[1.02] cursor-pointer animate-fade-in-right" style={{ animationDelay: '1.6s' }}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 border border-cyan-400/50 transition-colors group-hover:bg-cyan-400/30">
                  <Edit3 className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">2. Custom Design</h3>
                  <p className="text-muted-foreground">
                    Bukan template pasaran. Desain eksklusif yang benar-benar mencerminkan brand Anda.
                  </p>
                </div>
              </div>
            </Card>

            {/* Pilar 3: Hasil */}
            <Card className="p-6 bg-gradient-card border-primary/30 shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:translate-x-3 cursor-pointer animate-fade-in-right" style={{ animationDelay: '1.8s' }}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/50 transition-colors group-hover:bg-primary/30">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">3. SEO Ready</h3>
                  <p className="text-muted-foreground">
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