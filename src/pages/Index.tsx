"use client"
import { useRef, useEffect, useState } from 'react';
import { BsBank2 } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Hp from "@/scenes/trading/homepage/Hp";
import HeaderNav from "@/components/header/Header";

const AnimatedBackground = ({ dotCount = 100 }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(container);
    resizeCanvas();

    const dots = Array.from({ length: dotCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      color: `hsla(${Math.random() * 360}, 100%, 75%, 0.6)`
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotCount]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};


const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);
  const [isAllocationOpen, setIsAllocationOpen] = useState(false);
  const [isPointsBoostOpen, setIsPointsBoostOpen] = useState(false);
  const [time, setTime] = useState('');
  const toggleGovernance = () => setIsGovernanceOpen(!isGovernanceOpen);
  const toggleAllocation = () => setIsAllocationOpen(!isAllocationOpen);
  const togglePointsBoost = () => setIsPointsBoostOpen(!isPointsBoostOpen);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <HeaderNav />

<<<<<<< HEAD

      <div className="bg-[#000000]  px-4 py-6 font-sans">

        <div className='mt-14 relative'>
          <AnimatedBackground dotCount={150} />
          <div className='flex flex-col justify-between items-center relative z-10 py-16'>
            <h1 className='text-3xl sm:text-4xl font-bold text-white mb-3 text-center'>Stake PRCL</h1>
            <div className='text-center mb-12'>
              <p className='text-[#bebebe] text-sm sm:text-base'>Newly staked tokens become eligible at the beginning of the next epoch.</p>
              <span className='text-[#bebebe] text-sm sm:text-base'>(Epochs start every Thursday at 00:00 UTC).</span>
            </div>
            <div className='flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-20 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 rounded-lg'>
              <div>
                <p className='text-[#bebebe] text-xs'>Total Staked</p>
                <div className='flex flex-row justify-between items-center gap-1'>
                <img src='https://app.parcl.co/images/markets-icons/PRCL-USD.svg'
                    alt="PRCL-USD"
                    width={15}
                    height={15} />
                  <p className="text-white text-sm sm:text-base">15,854,676.21</p>
                </div>
=======
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-secondary-foreground transition-colors">Home</a>
              <a href="#marketplace" className="text-white hover:text-secondary-foreground transition-colors">Marketplace</a>
              <a href="#airdrop" className="text-white hover:text-secondary-foreground transition-colors">Airdrop</a>
              <a href="#governance" className="text-white hover:text-secondary-foreground transition-colors">Governance</a>
              <a href="/trade" className="text-white hover:text-secondary-foreground transition-colors">Trade</a>
            </div>

            {/* Connect Wallet Button - Desktop */}
            <div className="hidden md:block">
              <Button variant="secondary" className="font-semibold">
                Connect Wallet
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white hover:text-secondary-foreground transition-colors">Home</a>
              <a href="#marketplace" className="text-white hover:text-secondary-foreground transition-colors">Marketplace</a>
              <a href="#airdrop" className="text-white hover:text-secondary-foreground transition-colors">Airdrop</a>
              <a href="#governance" className="text-white hover:text-secondary-foreground transition-colors">Governance</a>
              <a href="/trade" className="text-white hover:text-secondary-foreground transition-colors">Trade</a>
              <Button variant="secondary" className="font-semibold w-full">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Trade Real Estate in the Digital World
              </h1>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
                Experience the future of property investment with Parcl. Buy, sell, and trade real estate assets in a seamless digital marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="font-semibold">
                  Start Trading
                </Button>
                <Button size="lg" variant="outline" className="font-semibold">
                  Learn More
                </Button>
