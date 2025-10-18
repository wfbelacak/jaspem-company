import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Sparkles } from "lucide-react";

const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Project</span> Showcase
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
          Berikut hasil pembuatan website yang telah saya kerjakan untuk berbagai jenis bisnis.
        </p>
        <div className="max-w-3xl mx-auto bg-gradient-card rounded-2xl p-8 border border-primary/20 mb-8">
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-4">
            Website Travel & Tour
          </div>
          <p className="text-muted-foreground mb-6">
            Contoh website untuk bisnis travel dan tour dengan fitur katalog paket wisata, booking system, dan galeri destinasi.
          </p>
          {/* Anda bisa menambahkan gambar pratinjau di sini */}
        </div>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8"
        >
          <Eye className="mr-2 h-5 w-5" />
          Lihat Portfolio Lengkap
        </Button>
      </div>
    </section>
  );
};

export default ProjectShowcase;