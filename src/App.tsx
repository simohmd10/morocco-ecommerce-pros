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
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const CreateOnlineStore  = lazy(() => import("./pages/CreateOnlineStore"));
const ShopifyStoreMorocco = lazy(() => import("./pages/ShopifyStoreMorocco"));
const LandingPageDesign  = lazy(() => import("./pages/LandingPageDesign"));
const DropshippingStore  = lazy(() => import("./pages/DropshippingStore"));
const EcommerceMorocco   = lazy(() => import("./pages/EcommerceMorocco"));
const PricingPage        = lazy(() => import("./pages/PricingPage")); // ✅ جديد

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

                <Route path="/" element={<Index />} />

                {/* صفحات قانونية */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms"   element={<Terms />} />

                {/* صفحات الخدمات */}
                <Route path="/create-online-store"   element={<CreateOnlineStore />} />
                <Route path="/shopify-store-morocco" element={<ShopifyStoreMorocco />} />
                <Route path="/landing-page-design"   element={<LandingPageDesign />} />
                <Route path="/dropshipping-store"    element={<DropshippingStore />} />
                <Route path="/ecommerce-morocco"     element={<EcommerceMorocco />} />

                {/* ✅ صفحة الأسعار الجديدة */}
                <Route path="/pricing" element={<PricingPage />} />

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