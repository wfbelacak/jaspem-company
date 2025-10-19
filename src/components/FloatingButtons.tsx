import { FaWhatsapp } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

// Fungsi untuk membuka WhatsApp (didefinisikan di sini untuk dipakai di tombol)
export const openWhatsApp = () => {
    // Arahkan ke rute baru di aplikasi React Anda
    window.location.href = '/jaspem-company/whatsapp-select'; 
    // Jika Anda ingin menggunakan React Router hook, gunakan navigate('/whatsapp-select')
};

// Hook untuk scroll ke atas
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-glow z-50 transition-all hover:scale-110 group"
        aria-label="WhatsApp"
      >
        {/* Mengganti MessageCircle dengan FaWhatsapp */}
        <FaWhatsapp className="h-8 w-8 text-white group-hover:scale-110 transition-transform" /> 
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-primary to-cyan-400 hover:shadow-glow rounded-full flex items-center justify-center shadow-card z-50 transition-all animate-fade-in hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 text-primary-foreground" />
        </button>
      )}
    </>
  );
};

export { FloatingButtons};