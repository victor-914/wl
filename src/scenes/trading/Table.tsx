import React from 'react';
import { Menu, Search, ArrowRight, ChevronDown } from 'lucide-react';

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-zinc-900">
    <div className="flex items-center gap-4">
      <Menu className="w-5 h-5" />
      <span className="font-bold text-xl">Parcl</span>
      <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-lg">
        <Search className="w-4 h-4 text-zinc-400" />
        <span>Chicago</span>
        <span className="text-zinc-500 text-sm ml-2">CTRL + K</span>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-zinc-400">
        <div className="w-4 h-4 rounded-full border-2 border-t-green-500 border-r-green-500 border-zinc-700" />
        <span>Prices update in: 10:38:59</span>
      </div>
      <button className="bg-blue-600 px-4 py-1.5 rounded-lg">Connect</button>
    </div>
  </header>
);

const Navigation = () => (
  <nav className="flex items-center gap-6 px-4 py-2 border-b border-zinc-800">
    <a href="#" className="text-blue-400 border-b-2 border-blue-400 pb-2">Explore</a>
    <a href="#" className="text-zinc-400">Live</a>
    <a href="#" className="text-zinc-400">Real Estate</a>
    <a href="#" className="text-zinc-400">Token</a>
    <a href="#" className="text-zinc-400 flex items-center gap-1">
      More <ChevronDown className="w-4 h-4" />
    </a>
  </nav>
);

const MarketingBanner = ({ title, subtitle, cta, bgClass }) => (
  <div className={`rounded-lg p-6 ${bgClass} h-48`}>
    <h3 className="text-2xl font-bold mb-1">{title}</h3>
    <p className="text-zinc-300 mb-4">{subtitle}</p>
    <button className="bg-blue-600 px-4 py-1.5 rounded-lg">
      {cta}
    </button>
  </div>
);

const MarketRow = ({ market, location, totalOi, spread, funding, volume, change }) => (
  <tr className="border-b border-zinc-800">
    <td className="py-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full" />
        <div>
          <div className="font-medium">{market}</div>
          <div className="text-sm text-zinc-500">{location}</div>
        </div>
      </div>
    </td>
    <td className="text-right">{totalOi}</td>
    <td className={`text-right ${spread.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{spread}</td>
    <td className="text-right">{funding}</td>
    <td className="text-right">{volume}</td>
    <td>
      <div className="w-20 h-8 bg-zinc-800 rounded" />
    </td>
    <td>
      <span className={`px-2 py-1 rounded ${
        change < 0 ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'
      }`}>
        {change > 0 ? '+' : ''}{change}%
      </span>
    </td>
  </tr>
);

const TradingPlatform = () => {
  const marketData = [
    {
      market: 'Austin',
      location: 'TX-AUS',
      totalOi: '$2.21M',
      spread: '-0.320%',
      funding: '-0.242%',
      volume: '$20.94M',
      change: -4.11
    },
    {
      market: 'Solana',
      location: 'SOL-USD',
      totalOi: '$426K',
      spread: '-0.054%',
      funding: '0.1043%',
      volume: '$9.14M',
      change: -13.64
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Navigation />
      
      <div className="p-4 grid grid-cols-3 gap-4">
        <MarketingBanner 
          title="Polar Vortex Markets"
          subtitle="Nashville, TN · Charlotte, NC · Tampa Bay, FL"
          cta="View Markets"
          bgClass="bg-gradient-to-r from-blue-900 to-blue-600"
        />
        <MarketingBanner 
          title="LA STRONG 🤘"
          subtitle="Support LA Wildfire Relief"
          cta="DAO Vote"
          bgClass="bg-gradient-to-r from-blue-800 to-blue-500"
        />
        <MarketingBanner 
          title="Trade Solana Now"
          subtitle="Now Live"
          cta="View Market"
          bgClass="bg-gradient-to-r from-purple-900 to-green-600"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button className="bg-zinc-800 p-2 rounded">
              <Menu className="w-5 h-5" />
            </button>
            <span>27 Markets</span>
            <div className="bg-zinc-800 px-3 py-1.5 rounded-lg">
              <Search className="w-4 h-4 text-zinc-400" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-zinc-800 rounded">1d</button>
            <button className="px-3 py-1.5 rounded text-zinc-400">1w</button>
            <button className="px-3 py-1.5 rounded text-zinc-400">1m</button>
            <button className="px-3 py-1.5 rounded text-zinc-400">All</button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-zinc-400 text-sm">
              <th className="text-left pb-4">Market</th>
              <th className="text-right pb-4">Total OI</th>
              <th className="text-right pb-4">Spread</th>
              <th className="text-right pb-4">1D Funding</th>
              <th className="text-right pb-4">Volume</th>
              <th className="pb-4"></th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((data, index) => (
              <MarketRow key={index} {...data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradingPlatform;