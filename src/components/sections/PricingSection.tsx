import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { openWhatsApp } from "@/components/FloatingButtons"; // Pastikan path ini benar

// Komponen Pembantu untuk menampilkan fitur di dalam paket
const FeatureListItem: React.FC<{ children: React.ReactNode, isFeatured?: boolean }> = ({ children, isFeatured = false }) => (
    <li className="flex items-start gap-3">
        <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${isFeatured ? 'bg-foreground/20' : 'bg-primary/20'}`}>
            <CheckCircle2 className={`h-4 w-4 ${isFeatured ? 'text-foreground' : 'text-primary'}`} />
        </div>
        <span className={`text-sm ${isFeatured ? 'text-foreground' : 'text-muted-foreground'} ${isFeatured && 'font-semibold'}`}>
            {children}
        </span>
    </li>
);

// Komponen Pembantu untuk konten tab sederhana
const SimpleTabContent: React.FC<{ title: string, price: string }> = ({ title, price }) => (
    <div className="text-center py-16 bg-gradient-card rounded-2xl border border-primary/20">
        <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 text-lg">{price}</p>
        <Button className="bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:shadow-glow font-semibold px-8" onClick={openWhatsApp}>
            <MessageCircle className="mr-2 h-5 w-5" />
            Konsultasi via WhatsApp
        </Button>
    </div>
);

const PricingSection: React.FC = () => {
  return (
    <section id="harga" className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjAsIDIyMCwgMjUwLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Harga Terbaik</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Pricelist</span> Layanan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Solusi lengkap untuk bantu bisnis anda eksis di dunia digital!
          </p>
        </div>

        <Tabs defaultValue="landing" className="mb-12">
          {/* Tabs List */}
          <TabsList className="justify justify-grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-12 bg-secondary/50 backdrop-blur-sm p-1 rounded-xl border border-border/50">
            <TabsTrigger value="landing" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-cyan-400/20 data-[state=active]:text-primary">Landing Page</TabsTrigger>
            <TabsTrigger value="company" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-cyan-400/20 data-[state=active]:text-primary">Company Profile</TabsTrigger>
            <TabsTrigger value="travel" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-cyan-400/20 data-[state=active]:text-primary">Travel & Tour</TabsTrigger>
          </TabsList>

          {/* Toko Online Content */}
          <TabsContent value="landing">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Package */}
              <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2 text-foreground">Starter</h3>
                  <p className="text-sm text-muted-foreground mb-6">Perfect untuk pemula</p>
                  <div className="text-4xl font-bold mb-8">
                    <span className="text-2xl text-muted-foreground">Rp</span>{" "}
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">2.500.000</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <FeatureListItem>Free Domain (.com)</FeatureListItem>
                    <FeatureListItem>Shared Hosting (6 Bulan)</FeatureListItem>
                    <FeatureListItem>Desain Responsif (Mobile & Desktop)</FeatureListItem>
                    <FeatureListItem>1 Halaman Landing Page</FeatureListItem>
                    <FeatureListItem>1 Email Bisnis</FeatureListItem>
                    <FeatureListItem>2 GB Disk Storage</FeatureListItem>
                    <FeatureListItem>2x Revisi Gratis</FeatureListItem>
                  </ul>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:shadow-glow font-semibold" 
                    onClick={openWhatsApp}
                  >
                    Order Sekarang
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4 text-center italic">
                    *Cocok untuk brand yang baru mulai jualan online
                  </p>
                </div>
              </Card>

              {/* Growth Package - Featured */}
              <Card className="p-8 bg-gradient-to-br from-primary/20 via-cyan-400/20 to-primary/20 border-primary relative shadow-glow-strong scale-105 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/30 to-transparent rounded-bl-full"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                  ⭐ Terpopuler
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2 text-foreground">Growth</h3>
                  <p className="text-sm text-foreground/80 mb-6">Paling banyak dipilih</p>
                  <div className="text-4xl font-bold mb-8">
                    <span className="text-2xl text-foreground/70">Rp</span>{" "}
                    <span className="text-foreground">6.000.000</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <FeatureListItem isFeatured={true}>Semua yang ada di Starter, plus:</FeatureListItem>
                    <FeatureListItem isFeatured={true}>Hosting 1 Tahun</FeatureListItem>
                    <FeatureListItem isFeatured={true}>5-7 Halaman Website</FeatureListItem>
                    <FeatureListItem isFeatured={true}>Katalog Produk (20-100 produk)</FeatureListItem>
                    <FeatureListItem isFeatured={true}>Fitur Search & Filter</FeatureListItem>
                    <FeatureListItem isFeatured={true}>Checkout via WhatsApp</FeatureListItem>
                    <FeatureListItem isFeatured={true}>SEO On-Page Basic</FeatureListItem>
                  </ul>
                  <Button 
                    className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold shadow-lg" 
                    onClick={openWhatsApp}
                  >
                    Order Sekarang
                  </Button>
                  <p className="text-xs text-foreground/80 mt-4 text-center italic">
                    *Toko online profesional dengan sistem pemesanan otomatis
                  </p>
                </div>
              </Card>

              {/* Ultimate Package */}
              <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2 text-foreground">Ultimate</h3>
                  <p className="text-sm text-muted-foreground mb-6">Solusi lengkap enterprise</p>
                  <div className="text-4xl font-bold mb-8">
                    <span className="text-2xl text-muted-foreground">Rp</span>{" "}
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">12.000.000</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <FeatureListItem>Semua yang ada di Growth, plus:</FeatureListItem>
                    <FeatureListItem>Sistem Keranjang Otomatis</FeatureListItem>
                    <FeatureListItem>Payment Gateway Integration</FeatureListItem>
                    <FeatureListItem>Multi Payment Method</FeatureListItem>
                    <FeatureListItem>Dashboard Admin Lengkap</FeatureListItem>
                    <FeatureListItem>Email Notification System</FeatureListItem>
                    <FeatureListItem>Garansi 1,5 Bulan</FeatureListItem>
                  </ul>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:shadow-glow font-semibold" 
                    onClick={openWhatsApp}
                  >
                    Order Sekarang
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4 text-center italic">
                    *Toko online full fitur untuk bisnis yang serius scaling
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Other tabs content - simplified */}
          <TabsContent value="company"><SimpleTabContent title="Company Profile Package" price="Paket Company Profile mulai dari Rp 3.000.000" /></TabsContent>
          <TabsContent value="travel"><SimpleTabContent title="Travel & Tour Website" price="Paket Website Travel & Tour mulai dari Rp 5.000.000" /></TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;