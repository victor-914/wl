import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpCircle, ArrowDownCircle, Clock, DollarSign, TrendingUp } from "lucide-react";
<<<<<<< HEAD
=======

>>>>>>> 9c6d5adfdd776c350d49426f2888270609f49e10
// Mock data for the chart
const data = [
  { time: "00:00", price: 100 },
  { time: "04:00", price: 120 },
  { time: "08:00", price: 110 },
  { time: "12:00", price: 140 },
  { time: "16:00", price: 130 },
  { time: "20:00", price: 150 },
  { time: "24:00", price: 145 },
];
<<<<<<< HEAD
const Trade = () => {
  const [amount, setAmount] = useState("");
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy");
=======

const Trade = () => {
  const [amount, setAmount] = useState("");
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy");

>>>>>>> 9c6d5adfdd776c350d49426f2888270609f49e10
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <Card className="w-full h-[500px]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">PARCL/USD</span>
                  <span className="ml-4 text-xl text-green-500">$145.00</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <TrendingUp className="w-5 h-5" />
                  <span>+2.3%</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#8884d8"
                      fillOpacity={1}
                      fill="url(#colorPrice)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
<<<<<<< HEAD
=======

>>>>>>> 9c6d5adfdd776c350d49426f2888270609f49e10
        {/* Order Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Place Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button
                    variant={orderType === "buy" ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setOrderType("buy")}
                  >
                    <ArrowUpCircle className="w-4 h-4 mr-2" />
                    Buy
                  </Button>
                  <Button
                    variant={orderType === "sell" ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setOrderType("sell")}
                  >
                    <ArrowDownCircle className="w-4 h-4 mr-2" />
                    Sell
                  </Button>
                </div>
<<<<<<< HEAD
=======

>>>>>>> 9c6d5adfdd776c350d49426f2888270609f49e10
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount (PARCL)</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
<<<<<<< HEAD
=======

>>>>>>> 9c6d5adfdd776c350d49426f2888270609f49e10
                <div className="space-y-2">
                  <label className="text-sm font-medium">Total (USD)</label>
                  <Input
                    type="text"
                    value={amount ? `$${(parseFloat(amount) * 145).toFixed(2)}` : "$0.00"}
                    disabled
                  />
                </div>
<<<<<<< HEAD
=======

>>>>>>> 9c6d5adfdd776c350d49426f2888270609f49e10
                <Button className="w-full" size="lg">
                  {orderType === "buy" ? "Buy PARCL" : "Sell PARCL"}
                </Button>
              </div>
            </CardContent>
          </Card>
<<<<<<< HEAD
=======

>>>>>>> 9c6d5adfdd776c350d49426f2888270609f49e10
          {/* Market Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Market Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">24h Volume</span>
                  </div>
                  <span className="font-medium">$1.2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Market Cap</span>
                  </div>
                  <span className="font-medium">$24.5M</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default Trade;


// Trading Interface Clone
// Preview
// Code

// import React from 'react';
// import { ArrowLeft, Menu, Search } from 'lucide-react';

// const TradingInterface = () => {
//   return (
//     <div className="min-h-screen bg-zinc-950 text-white">
//       <header className="flex items-center gap-4 bg-zinc-900 p-2">
//         <Menu className="w-5 h-5" />
//         <div className="font-bold text-lg">Parcl</div>
//         <div className="flex items-center gap-2 text-zinc-400">
//           <Search className="w-4 h-4" />
//           <span>New York</span>
//         </div>
//       </header>

//       <main className="p-4">
//         <nav className="flex items-center gap-2 text-zinc-400 mb-4">
//           <ArrowLeft className="w-4 h-4" />
//           <span>Real Estate / PA-PIT</span>
//         </nav>

//         <div className="flex items-start gap-4 mb-8">
//           <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
//             PIT
//           </div>
//           <div>
//             <div className="text-zinc-400">Pittsburgh</div>
//             <div className="text-3xl font-bold">$162.06</div>
//             <div className="text-red-500 text-sm">
//               -$1.00 (-0.6132%) past week
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-zinc-900 p-4 rounded-lg">
//             <div className="text-zinc-400 text-sm mb-2">24h Volume</div>
//             <div className="font-bold text-lg">$557.57K</div>
//           </div>
//           <div className="bg-zinc-900 p-4 rounded-lg">
//             <div className="text-zinc-400 text-sm mb-2">Market Price</div>
//             <div className="font-bold text-lg">
//               $161.64 <span className="text-red-500">(-0.253%)</span>
//             </div>
//           </div>
//           <div className="bg-zinc-900 p-4 rounded-lg">
//             <div className="text-zinc-400 text-sm mb-2">Open Interest</div>
//             <div className="font-bold text-lg">$493.67K</div>
//           </div>
//           <div className="bg-zinc-900 p-4 rounded-lg">
//             <div className="text-zinc-400 text-sm mb-2">Funding/Velocity</div>
//             <div className="font-bold text-lg">-0.3927%</div>
//           </div>
//         </div>

//         <div className="mt-8 flex gap-4">
//           <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
//             Long
//           </button>
//           <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-red-500 font-medium py-2 px-4 rounded">
//             Short
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TradingInterface;
=======

export default Trade;
>>>>>>> 9c6d5adfdd776c350d49426f2888270609f49e10
