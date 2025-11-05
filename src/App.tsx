import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation";
import FloatingHomeButton from "./components/FloatingHomeButton";
import BackToTopButton from "./components/BackToTopButton";
import LoadingSpinner from "./components/LoadingSpinner";
const Index = lazy(() => import("./pages/Index"));
const Industries = lazy(() => import("./pages/Industries"));
const Blockchains = lazy(() => import("./pages/Blockchains"));
const Artists = lazy(() => import("./pages/Artists"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
import QuickActionMenu from "./components/QuickActionMenu";

// Industry detail pages
const ResearchPage = lazy(() => import("./pages/industries/ResearchPage"));
const EnergyPage = lazy(() => import("./pages/industries/EnergyPage"));
const FinancePage = lazy(() => import("./pages/industries/FinancePage"));
const GamingPage = lazy(() => import("./pages/industries/GamingPage"));
const AIPage = lazy(() => import("./pages/industries/AIPage"));
const VRPage = lazy(() => import("./pages/industries/VRPage"));

// Blockchain detail pages
const BitcoinPage = lazy(() => import("./pages/blockchains/BitcoinPage"));
const SolanaPage = lazy(() => import("./pages/blockchains/SolanaPage"));
const EthereumPage = lazy(() => import("./pages/blockchains/EthereumPage"));
const PolkadotPage = lazy(() => import("./pages/blockchains/PolkadotPage"));

// Artist detail pages
const KandinskyPage = lazy(() => import("./pages/artists/KandinskyPage"));
const PicassoPage = lazy(() => import("./pages/artists/PicassoPage"));
const DaliPage = lazy(() => import("./pages/artists/DaliPage"));

import { NavigationProvider } from "./contexts/NavigationContext";
import { usePageTracking } from "./hooks/usePageTracking";

// Create a component to handle page tracking
const PageTracker = () => {
  usePageTracking();
  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LazyMotion features={domAnimation} strict>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <NavigationProvider>
          <BrowserRouter>
          <div className="min-h-screen w-full bg-black">
            <PageTracker />
            <Navigation />
            <FloatingHomeButton />
            <BackToTopButton />
            <QuickActionMenu />
            <Suspense fallback={<div className="flex items-center justify-center py-16 bg-black min-h-screen"><LoadingSpinner /></div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/industries/research" element={<ResearchPage />} />
                <Route path="/industries/energy" element={<EnergyPage />} />
                <Route path="/industries/finance" element={<FinancePage />} />
                <Route path="/industries/gaming" element={<GamingPage />} />
                <Route path="/industries/ai" element={<AIPage />} />
                <Route path="/industries/vr" element={<VRPage />} />
                <Route path="/blockchains" element={<Blockchains />} />
                <Route path="/blockchains/bitcoin" element={<BitcoinPage />} />
                <Route path="/blockchains/solana" element={<SolanaPage />} />
                <Route path="/blockchains/ethereum" element={<EthereumPage />} />
                <Route path="/blockchains/polkadot" element={<PolkadotPage />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/artists/kandinsky" element={<KandinskyPage />} />
                <Route path="/artists/picasso" element={<PicassoPage />} />
                <Route path="/artists/dali" element={<DaliPage />} />
                <Route path="/about" element={<About />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          </BrowserRouter>
        </NavigationProvider>
      </TooltipProvider>
    </LazyMotion>
  </QueryClientProvider>
);

export default App;
