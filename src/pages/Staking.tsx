import React, { useState, useEffect } from 'react';
import { Coins, Wallet, Clock, ArrowRight, Lock, TrendingUp, CheckCircle } from 'lucide-react';

const StakingComponent: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [selectedDuration, setSelectedDuration] = useState<number>(30);
    const [estimatedReward, setEstimatedReward] = useState<string>('0.00');
    const [isStaking, setIsStaking] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const durations = [
        { days: 30, label: '30 Days' },
        { days: 60, label: '60 Days' },
        { days: 90, label: '90 Days' },
        { days: 180, label: '180 Days' }
    ];

    // Calculate estimated rewards (40% APY prorated for the duration)
    useEffect(() => {
        if (amount && !isNaN(parseFloat(amount))) {
            const annualRate = 0.4; // 40%
            const durationInYears = selectedDuration / 365;
            const reward = parseFloat(amount) * annualRate * durationInYears;
            setEstimatedReward(reward.toFixed(2));
        } else {
            setEstimatedReward('0.00');
        }
    }, [amount, selectedDuration]);

    const handleStake = () => {
        if (!amount || parseFloat(amount) <= 0) return;

        setIsStaking(true);

        // Simulate staking process
        setTimeout(() => {
            setIsStaking(false);
            setIsSuccess(true);

            // Reset success message after 3 seconds
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
        }, 2000);
    };

    return (
        <main className='w-full bg-[#000]'>

            <div className="w-[80%] m-auto pt-20 h-lvh  overflow-hidden shadow-2xl ">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#22C55E] to-[#22C558] p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white">Stake & Earn</h2>
                        <Coins className="text-green-300 h-8 w-8" />
                    </div>
                    <p className="text-green-100 mt-2 opacity-80">Earn 40% APY on your staked assets</p>
                </div>

                {/* Main Content */}
                <div className="p-6 space-y-6">
                    {/* Staking Amount Input */}
                    <div className="space-y-2">
                        <label htmlFor="amount" className="block text-sm font-medium text-green-300">
                            Amount to Stake
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                className="block w-full rounded-lg border-gray-700 bg-gray-800 text-white pl-4 pr-20 py-3 focus:border-green-500 focus:ring-green-500 focus:outline-none"
                                placeholder="0.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <span className="text-gray-400">PRC</span>
                            </div>
                        </div>
                    </div>

                    {/* Duration Selection */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-green-300">
                            Staking Duration
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {durations.map((duration) => (
                                <button
                                    key={duration.days}
                                    type="button"
                                    onClick={() => setSelectedDuration(duration.days)}
                                    className={`flex items-center justify-center px-4 py-2 rounded-lg border ${selectedDuration === duration.days
                                            ? 'bg-[#22C55E] border-[#22C558] text-white'
                                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                                        } transition-colors duration-200`}
                                >
                                    <Clock className="w-4 h-4 mr-2" />
                                    {duration.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Reward Estimation */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                            <span>Staking Period</span>
                            <span>{selectedDuration} Days</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                            <span>APY</span>
                            <span className="text-green-400">40%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                            <span>Reward Rate</span>
                            <span>{(40 * selectedDuration / 365).toFixed(2)}% for period</span>
                        </div>
                        <div className="pt-4 border-t border-gray-700">
                            <div className="flex items-center justify-between">
                                <span className="text-white">Estimated Reward</span>
                                <div className="flex items-center">
                                    <span className="text-lg font-bold text-green-400">{estimatedReward}</span>
                                    <span className="ml-1 text-gray-400">ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notice */}
                    <div className="bg-green-900/30 rounded-lg p-4 border border-green-700/30">
                        <div className="flex">
                            <Wallet className="h-5 w-5 text-green-400 flex-shrink-0 mr-3 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-medium text-green-300">Automatic Rewards</h4>
                                <p className="mt-1 text-xs text-gray-300">
                                    Rewards will be automatically deposited to your wallet upon completion of the staking period.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stake Button */}
                    <button
                        type="button"
                        onClick={handleStake}
                        disabled={isStaking || !amount || parseFloat(amount) <= 0}
                        className={`w-full flex items-center justify-center px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 ${isStaking || !amount || parseFloat(amount) <= 0
                                ? 'bg-gray-700 cursor-not-allowed'
                                : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 shadow-lg hover:shadow-green-500/20'
                            }`}
                    >
                        {isStaking ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : isSuccess ? (
                            <>
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Staked Successfully!
                            </>
                        ) : (
                            <>
                                <Lock className="w-5 h-5 mr-2" />
                                Stake Now
                            </>
                        )}
                    </button>
                </div>

                {/* Footer */}
                <div className="bg-gray-900 p-4 border-t border-gray-800">
                    <div className="flex items-center justify-center text-xs text-gray-400">
                        <TrendingUp className="w-4 h-4 mr-1 text-green-400" />
                        <span>Past performance is not indicative of future results</span>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default StakingComponent;