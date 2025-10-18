import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
// Ambil fungsi openWhatsApp
import { openWhatsApp } from "@/components/FloatingButtons"; 

// Data Navigasi untuk memudahkan maintenance
const navLinks = [
  { href: "#tentang", text: "Tentang" },
  { href: "#layanan", text: "Layanan" },
  { href: "#harga", text: "Harga" },
  { href: "#kontak", text: "Kontak" },
];

const HeaderSection: React.FC = () => {
  // CATATAN: isMenuOpen dan logika toggle harus didefinisikan di komponen induk
  // Gunakan state React.useState untuk mengontrol ini di komponen induk (misalnya App.tsx).
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 animate-fade-in-down">
      {/* Container Header Utama */}
      <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
        
        {/* Logo - Ukuran Font Disesuaikan */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent transition-colors duration-300 hover:scale-105">
          Jaspem Creative
        </h1>

        {/* Desktop Navigation - Terlihat di md: dan atas */}
        <nav className="hidden md:flex gap-4 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              {link.text}
            </a>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            onClick={openWhatsApp}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold h-9 px-3 text-sm" 
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Hubungi Kami
          </Button>
        </nav>

        {/* Mobile Menu Button (Hamburger) - Muncul di mobile */}
        <div className="md:hidden flex items-center gap-3">
            <Button 
                variant="outline" 
                size="sm"
                onClick={openWhatsApp}
                // Tombol ini tetap ada di mobile agar mudah dihubungi
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold h-9 px-3 text-sm" 
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleMenu} 
                aria-label="Toggle Menu"
            >
                {/* Ikon yang lebih besar sedikit di mobile */}
                {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />} 
            </Button>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu (Collapsible) - Muncul di mobile saat isMenuOpen true */}
      <div 
        // Menggunakan transisi sederhana untuk efek dropdown
        className={`md:hidden overflow-hidden transition-max-h duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen border-t border-border/50' : 'max-h-0'}`}
      >
        <nav className="flex flex-col items-start px-4 py-3 bg-background/95 backdrop-blur-sm">
            {navLinks.map((link) => (
                <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={closeMenu} // Tutup menu saat link diklik
                    // Ukuran teks disesuaikan agar terlihat bagus di mobile dropdown
                    className="text-base font-semibold hover:text-primary transition-colors w-full py-2 border-b border-border/50 last:border-b-0"
                >
                    {link.text}
                </a>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;