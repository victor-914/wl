import { Bell, Calendar, Check, Award, Gift, Package, Coins, Menu, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useIsMobile } from "@/hooks/use-mobile";
function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  // console.log("🚀 ~ HeaderNav ~ isMobile:", isMobile)
  // console.log("🚀 ~ HeaderNav ~ isMenuOpen:", isMenuOpen)
  return (
    <nav className="bg-black
    fixed w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-4xl font-bold text-white">Parcl</h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
        {
          !isMobile &&   <div className="flex md:flex items-center space-x-8">

          <a href="/" className="text-white hover:text-[#22C55E;]  font-bold transition-colors">Home</a>
          <a target="_blank" href="/stake" className="text-white hover:text-[#22C55E;]  font-bold transition-colors" >Stake</a>
          <a target="_blank" href="/airdrop" className="text-white hover:text-[#22C55E;]  font-bold transition-colors">Airdrop</a>
          <WalletMultiButton />

          {/* <a href="/gov" className="text-white hover:text-secondary-foreground   font-bold transition-colors">Governance</a> */}
          {/* <a href="/trade" className="text-white hover:text-secondary-foreground  font-bold  transition-colors">Trade</a> */}
        </div>
        }

          {/* Connect Wallet Button - Desktop */}
          {/* <div className="hidden md:block"> font-semibold font-bold 
           <Button variant="secondary" className="font-semibold">
             Connect Wallet
           </Button>
         </div> */}
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-white hover:text-secondary-foreground transition-colors">Home</a>
            <a href="/stake" className="text-white hover:text-secondary-foreground transition-colors">Stake</a>
            <a href="/airdrop" className="text-white hover:text-secondary-foreground transition-colors">Airdrop</a>
            {/* <a href="/gov" className="text-white hover:text-secondary-foreground transition-colors">Governance</a> */}
            {/* <a href="/trade" className="text-white hover:text-secondary-foreground transition-colors">Trade</a> */}
            <WalletMultiButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav