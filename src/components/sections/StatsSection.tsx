import React from "react";

const StatItem: React.FC<{ value: string, title: string, subtitle: string, delay: string }> = ({ value, title, subtitle, delay }) => (
    <div className="animate-scale-in group" style={{ animationDelay: delay }}>
        <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
            {value}
        </div>
        <div className="text-lg text-foreground font-medium">{title}</div>
        <div className="text-sm text-muted-foreground mt-1">{subtitle}</div>
    </div>
);

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <StatItem value="49+" title="Project Selesai" subtitle="Website profesional telah dibuat" delay="0s" />
        <StatItem value="99%" title="Client Puas" subtitle="Tingkat kepuasan pelanggan" delay="0.1s" />
        <StatItem value="98%" title="Tepat Waktu" subtitle="Pengerjaan sesuai deadline" delay="0.2s" />
      </div>
    </section>
  );
};

export default StatsSection;