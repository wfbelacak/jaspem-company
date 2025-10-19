import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { openWhatsApp } from "@/components/FloatingButtons"; 

// Data Navigasi
const navLinks = [
  { href: "#tentang", text: "Tentang" },
  { href: "#layanan", text: "Layanan" },
  { href: "#harga", text: "Harga" },
  { href: "#kontak", text: "Kontak" },
];

const HeaderSection: React.FC = () => {
  // Menggunakan state di sini untuk kemudahan
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 animate-fade-in-down">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
        
        {/* Logo - Responsive & Hover Effect */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105">
          Jaspem Studios
        </h1>

        {/* Desktop Navigation - Responsive & Hover Effect */}
        <nav className="hidden md:flex gap-4 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              // Hover effect: Scale dan warna
              className="hover:text-primary transition-all duration-300 font-medium text-sm lg:text-base hover:scale-[1.05]"
            >
              {link.text}
            </a>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            onClick={openWhatsApp}
            // Hover effect pada tombol
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold h-9 px-3 text-sm transition-all duration-300 hover:scale-[1.05]" 
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Hubungi Kami
          </Button>
        </nav>

        {/* Mobile Menu Button (Hamburger) - Responsive */}
        <div className="md:hidden flex items-center gap-3">
            <Button 
                variant="outline" 
                size="sm"
                onClick={openWhatsApp}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold h-9 px-3 text-sm transition-all duration-300" 
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleMenu} 
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />} 
            </Button>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu (Collapsible) - Responsive Structure */}
      <div 
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen border-t border-border/50' : 'max-h-0'}`}
      >
        <nav className="flex flex-col items-start px-4 py-3 bg-background/95 backdrop-blur-sm">
            {navLinks.map((link) => (
                <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={closeMenu}
                    // Hover effect pada link mobile
                    className="text-base font-semibold hover:text-primary transition-all duration-300 w-full py-2 border-b border-border/50 last:border-b-0 hover:bg-secondary/50"
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