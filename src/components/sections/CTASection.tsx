import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import { openWhatsApp } from "@/components/FloatingButtons"; // Pastikan path ini benar

const CTASection: React.FC = () => {
  return (
    <section id="kontak" className="py-16 md:py-24 px-4 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Elemen Dekoratif Blur - Dipertahankan (Bisa ditambahkan 'hidden lg:block' jika ingin disembunyikan di mobile) */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Siap Memulai?</span>
        </div>
        
        {/* Judul Utama - Disesuaikan untuk mobile/desktop */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug md:leading-tight">
          Siap Bikin Website <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Profesional</span><br className="block sm:hidden" />untuk Bisnismu?
        </h2>
        
        {/* Paragraf 1 - Disesuaikan untuk mobile/desktop */}
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
          Yogz Creative siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!
        </p>
        
        {/* Paragraf 2 - Disesuaikan untuk mobile/desktop */}
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Mulai dari company profile, landing page, sampai toko online — semua bisa kamu dapatkan dengan mudah dan tanpa ribet.
        </p>
        
        {/* Kotak Konsultasi Gratis - Disesuaikan padding dan teks untuk mobile */}
        <div className="inline-block bg-gradient-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/30 mb-8 shadow-glow max-w-full">
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">
            🎉 Gratis Konsultasi & Penawaran Cepat!
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            Klik tombol di bawah untuk mulai diskusi sekarang via WhatsApp
          </p>
        </div>
        
        {/* Tombol CTA - Disesuaikan ukuran dan padding untuk mobile/desktop */}
        <Button 
          // Ukuran disetel ke 'default' atau 'lg' untuk desktop, dan padding diatur secara eksplisit
          size="lg" 
          onClick={openWhatsApp}
          className="bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:shadow-glow-strong font-bold px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-[1.03] sm:hover:scale-105 w-full sm:w-auto"
        >
          <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
          Konsultasi Gratis Sekarang
        </Button>
      </div>
    </section>
  );
};

export default CTASection;