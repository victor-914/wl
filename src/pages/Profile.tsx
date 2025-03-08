import React from 'react';
import { 
  Wallet, 
  Gift, 
  TrendingUp, 
  Coins,
  User,
  Building2
} from 'lucide-react';

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black/95 to-green-950 text-green-400">
      {/* Header 
      <header className="border-b border-green-500/30 backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-6">
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">Profile Dashboard</h1>
          <div className="flex items-center gap-4 bg-green-950/30 px-4 py-2 rounded-full border border-green-500/20">
            <User className="w-5 h-5 text-green-500" />
            <span className="font-mono text-green-300">0x742...3d9f</span>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 pt-20 space-y-8">
        {/* Profile Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Expected Profit Card */}
          <div className="group bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-xl font-semibold text-green-300">Expected Profit</h2>
              </div>
              <p className="text-4xl font-mono font-bold text-white">$00</p>
              <p className="text-green-500 text-sm mt-3 flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                +15.4% from last month
              </p>
            </div>
          </div>

          {/* Total Airdrops Card */}
          <div className="group bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Gift className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-xl font-semibold text-green-300">Total Airdrops</h2>
              </div>
              <p className="text-4xl font-mono font-bold text-white">0</p>
              <p className="text-green-500 text-sm mt-3 flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                0 pending claims
              </p>
            </div>
          </div>

          {/* Total Rewards Card */}
          <div className="group bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Coins className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-xl font-semibold text-green-300">Total Rewards</h2>
              </div>
              <p className="text-4xl font-mono font-bold text-white">0 PRC</p>
              <p className="text-green-500 text-sm mt-3 flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                ≈ $00
              </p>
            </div>
          </div>
        </div>

        {/* Token Information */}
        <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Building2 className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold text-green-300">Parcel Token Details</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/30 rounded-lg p-6 border border-green-500/10">
              <p className="text-green-500/70 mb-3 text-sm font-medium">Current Price</p>
              <p className="text-3xl font-mono font-bold text-white">$0</p>
            </div>
            <div className="bg-black/30 rounded-lg p-6 border border-green-500/10">
              <p className="text-green-500/70 mb-3 text-sm font-medium">24h Change</p>
              <p className="text-3xl font-mono font-bold text-green-400">+8.45%</p>
            </div>
            <div className="bg-black/30 rounded-lg p-6 border border-green-500/10">
              <p className="text-green-500/70 mb-3 text-sm font-medium">Market Cap</p>
              <p className="text-3xl font-mono font-bold text-white">$523M</p>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Wallet className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold text-green-300">Basic Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/30 rounded-lg p-6 border border-green-500/10">
              <p className="text-green-500/70 mb-3 text-sm font-medium">Wallet Address</p>
              <p className="font-mono text-white text-lg">0x742...</p>
            </div>
            {/* <div className="bg-black/30 rounded-lg p-6 border border-green-500/10">
              <p className="text-green-500/70 mb-3 text-sm font-medium">Joined Date</p>
              <p className="font-mono text-white text-lg">{new Date()}</p>
            </div> */}
            <div className="bg-black/30 rounded-lg p-6 border border-green-500/10">
              <p className="text-green-500/70 mb-3 text-sm font-medium">Total Transactions</p>
              <p className="font-mono text-white text-lg">0</p>
            </div>
            <div className="bg-black/30 rounded-lg p-6 border border-green-500/10">
              <p className="text-green-500/70 mb-3 text-sm font-medium">Network</p>
              <p className="font-mono text-white text-lg">Solana Mainnet</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;