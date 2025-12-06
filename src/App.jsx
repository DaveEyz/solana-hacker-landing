import React, { useState, useEffect } from 'react';

import { Terminal, Shield, Zap, Lock, ExternalLink, Copy, Activity, X } from 'lucide-react';



// --- CONFIGURATION (Diri ra ka mag-ilis) ---

const CONFIG = {

  ticker: "$HACK",

  ca: "8sF9...YOUR_SOLANA_CA_HERE...k2L9",

  supply: "1,000,000,000",

  telegram: "https://t.me/your_link",

  twitter: "https://x.com/your_link",

  pump: "https://pump.fun/board"

};



// --- HACKER COMPONENTS ---



const TypingText = ({ text, delay = 50, onComplete }) => {

  const [displayed, setDisplayed] = useState('');

  useEffect(() => {

    let i = 0;

    const timer = setInterval(() => {

      if (i < text.length) {

        setDisplayed((prev) => prev + text.charAt(i));

        i++;

      } else {

        clearInterval(timer);

        if (onComplete) onComplete();

      }

    }, delay);

    return () => clearInterval(timer);

  }, [text]);

  return <span>{displayed}</span>;

};



const Scanline = () => (

  <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-60" />

);



const HexBackground = () => (

  <div className="fixed inset-0 z-0 opacity-10 overflow-hidden pointer-events-none text-[10px] leading-3 text-green-500 font-mono break-all">

    {Array(4000).fill(0).map((_, i) => (

      <span key={i}>{Math.random() > 0.5 ? '1' : '0'} </span>

    ))}

  </div>

);



// --- MAIN APP ---



