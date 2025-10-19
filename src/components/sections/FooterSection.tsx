import React from "react";

const FooterSection: React.FC = () => {
  return (
    // Penyesuaian padding vertikal untuk mobile/desktop
    <footer className="py-6 md:py-8 px-4 bg-background border-t border-border/50">
      <div className="container mx-auto text-center">
        {/* Penyesuaian ukuran teks untuk copyright */}
        <p className="text-sm md:text-base text-muted-foreground mb-2">
          Copyright © 2025 <span className="text-primary font-semibold">Jaspem Studios</span>
        </p>
        {/* Penyesuaian ukuran teks untuk keterangan */}
        <p className="text-xs md:text-sm text-muted-foreground/70">
          Powered by Tilu Pilar Pemrograman
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;