>>>>>>> 9c6d5adfdd776c350d49426f2888270609f49e10
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
              <div>
                <p className='text-[#bebebe] text-xs'>Unique Addresses</p>
                <p className="text-white text-sm sm:text-base">7822</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-start px-4 sm:px-12 py-8 space-y-8 sm:space-y-0'>
          {[
            { icon: 'https://app.parcl.co/images/points_icon.svg', title: 'Boosts & Rewards', description: 'Staked amount will determine points Boosts and allocation tiers.', link: 'View Tiers' },
            { icon: <BsBank2 className='text-[#2d4ab8]' />, title: 'PRCL Governance', description: 'Staked PRCL tokens enable you to participate in PRCL Governance.', link: 'Governance Proposals' },
            { icon: <TbWorld className='text-[#4766ea] text-lg' />, title: 'Data Access', description: 'Get access to cutting edge real-estate data to inform your trades.', link: 'Coming Soon', comingSoon: true }
          ].map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-center h-full text-center w-full sm:w-1/3'>
              <div className='flex flex-col items-center gap-2'>
                {/* {typeof item.icon === 'string' ? (
                  <Image src={item.icon} width={20} height={20} alt={item.title} />
                ) : (
                  item.icon
                )} */}
                <h4 className="text-white">{item.title}</h4>
                <p className='text-[#bebebe] text-sm'>{item.description}</p>
                <a href="#" className='mt-4'>
                  <div className={`flex flex-row items-center gap-2 ${item.comingSoon ? 'border-2 border-solid border-[#2d4ab8] rounded-md p-1' : ''}`}>
                    <p className={`text-[#bebebe] ${item.comingSoon ? 'text-[#4766ea] text-xs' : ''}`}>{item.link}</p>
                    {!item.comingSoon && <GoArrowUpRight className='text-[#bebebe]' />}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-[#212225] px-4 sm:px-8 py-8 mx-4 sm:mx-12 rounded-lg'>
          <div className='flex flex-col justify-center items-center gap-3 mb-4'>
            {/* <div>
              <Image src='https://app.parcl.co/images/markets-icons/PRCL-USD.svg'
                alt="PRCL-USD"
                width={20}
                height={20} />
            </div> */}
            <div>
              <p className='text-[#bebebe] text-sm'>PRCL Staking</p>
            </div>
            <div className='w-full'>
              <button className='w-full bg-[#22C55E] hover:bg-[##22C558] text-white font-medium text-75 p-2 rounded-lg transition duration-300'>
                Create Account
              </button>
            </div>
          </div>

          <div>
            {['Newly staked assets will be pledged but not active until the start of the next epoch.', 'Staked tokens will automatically carry over to next epoch.'].map((text, index) => (
              <div key={index} className='flex flex-row items-center gap-3 mt-2'>
                <div>
                  <GoDotFill className='text-[#bebebe] text-sm' />
                </div>
                <div>
                  <p className='text-[#bebebe] text-xs sm:text-sm'>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div> */}
          <div className=" bg-black text-white">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-6 pt-24">
            

              <section>
                <div className="min-h-screen pt-16 relative overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="text-center">
                      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                        <span className="text-white">Participate in the </span>
                        <span className="text-white">Ongoing</span>
                      </h1>
                      <h2 className="text-5xl sm:text-7xl font-bold mb-8">
                        <span className="text-white">Airdrop  </span>
                        <span className="text-white">campaign</span>
                      </h2>

                      <div className="flex justify-center space-x-4 mb-12">
                        <button className="bg-[#22C55E] text-white px-8 py-3 rounded-lg hover:bg-purple-600">
                          CLAIM AIRDROP
                        </button>
                        {/* <button className="border-2 border-[#22C55E] text-white px-8 py-3 rounded-lg hover:bg-[#6C3BF8]/20">
                  WHITEPAPPER
                </button> */}
                      </div>

                      <div className="max-w-2xl mx-auto mb-2">
                        <div className="flex justify-between text-white mb-2">
                          <span>Shared - 2,450 airdrops</span>
                          <span>Target - 150,000 airdrops</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full">
                          <div className="h-full w-1/3 bg-gradient-to-r from-[#22C55E] to-[#22C55E] rounded-full"></div>
                        </div>
                        <div className="flex justify-between mt-2">
                          {/* <span className="text-white">PRE </span> */}
                          <span className="text-white">SOFT CAP</span>
                          <span className="text-white">BONUS</span>
                        </div>
                      </div>

                      {/* <CountdownTimer />  */}
                    </div>
                  </div>

                  <div className="wave-path"></div>

                  <div className="absolute bottom-20 left-1/4 crypto-icon">
                    {/* <Ethereum className="h-12 w-12 text-blue-400" /> */}
                  </div>
                  <div className="absolute bottom-40 left-1/2 crypto-icon">
                    {/* <Bitcoin className="h-12 w-12 text-orange-400" /> */}
                  </div>
                  <div className="absolute bottom-60 right-1/4 crypto-icon">
                    {/* <Ethereum className="h-12 w-12 text-yellow-400" /> */}
                  </div>

                </div>

              </section>

              {/* Trust Section */}
              {/* <div className="mt-24 mb-24">
              <h3 className="text-xl mb-4">Trade with confidence.</h3>
              <p className="text-zinc-500 mb-8">Backed by the best.</p>
              <div className="flex gap-12">
                {/* Replace with actual partner logos 
                <div className="w-32 h-8 bg-zinc-900"></div>
                <div className="w-32 h-8 bg-zinc-900"></div>
                <div className="w-32 h-8 bg-zinc-900"></div>
              </div>
            </div> */}

              {/* Real Estate Section */}
              {/* <div className="mt-32">
              <h2 className="text-4xl font-bold mb-4">
                Dive into Real
                <br />
                <span className="text-zinc-500">Perpetual</span>
                <br />
                <span className="text-zinc-700">Futures</span>
              </h2>

              <div className="grid grid-cols-2 gap-12 mt-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Price Indexes</h3>
                  <p className="text-zinc-400">
                    Expressed in median price per square foot/meter.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Index prices update</h3>
                  <p className="text-zinc-400">
                    Daily with real-time market insights.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Begin trading now</h3>
                <p className="text-zinc-400">
                  with no trade minimums and low fees.
                </p>
                <button className="mt-8 px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 flex items-center gap-2">
                  Launch App
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div> */}

              {/* Final CTA */}
              {/* <div className="mt-32 mb-24">
              <h2 className="text-xl font-bold mb-4">
                Reliable Real Estate Pricing:
                <br />
                <span className="text-zinc-500">Powered by Cutting-Edge Data</span>
                <br />
                <span className="text-zinc-700">Science</span>
              </h2>
            </div> */}
            </div>
          </div>
        {/* </div> */}

        <Hp />


        <div className="px-4 sm:px-12 py-8">
          <div>
            <h2 className="text-white text-xl sm:text-2xl mb-4 font-semibold">Current staking rewards</h2>
            <p className="text-[#bebebe] mb-6 text-base sm:text-xl">Below are the bonuses associated with your stake within this epoch. Your values will be updated with a new or removed stake upon the next epoch.</p>
          </div>

          <div className='flex flex-col gap-2'>
            {[
              { title: "Governance", status: "Stake for Eligibility", isOpen: isGovernanceOpen, toggle: toggleGovernance },
              { title: "Allocation Scheduling", status: "Stake to Activate", isOpen: isAllocationOpen, toggle: toggleAllocation },
              { title: "Points Boost", status: "Stake to Activate", isOpen: isPointsBoostOpen, toggle: togglePointsBoost }
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm px-2 sm:px-4 py-2 rounded-lg w-full">
                <div className='flex flex-row justify-between items-center cursor-pointer' onClick={item.toggle}>
                  <div className='flex-grow flex flex-row items-center space-x-2 sm:space-x-4'>
                    <div className="w-8 sm:w-12">
                      <img src='https://app.parcl.co/images/markets-icons/PRCL-USD.svg'
                        alt="PRCL-USD"
                        width={50}
                        height={50} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-white text-sm sm:text-lg font-bold">{item.title}</h3>
                      <div className='flex flex-row items-center gap-1 sm:gap-2'>
                        <GoDotFill className='text-[#22C55E] text-xs sm:text-sm' />
                        <span className='text-[#22C55E] text-xs sm:text-sm font-semibold'>Connect Wallet</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className='text-[#bebebe] text-xs sm:text-sm'>{item.status}</p>
                    </div>
                  </div>
                  <div className="ml-2">
                    {item.isOpen ? (
                      <RiArrowDropUpLine className='text-[#bebebe] text-xl sm:text-3xl' />
                    ) : (
                      <RiArrowDropDownLine className='text-[#bebebe] text-xl sm:text-3xl' />
                    )}
                  </div>
                </div>

                {item.isOpen && (
                  <>
                    <div className="w-full h-px bg-gray-950 my-2"></div>
                    <div className="mt-2 sm:mt-4">
                      <p className='text-[#bebebe] text-xs sm:text-sm'>
                        {item.title === "Governance" && "With your stake you are able to vote in Parcl's governance protocol."}
                        {item.title === "Allocation Scheduling" && "Amount staked determines your allocation schedule. The more you stake the sooner you claim."}
                        {item.title === "Points Boost" && "With your stake you are eligible for points boosts based on your stake amount and your TVL on Parcl. Max boost 250%."}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>



        <div className='sm:px-12 py-4 sm:py-8'>
          {/* <img src={logo} width={100} height={100} alt='logo' className="sm:w-auto" /> */}
          <p className='my-2 sm:my-4 text-xs sm:text-sm text-[#bebebe]'>Trading digital currency entails significant risk and is not appropriate for all users. Digital currency values are not static and fluctuate due to market changes. Parcl does not provide financial advice or accept liability for any loss or damages.</p>
          <div className='flex flex-wrap items-center gap-2 sm:gap-5 text-xs sm:text-sm'>
            <p>Parcl V3 Docs</p>
            <GoDotFill className='text-[#bebebe] text-xs sm:text-sm' />
            <p>Parcl Labs - Sales Price Feeds</p>
            <GoDotFill className='text-[#bebebe] text-xs sm:text-sm' />
            <p>Parcl Labs - Rental Price Feeds</p>
          </div>

          <div className='text-[#bebebe] text-xs sm:text-sm flex flex-wrap items-center gap-2 sm:gap-5 my-2 sm:my-4'>
            <p>System Status</p>
            <p>Privacy Policy</p>
            <p>Disclosures</p>
          </div>

          <div className='flex flex-row items-center gap-3 my-2 sm:my-4'>
            <FaDiscord className='text-base sm:text-lg' />
            <FaXTwitter className='text-xs sm:text-sm' />
          </div>
        </div>
      </div>

    </>
  );
};

export default Index;
