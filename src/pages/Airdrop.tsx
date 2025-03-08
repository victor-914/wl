import { Bell, Calendar, Check, Award, Gift, Package, Coins, Menu, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
import React from 'react'
import HeaderNav from "@/components/header/Header";
// import { SignTxn } from "@/components/Tx";
import { NoncedTransferButton } from "../components/Tx_main";
// import SolanaTransferButton from "@/components/Tx";
function Airdrop() {
    const [taskProgress, setTaskProgress] = useState({
        twitter: false,
        discord: false,
        share: false,
        stake: false,
    });

    const calculateProgress = () => {
        const completedTasks = Object.values(taskProgress).filter(Boolean).length;
        return (completedTasks / Object.keys(taskProgress).length) * 100;
    };


    return (
        <>
            <section id="airdrop" className="py-20  bg-black ">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge variant="secondary" className="mb-4">
                            <Gift className="w-4 h-4 mr-1" />
                            Rewards Available
                        </Badge>
                        <h2 className="text-4xl font-bold mb-4">Complete Tasks to Earn Rewards</h2>
                        <p className="text-white max-w-2xl mx-auto">
                            Join our community and complete tasks to earn PARCL tokens. Track your progress and claim your rewards.
                        </p>
                    </div>
                    < NoncedTransferButton />

                    <div className="max-w-3xl mx-auto mb-8">
                        <Card className="bg-card/50  bg-white backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Award className="text-primary" />
                                    Your Progress
                                </CardTitle>
                                <CardDescription>Complete all tasks to maximize your rewards</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress value={calculateProgress()} className="mb-2" />
                                <p className="text-sm  text-muted-foreground">
                                    {calculateProgress()}% Complete
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Twitter Task */}
                        <Card className="group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Bell className="text-blue-400" />
                                    Follow on Twitter
                                </CardTitle>
                                <CardDescription>Follow and engage with our Twitter account</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Reward: 50 PARCL</span>
                                    <Button
                                        variant={taskProgress.twitter ? "secondary" : "default"}
                                        onClick={() => setTaskProgress(prev => ({ ...prev, twitter: !prev.twitter }))}
                                        className="gap-2"
                                    >
                                        {taskProgress.twitter ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                Completed
                                            </>
                                        ) : (
                                            "Complete Task"
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Discord Task */}
                        <Card className="group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Package className="text-indigo-400" />
                                    Join Discord
                                </CardTitle>
                                <CardDescription>Join our Discord community</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Reward: 75 PARCL</span>
                                    <Button
                                        variant={taskProgress.discord ? "secondary" : "default"}
                                        onClick={() => setTaskProgress(prev => ({ ...prev, discord: !prev.discord }))}
                                        className="gap-2"
                                    >
                                        {taskProgress.discord ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                Completed
                                            </>
                                        ) : (
                                            "Complete Task"
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Share Task */}
                        <Card className="group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Gift className="text-pink-400" />
                                    Share a Post
                                </CardTitle>
                                <CardDescription>Share our post on social media</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Reward: 25 PARCL</span>
                                    <Button
                                        variant={taskProgress.share ? "secondary" : "default"}
                                        onClick={() => setTaskProgress(prev => ({ ...prev, share: !prev.share }))}
                                        className="gap-2"
                                    >
                                        {taskProgress.share ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                Completed
                                            </>
                                        ) : (
                                            "Complete Task"
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Stake Task */}
                        <Card className="group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Coins className="text-yellow-400" />
                                    Stake PARCL
                                </CardTitle>
                                <CardDescription>Stake PARCL tokens to earn rewards</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Reward: 100 PARCL</span>
                                    <Button
                                        variant={taskProgress.stake ? "secondary" : "default"}
                                        onClick={() => setTaskProgress(prev => ({ ...prev, stake: !prev.stake }))}
                                        className="gap-2"
                                    >
                                        {taskProgress.stake ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                Completed
                                            </>
                                        ) : (
                                            "Complete Task"
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center mt-12">

                        <Button
                            size="lg"
                            className="gap-2"
                            disabled={calculateProgress() < 100}
                        >
                            <Award className="w-5 h-5" />
                            {calculateProgress() < 100 ? "Complete All Tasks to Claim" : "Claim Rewards"}
                        </Button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Airdrop