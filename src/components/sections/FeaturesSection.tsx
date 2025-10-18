import React from "react";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Zap, Edit3, CheckCircle2, Package, Headphones, Sparkles } from "lucide-react";

// Definisikan tipe untuk fitur (DIPERTAHANKAN)
interface Feature {
    icon: React.ElementType;
    title: string;
    description: string;
}

const openWhatsApp = () => { 
    window.open("https://wa.me/6281234567890", "_blank");
  };

const FeaturesSection: React.FC = () => {
  return (
    // Penyesuaian padding vertikal untuk mobile/desktop dan background
    <section id="layanan" className="py-16 md:py-24 px-4 bg-gray-900 relative overflow-hidden">
        {/* Decorative Background: Dark Nebula Effect (DIPERTAHANKAN) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[180px] transform -translate-y-1/2 animate-slow-float"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/30 rounded-full blur-[180px] animate-slow-float-reverse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            {/* Badge (DIPERTAHANKAN) */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-down">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nilai & Keunggulan Kami</span>
            </div>
            {/* Judul Utama - Penyesuaian ukuran teks untuk mobile/desktop */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
              Kenapa Harus <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Yogz Creative?</span>
            </h2>
            {/* Deskripsi - Penyesuaian ukuran teks untuk mobile/desktop */}
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Kami adalah partner yang fokus pada performa, desain eksklusif, dan dukungan penuh untuk mencapai hasil maksimal bisnis Anda.
            </p>
          </div>
          
          {/* Asymmetric Grid Layout - Disesuaikan agar mudah dibaca di mobile (1 kolom) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Kartu Utama (Highlight: Span 2 kolom) */}
            {/* Ukuran Card, Padding, Text, dan Icon disesuaikan */}
            <Card className="p-6 sm:p-10 bg-gradient-card border-2 border-cyan-400/50 shadow-2xl hover:shadow-glow-cyan transition-all hover:scale-[1.02] sm:hover:scale-[1.05] group relative overflow-hidden md:col-span-2 lg:col-span-2 animate-fade-in-left" style={{ animationDelay: '0.6s'}}>
              <div className="relative z-10 space-y-3 sm:space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0 border border-cyan-400/70 group-hover:rotate-6 transition-transform duration-500">
                  <Edit3 className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Free Copywriting Pro</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  Lupakan *filler text*. Kami menyediakan **copywriting strategis** yang telah dioptimalkan untuk meningkatkan rasio konversi secara signifikan.
                </p>
              </div>
            </Card>

            {/* Kartu Pendukung 1 (Kualitas) */}
            {/* Ukuran Card, Padding, Text, dan Icon disesuaikan */}
            <Card className="p-6 sm:p-8 bg-gradient-card border border-primary/30 shadow-lg hover:shadow-glow transition-all hover:translate-y-[-5px] sm:hover:translate-y-[-10px] group relative overflow-hidden lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '0.8s'}}>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-primary/50">
                  <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Kualitas Terjamin</h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                  Desain profesional, kode bersih, dan 100% responsif di semua perangkat.
                </p>
              </div>
            </Card>

            {/* Kartu Pendukung 2 (Performa/Speed) */}
            {/* Ukuran Card, Padding, Text, dan Icon disesuaikan */}
            <Card className="p-6 sm:p-8 bg-gradient-card border border-primary/30 shadow-lg hover:shadow-glow transition-all hover:translate-y-[-5px] sm:hover:translate-y-[-10px] group relative overflow-hidden lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '1.0s'}}>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-primary/50">
                  <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Performa Maksimal</h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                  Dibangun dengan teknologi tercepat (Next.js/React) menjamin loading time 3 detik.
                </p>
              </div>
            </Card>
            
            {/* Kartu Pendukung 3 (Full Support) */}
            {/* Ukuran Card, Padding, Text, dan Icon disesuaikan */}
            <Card className="p-6 sm:p-8 bg-gradient-card border border-primary/30 shadow-lg hover:shadow-glow transition-all hover:translate-y-[-5px] sm:hover:translate-y-[-10px] group relative overflow-hidden lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '1.2s'}}>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-primary/50">
                  <Headphones className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Full Support</h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                  Bantuan teknis gratis selama masa garansi. Kami selalu siap siaga membantu Anda.
                </p>
              </div>
            </Card>

            {/* Kartu Tambahan (Tinggal Beres & SEO Ready) */}
            {/* Ukuran Card, Padding, Text, dan Icon disesuaikan */}
            <Card className="p-6 sm:p-8 bg-gradient-card border border-primary/30 shadow-lg hover:shadow-glow transition-all hover:shadow-cyan-500/50 group relative overflow-hidden md:col-span-2 lg:col-span-3 animate-fade-in-right mt-0 md:mt-4" style={{ animationDelay: '1.4s'}}>
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/50">
                  <Package className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">Tinggal Terima Beres & SEO Ready</h3>
                  <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                    Mulai dari desain, copywriting, optimasi SEO dasar, hingga setting domain—semuanya kami urus. Anda tinggal fokus pada bisnis.
                  </p>
                </div>
              </div>
            </Card>

            {/* Kartu CTA Cepat - Mengisi sisa 2 kolom di LG */}
             {/* Ukuran Card, Padding, Text, dan Button disesuaikan */}
             <Card className="p-6 sm:p-8 bg-gradient-card border border-cyan-400/40 shadow-xl hover:shadow-glow-cyan transition-all hover:scale-[1.01] sm:hover:scale-[1.02] group relative overflow-hidden md:col-span-2 lg:col-span-2 mt-0 md:mt-4 animate-fade-in-right" style={{ animationDelay: '1.6s'}}>
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-base sm:text-lg font-bold text-cyan-400">
                        Siap Konsultasi Gratis?
                    </div>
                    <Button 
                        size="lg" 
                        onClick={openWhatsApp}
                        // Penyesuaian padding dan ukuran teks tombol untuk mobile
                        className="bg-gradient-to-r from-primary to-cyan-400 text-white hover:shadow-glow font-semibold px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base flex-shrink-0 w-full sm:w-auto"
                    >
                        <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Hubungi Sekarang
                    </Button>
                </div>
            </Card>

          </div>
          
        </div>
      </section>
  );
};

export default FeaturesSection;