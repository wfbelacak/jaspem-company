import React from 'react';

// Komponen ini menggunakan kelas CSS kustom yang HARUS didefinisikan di file CSS global Anda.
const GalaxyBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
            {/* Lapisan 1: Warna Dasar */}
            <div className="absolute inset-0 bg-gray-900"></div>

            {/* Lapisan 2: Dua Blob Energi Besar (Animasi Nebula) */}
            {/* Menggunakan kelas CSS kustom 'animate-slow-float' */}
            <div 
                className="absolute top-0 left-0 w-[80vw] h-[80vh] bg-blue-900/40 rounded-full blur-[200px] animate-slow-float"
                style={{ animationDuration: '40s' }}
            ></div>
            <div 
                className="absolute bottom-0 right-0 w-[70vw] h-[70vh] bg-cyan-700/40 rounded-full blur-[200px] animate-slow-float-reverse"
                style={{ animationDuration: '35s', animationDelay: '5s' }}
            ></div>

            {/* Lapisan 3: Efek Starfield (Menggunakan kelas CSS kustom 'starfield') */}
            <div className="starfield"></div>
            
        </div>
    );
};

export default GalaxyBackground;