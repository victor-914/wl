import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Trade from "./pages/Trade";
import TradingPlatform from "./scenes/trading/Table";
import Gov from "./pages/Gov";
import Airdrop from "./pages/Airdrop";
import LoginPage from "./pages/Login";
import StakingComponent from "./pages/Staking";
import HeaderNav from "./components/header/Header";
import Profile from "./pages/Profile";
import WalletContextProvider from "./components/WalletContext";
import { Buffer } from "buffer";
import process from "process";
import Admin from "./pages/Admin";

// Polyfill Buffer and process
window.Buffer = Buffer;
window.process = process;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WalletContextProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HeaderNav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/stake" element={<StakingComponent />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/trade/:id" element={<TradingPlatform />} />
            <Route path="/gov/:id" element={<TradingPlatform />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </WalletContextProvider>
  </QueryClientProvider>
);

export default App;