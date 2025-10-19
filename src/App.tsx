import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppRedirectPage from "./pages/WhatsappRedirectPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* KOREKSI: Tambahkan basename yang sama dengan nama repositori */}
      <BrowserRouter basename="/jaspem-company">
        <Routes>
          {/* path="/" di sini akan secara efektif menjadi "/jaspem-company/" di URL */}
          <Route path="/" element={<Index />} />

          <Route path="/whatsapp-select" element={<WhatsAppRedirectPage/>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;