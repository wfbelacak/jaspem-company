import React from 'react';
import { ChevronLeft, MessageSquareText, Zap, Code, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Data Admin WhatsApp (Menambahkan Profile Image Placeholder)
const adminOptions = [
    { 
        id: 1, 
        name: "Ali Rahman", 
        role: "Lead Project Manager",
        phone: "6287852949648", // GANTI DENGAN NOMOR ADMIN 1
        message: "Halo Kak Ali, saya ingin konsultasi tentang pembuatan website premium.",
        icon: Zap,
        imagePlaceholder: "bg-blue-400/50", // Placeholder warna untuk foto
        isFeatured: true, 
    },
    { 
        id: 2, 
        name: "Muhammad Wafa", 
        role: "UI/UX & Design Specialist",
        phone: "6283130456470", // GANTI DENGAN NOMOR ADMIN 2
        message: "Halo Kak Wafa, saya ingin konsultasi tentang pembuatan website premium.",
        icon: Code,
        imagePlaceholder: "bg-orange-400/50", // Placeholder warna untuk foto
        isFeatured: false,
    },
];

// Fungsi untuk membuat link WhatsApp
const generateWhatsAppLink = (phone: string, message: string) => {
    const phoneClean = phone.replace(/[^0-9]/g, ''); 
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneClean}?text=${encodedMessage}`;
};

const WhatsAppRedirectPage: React.FC = () => {
    return (
        // Menggunakan min-h-screen, padding, dan background yang menawan
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
            
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>

            {/* Tombol kembali */}
            <a 
                href="/" 
                className="absolute top-8 left-8 text-muted-foreground hover:text-primary flex items-center transition-colors duration-300 z-10 font-medium group hover:scale-[1.05]"
            >
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-0.5 transition-transform" />
                Kembali
            </a>

            <Card className="max-w-3xl w-full text-center bg-gradient-card backdrop-blur-md rounded-3xl p-6 sm:p-12 border border-primary/20 shadow-2xl shadow-primary/10 relative z-10 animate-fade-in-down">
                
                {/* Header Section */}
                <div className='mb-10'>
                    <MessageSquareText className="h-10 w-10 sm:h-12 sm:w-12 text-white p-2 rounded-full bg-green-500 mx-auto mb-4 relative z-10 shadow-lg animate-bounce-slow" />
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3 leading-tight">
                        Pilih <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Spesialis</span> Kami
                    </h1>
                    <p className="text-base text-muted-foreground max-w-md mx-auto">
                        Agar respon lebih cepat, silakan pilih admin yang paling sesuai dengan kebutuhan konsultasi Anda.
                    </p>
                </div>

                {/* Grid Pilihan Admin (Card Profile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {adminOptions.map((admin) => {
                        const Icon = admin.icon;
                        return (
                            <div 
                                key={admin.id}
                                className={`group p-1 rounded-2xl transition-all duration-500 transform ${
                                    admin.isFeatured 
                                        ? 'bg-gradient-to-r from-primary/70 to-cyan-400/70 shadow-glow-cyan hover:scale-[1.05]' // Paling menonjol
                                        : 'bg-border/50 hover:scale-[1.03]'
                                }`}
                            >
                                {/* Inner Card Content */}
                                <div className="bg-background/80 rounded-xl p-6 sm:p-8 flex flex-col items-center border border-transparent transition-all duration-300 group-hover:border-primary/50">
                                    
                                    {/* Profile Avatar (Placeholder) */}
                                    <div className={`w-20 h-20 rounded-full ${admin.imagePlaceholder} flex items-center justify-center border-4 border-background shadow-lg mb-4 relative overflow-hidden transition-all duration-500 group-hover:scale-110`}>
                                        {/* Placeholder Inisial atau Icon */}
                                        <span className='text-3xl font-bold text-white/90'>{admin.name.split(' ')[0][0]}{admin.name.split(' ')[1][0]}</span>
                                        {/* Badge Featured */}
                                        {admin.isFeatured && (
                                            <div className='absolute -top-1 -right-1 bg-yellow-400 p-1.5 rounded-full shadow-md'>
                                                <Star className='h-4 w-4 text-yellow-800 fill-yellow-800' />
                                            </div>
                                        )}
                                    </div>

                                    {/* Nama & Posisi */}
                                    <h3 className="text-xl font-bold text-foreground mb-1">{admin.name}</h3>
                                    <p className={`text-sm font-medium mb-4 ${admin.isFeatured ? 'text-cyan-400' : 'text-muted-foreground'}`}>{admin.role}</p>
                                    
                                    {/* Deskripsi Role */}
                                    <div className="flex items-center gap-2 mb-6 text-muted-foreground/80">
                                        <Icon className="h-5 w-5 text-primary/70" />
                                        <span className='text-sm italic'>
                                            {admin.isFeatured ? 'Spesialis Konsultasi Proyek Baru' : 'Fokus Bantuan Teknis'}
                                        </span>
                                    </div>
                                    
                                    {/* Tombol CTA WhatsApp */}
                                    <Button
                                        asChild
                                        size="lg"
                                        className={`w-full h-auto py-3.5 text-white font-semibold text-base rounded-lg transition-all duration-300 transform group-hover:translate-y-[-2px] ${
                                            admin.isFeatured 
                                                ? 'bg-gradient-to-r from-primary to-cyan-400 hover:shadow-glow-strong' 
                                                : 'bg-green-500 hover:bg-green-600'
                                        }`}
                                    >
                                        <a 
                                            href={generateWhatsAppLink(admin.phone, admin.message)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2"
                                        >
                                            <MessageSquareText className="h-5 w-5" />
                                            Chat {admin.name.split(' ')[0]}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                <p className="text-xs text-muted-foreground mt-10">
                    Kami berusaha merespons dalam waktu 5-10 menit di jam kerja.
                </p>

            </Card>
        </div>
    );
};

export default WhatsAppRedirectPage;