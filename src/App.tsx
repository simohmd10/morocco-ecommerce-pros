import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/privacy";

const CreateOnlineStore = lazy(() => import("./pages/CreateOnlineStore"));
const ShopifyStoreMorocco = lazy(() => import("./pages/ShopifyStoreMorocco"));
const LandingPageDesign = lazy(() => import("./pages/LandingPageDesign"));
const DropshippingStore = lazy(() => import("./pages/DropshippingStore"));
const EcommerceMorocco = lazy(() => import("./pages/EcommerceMorocco"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>

          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >

              <Routes>

                {/* الصفحة الرئيسية */}
                <Route path="/" element={<Index />} />

                {/* صفحة سياسة الخصوصية */}
                <Route path="/privacy" element={<Privacy />} />

                {/* صفحات الخدمات */}
                <Route path="/create-online-store" element={<CreateOnlineStore />} />
                <Route path="/shopify-store-morocco" element={<ShopifyStoreMorocco />} />
                <Route path="/landing-page-design" element={<LandingPageDesign />} />
                <Route path="/dropshipping-store" element={<DropshippingStore />} />
                <Route path="/ecommerce-morocco" element={<EcommerceMorocco />} />

                {/* صفحة الخطأ */}
                <Route path="*" element={<NotFound />} />

              </Routes>

            </Suspense>
          </BrowserRouter>

        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;