export default function App() {

  const [booted, setBooted] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [copied, setCopied] = useState(false);



  // Boot sequence simulation

  useEffect(() => {

    const timer = setTimeout(() => setBooted(true), 2500);

    return () => clearTimeout(timer);

  }, []);



  const copyCA = () => {

    const el = document.createElement('textarea');

    el.value = CONFIG.ca;

    document.body.appendChild(el);

    el.select();

    document.execCommand('copy');

    document.body.removeChild(el);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);

  };



  // INTRO SEQUENCE

  if (!booted) {

    return (

      <div className="min-h-screen bg-black text-green-500 font-mono p-8 flex flex-col justify-end pb-20">

        <Scanline />

        <div className="space-y-2 text-sm md:text-base">

          <p>{'>'} INITIALIZING PROTOCOL...</p>

          <p className="text-green-300">{'>'} LOADING ASSETS... [OK]</p>

          <p className="text-green-300">{'>'} ESTABLISHING SECURE CONNECTION... [OK]</p>

          <p className="text-green-300">{'>'} BYPASSING FIREWALL... [SUCCESS]</p>

          <p className="animate-pulse">{'>'} ACCESSING MAIN FRAME...</p>

        </div>

      </div>

    );

  }



  // MAIN DASHBOARD

  return (

    <div className="min-h-screen bg-black text-green-500 font-mono selection:bg-green-500 selection:text-black relative overflow-x-hidden">

      <Scanline />

      <HexBackground />



      {/* NAVBAR */}

      <nav className="fixed top-0 w-full z-40 bg-black/90 border-b border-green-500/30 p-4 backdrop-blur-sm">

        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <div className="flex items-center gap-2">

            <Terminal size={20} className="animate-pulse" />

            <span className="font-bold tracking-widest">root@solana:~#</span>

          </div>

          <div className="flex gap-4 text-xs md:text-sm">

            <span className="hidden md:inline text-green-700">SYS_STATUS: ONLINE</span>

            <span className="text-green-500 font-bold">{new Date().toLocaleTimeString()}</span>

          </div>

        </div>

      </nav>



      {/* CONTENT */}

      <main className="relative z-10 pt-24 pb-12 px-4 max-w-5xl mx-auto space-y-16">

        

        {/* HERO SECTION */}

        <section className="border border-green-500/50 bg-black/80 p-6 md:p-12 rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.2)]">

          <div className="flex flex-col md:flex-row gap-8 items-center">

            {/* ASCII ART PLACEHOLDER */}

            <pre className="text-[8px] md:text-[10px] leading-[8px] md:leading-[10px] text-green-400 font-bold select-none whitespace-pre overflow-x-hidden">

{`

   __  __  _____   _____  __  __ 

  |  \\/  ||  __ \\ / ____||  \\/  |

  | \\  / || |__) | (___  | \\  / |

  | |\\/| ||  _  / \\___ \\ | |\\/| |

  | |  | || | \\ \\ ____) || |  | |

  |_|  |_||_|  \\_|_____/ |_|  |_|

                                 

     SYSTEM OVERRIDE: ENABLED

`}

            </pre>



            <div className="flex-1 space-y-6 text-center md:text-left">

              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-green-400 glitch-text">

                <TypingText text={`PROJECT ${CONFIG.ticker}`} />

                <span className="animate-blink">_</span>

              </h1>

              <p className="text-green-300/80 max-w-lg">

                The centralized banking system is failing. {CONFIG.ticker} is the glitch in the matrix. 

                Renounced. Locked. Untraceable.

              </p>

              

              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                <a 

                  href={CONFIG.pump} 

                  target="_blank"

                  className="bg-green-600 hover:bg-green-500 text-black font-bold py-3 px-8 text-lg uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_0_15px_#22c55e] transition-all"

                >

                  <Zap size={18} /> INITIALIZE BUY

                </a>

                <button 

                  onClick={() => setShowModal(true)}

                  className="border border-green-500 hover:bg-green-500/10 text-green-500 py-3 px-8 text-lg uppercase tracking-widest flex items-center justify-center gap-2 transition-all"

                >

                  <Activity size={18} /> VIEW DATA

                </button>

              </div>

            </div>

          </div>

        </section>



        {/* STATS GRID */}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {[

            { label: "LIQUIDITY", val: "LOCKED [100%]", icon: Lock },

            { label: "MINT AUTH", val: "REVOKED", icon: Shield },

            { label: "TOTAL SUPPLY", val: CONFIG.supply, icon: Activity }

          ].map((stat, i) => (

            <div key={i} className="bg-black border border-green-500/30 p-6 flex items-start justify-between hover:border-green-500 transition-colors group">

              <div>

                <p className="text-xs text-green-700 font-bold mb-1 group-hover:text-green-400">{stat.label}</p>

                <p className="text-xl md:text-2xl font-bold tracking-wider">{stat.val}</p>

              </div>

              <stat.icon className="text-green-800 group-hover:text-green-500 transition-colors" />

            </div>

          ))}

        </section>



        {/* CONTRACT ADDRESS (TERMINAL STYLE) */}

        <section className="bg-black border border-green-500 p-2 md:p-4 font-mono text-xs md:text-sm">

          <div className="flex justify-between items-center bg-green-900/20 p-2 mb-4 border-b border-green-500/30">

            <span>CA_ENCRYPTION_KEY.txt</span>

            <div className="flex gap-1">

              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>

              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>

            </div>

          </div>

          <div className="p-2 break-all text-green-300/90 relative group cursor-pointer" onClick={copyCA}>

            <p className="opacity-50 mb-2">// Click to copy to clipboard</p>

            <p className="text-base md:text-xl hover:text-green-400 transition-colors">

              {CONFIG.ca}

            </p>

            <div className="absolute top-2 right-2">

               {copied ? <span className="text-white bg-green-600 px-2 py-1 text-xs font-bold">COPIED</span> : <Copy size={16} />}

            </div>

          </div>

        </section>



        {/* SOCIAL LINKS */}

        <div className="flex justify-center gap-8 py-8 border-t border-green-500/20">

          <a href={CONFIG.telegram} className="text-green-600 hover:text-green-400 hover:scale-110 transition-transform flex flex-col items-center gap-2">

             <div className="w-12 h-12 border border-green-500 flex items-center justify-center rounded-full">

               <ExternalLink size={24} />

             </div>

             <span className="text-xs tracking-widest">TELEGRAM</span>

          </a>

          <a href={CONFIG.twitter} className="text-green-600 hover:text-green-400 hover:scale-110 transition-transform flex flex-col items-center gap-2">

             <div className="w-12 h-12 border border-green-500 flex items-center justify-center rounded-full">

               <ExternalLink size={24} />

             </div>

             <span className="text-xs tracking-widest">TWITTER</span>

          </a>

        </div>



      </main>



      {/* DATA MODAL */}

      {showModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">

          <div className="bg-black border-2 border-green-500 w-full max-w-lg shadow-[0_0_50px_rgba(34,197,94,0.3)] relative">

            <div className="bg-green-500 text-black p-2 font-bold flex justify-between items-center">

              <span>SYSTEM MESSAGE</span>

              <button onClick={() => setShowModal(false)}><X size={20}/></button>

            </div>

            <div className="p-8 text-center space-y-6">

              <Shield size={64} className="mx-auto text-green-500 animate-pulse" />

              <h2 className="text-2xl font-bold">PROTOCOL SECURE</h2>

              <p className="text-green-300">

                This token is protected by quantum-resistant encryption (Just kidding, it's just a renounced contract on Solana).

              </p>

              <div className="space-y-2 text-sm text-left bg-green-900/10 p-4 border border-green-500/30">

                <p>{'>'} TAX: 0/0</p>

                <p>{'>'} LP: BURNED</p>

                <p>{'>'} DEV: BASED</p>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

