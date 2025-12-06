import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Zap, Lock, ExternalLink, Copy, Activity, X, TrendingUp, Server, Maximize2, Minimize2 } from 'lucide-react';

// --- CONFIGURATION (Diri ra ka mag-ilis) ---
const CONFIG = {
  ticker: "$HACK",
  ca: "8sF9...YOUR_SOLANA_CA_HERE...k2L9",
  supply: "1,000,000,000",
  telegram: "https://t.me/your_link",
  twitter: "https://x.com/your_link",
  pump: "https://pump.fun/board",
  dexscreener: "https://dexscreener.com/solana/YOUR_PAIR_ADDRESS", // Add your DexScreener link
  liquidity: 100, // Percentage
  burn: 50, // Percentage
  tax: "0/0"
};

// --- MATRIX RAIN COMPONENT ---
const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-20"
    />
  );
};

// --- SCANLINE EFFECT ---
const Scanline = () => (
  <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden h-full w-full bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(0,255,65,0.03),rgba(0,255,65,0.01),rgba(0,255,65,0.03))] bg-[length:100%_3px,2px_100%] opacity-40" />
);

// --- GLITCH TEXT COMPONENT ---
const GlitchText = ({ children, className = "" }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={glitch ? 'glitch-active' : ''}>{children}</span>
      {glitch && (
        <>
          <span className="absolute inset-0 glitch-layer-1" aria-hidden="true">{children}</span>
          <span className="absolute inset-0 glitch-layer-2" aria-hidden="true">{children}</span>
        </>
      )}
    </span>
  );
};

// --- TYPING TEXT COMPONENT ---
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
  }, [text, delay, onComplete]);

  return <span>{displayed}</span>;
};

// --- DECRYPTION ANIMATION COMPONENT ---
const DecryptionAnimation = ({ text, onComplete }) => {
  const [displayed, setDisplayed] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        if (onComplete) {
          setTimeout(() => onComplete(), 500);
        }
      }
      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return <span className="font-mono text-[#00ff41]">{displayed}</span>;
};

// --- DRAGGABLE CHART MODAL ---
const DraggableChart = ({ isOpen, onClose }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const modalRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.chart-header')) {
      setIsDragging(true);
      const rect = modalRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div
        ref={modalRef}
        className="absolute bg-black border-2 border-[#00ff41] shadow-[0_0_30px_rgba(0,255,65,0.5)] pointer-events-auto"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '90vw',
          maxWidth: '800px',
          height: '600px'
        }}
      >
        <div className="chart-header bg-[#00ff41] text-black p-2 flex justify-between items-center cursor-move">
          <span className="font-bold text-sm">LIVE_CHART.exe</span>
          <button onClick={onClose} className="hover:bg-black/20 p-1 rounded">
            <X size={16} />
          </button>
        </div>
        <div className="h-[calc(100%-40px)] bg-black">
          <iframe
            src={CONFIG.dexscreener}
            className="w-full h-full border-0"
            title="DexScreener Chart"
          />
        </div>
      </div>
    </div>
  );
};

// --- TOKENOMICS SIDEBAR ---
const TokenomicsSidebar = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <aside className="hidden lg:block fixed right-0 top-0 h-full w-64 bg-black/95 border-l border-[#00ff41]/30 z-30 p-4 overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <Server size={20} className="text-[#00ff41]" />
        <h2 className="text-[#00ff41] font-bold text-sm">SERVER_STATS</h2>
      </div>

      <div className="space-y-6">
        {/* Liquidity Status */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#00ff41]/70 text-xs">LIQUIDITY_STATUS</span>
            <span className="text-[#00ff41] text-xs font-bold">{CONFIG.liquidity}%</span>
          </div>
          <div className="h-2 bg-black border border-[#00ff41]/30 relative overflow-hidden">
            <div
              className="h-full bg-[#00ff41] transition-all duration-1000"
              style={{ width: `${CONFIG.liquidity}%` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,255,65,0.3),transparent)] animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Burn Percentage */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#00ff41]/70 text-xs">BURN_PERCENTAGE</span>
            <span className="text-[#00ff41] text-xs font-bold">{CONFIG.burn}%</span>
          </div>
          <div className="h-2 bg-black border border-[#00ff41]/30 relative overflow-hidden">
            <div
              className="h-full bg-[#00ff41] transition-all duration-1000"
              style={{ width: `${CONFIG.burn}%` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,255,65,0.3),transparent)] animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Supply Info */}
        <div className="border border-[#00ff41]/30 p-3">
          <p className="text-[#00ff41]/70 text-xs mb-1">TOTAL_SUPPLY</p>
          <p className="text-[#00ff41] font-bold text-sm">{CONFIG.supply}</p>
        </div>

        {/* Tax Info */}
        <div className="border border-[#00ff41]/30 p-3">
          <p className="text-[#00ff41]/70 text-xs mb-1">TAX_RATE</p>
          <p className="text-[#00ff41] font-bold text-sm">{CONFIG.tax}</p>
        </div>

        {/* Mint Status */}
        <div className="border border-[#00ff41]/30 p-3">
          <p className="text-[#00ff41]/70 text-xs mb-1">MINT_AUTHORITY</p>
          <p className="text-[#00ff41] font-bold text-sm">REVOKED</p>
        </div>
      </div>
    </aside>
  );
};

// --- CLI COMPONENT ---
const CLI = ({ onCommand }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Terminal initialized. Type "help" for available commands.' }
  ]);
  const inputRef = useRef(null);

  const commands = {
    help: () => [
      { type: 'system', text: 'Available commands:' },
      { type: 'system', text: '  help     - Show this help message' },
      { type: 'system', text: '  buy      - Open buy link' },
      { type: 'system', text: '  chart    - Open live chart' },
      { type: 'system', text: '  ca       - Display contract address' },
      { type: 'system', text: '  roadmap  - Show execution protocol' },
      { type: 'system', text: '  clear    - Clear terminal' }
    ],
    buy: () => {
      window.open(CONFIG.pump, '_blank');
      return [{ type: 'system', text: 'Opening buy link...' }];
    },
    chart: () => {
      onCommand('chart');
      return [{ type: 'system', text: 'Opening live chart...' }];
    },
    ca: () => [
      { type: 'system', text: 'Contract Address:' },
      { type: 'data', text: CONFIG.ca }
    ],
    roadmap: () => [
      { type: 'system', text: 'EXECUTION PROTOCOL:' },
      { type: 'system', text: 'Phase 1: System Initialization [COMPLETE]' },
      { type: 'system', text: 'Phase 2: Community Building [IN PROGRESS]' },
      { type: 'system', text: 'Phase 3: Market Expansion [PENDING]' },
      { type: 'system', text: 'Phase 4: Protocol Dominance [FUTURE]' }
    ],
    clear: () => []
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    setHistory(prev => [...prev, { type: 'input', text: `visitor@solana:~$ ${input}` }]);

    if (commands[cmd]) {
      if (cmd === 'clear') {
        setHistory([]);
      } else {
        const response = commands[cmd]();
        setHistory(prev => [...prev, ...response]);
      }
    } else {
      setHistory(prev => [...prev, { type: 'error', text: `Command not found: ${cmd}. Type "help" for available commands.` }]);
    }

    setInput('');
  };

  useEffect(() => {
    inputRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:right-64 bg-black/95 border-t border-[#00ff41]/30 z-40">
      <div className="max-w-7xl mx-auto p-4">
        {/* Command History */}
        <div className="max-h-48 overflow-y-auto mb-4 space-y-1 text-xs font-mono">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={
                item.type === 'input' ? 'text-[#00ff41]' :
                item.type === 'error' ? 'text-red-500' :
                item.type === 'data' ? 'text-[#00ff41] font-bold' :
                'text-[#00ff41]/70'
              }
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-[#00ff41] font-bold">visitor@solana:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[#00ff41] font-mono text-sm focus:ring-0"
            autoFocus
            autoComplete="off"
          />
          <span className="text-[#00ff41] animate-blink">_</span>
        </form>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [booted, setBooted] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [decrypting, setDecrypting] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const copyCA = () => {
    if (decrypting || copied) return;
    setDecrypting(true);
    setTimeout(() => {
      const el = document.createElement('textarea');
      el.value = CONFIG.ca;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setDecrypting(false);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }, 1500);
  };

  const handleCLICommand = (cmd) => {
    if (cmd === 'chart') {
      setShowChart(true);
    }
  };

  if (!booted) {
    return (
      <div className="min-h-screen bg-[#000000] text-[#00ff41] font-mono p-8 flex flex-col justify-end pb-20">
        <Scanline />
        <div className="space-y-2 text-sm md:text-base">
          <p>{'>'} INITIALIZING PROTOCOL...</p>
          <p className="text-[#00ff41]/70">{'>'} LOADING ASSETS... [OK]</p>
          <p className="text-[#00ff41]/70">{'>'} ESTABLISHING SECURE CONNECTION... [OK]</p>
          <p className="text-[#00ff41]/70">{'>'} BYPASSING FIREWALL... [SUCCESS]</p>
          <p className="animate-pulse">{'>'} ACCESSING MAIN FRAME...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-black relative overflow-x-hidden">
      <MatrixRain />
      <Scanline />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full lg:w-[calc(100%-16rem)] z-40 bg-black/95 border-b border-[#00ff41]/30 p-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/hacker-logo.png" 
              alt="Logo"
              className="w-10 h-10 object-contain logo-transparent"
              style={{ 
                mixBlendMode: 'screen',
                backgroundColor: 'transparent'
              }}
            />
            <Terminal size={20} className="animate-pulse text-[#00ff41]" />
            <span className="font-bold tracking-widest text-[#00ff41]">root@solana:~#</span>
          </div>
          <div className="flex gap-4 text-xs md:text-sm items-center">
            <span className="hidden md:inline text-[#00ff41]/50">SYS_STATUS: ONLINE</span>
            <span className="text-[#00ff41] font-bold">{new Date().toLocaleTimeString()}</span>
            <button
              onClick={() => setShowChart(true)}
              className="hidden md:flex items-center gap-1 text-[#00ff41] hover:text-[#00ff41]/70 transition-colors"
            >
              <TrendingUp size={16} />
              <span>CHART</span>
            </button>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="relative z-10 pt-24 pb-32 lg:pb-40 lg:pr-64 px-4 max-w-5xl mx-auto space-y-16">
        {/* HERO SECTION */}
        <section className="border border-[#00ff41]/50 bg-black/80 p-6 md:p-12 rounded-sm shadow-[0_0_20px_rgba(0,255,65,0.2)]">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* LOGO */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src="/hacker-logo.png" 
                alt={`${CONFIG.ticker} Logo`}
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain logo-transparent hover:drop-shadow-[0_0_40px_rgba(0,255,65,0.8)] transition-all duration-300"
                style={{ 
                  imageRendering: 'crisp-edges',
                  mixBlendMode: 'screen',
                  backgroundColor: 'transparent'
                }}
              />
            </div>

            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#00ff41]">
                <GlitchText>
                  <TypingText text={`PROJECT ${CONFIG.ticker}`} />
                </GlitchText>
                <span className="animate-blink">_</span>
              </h1>
              <p className="text-[#00ff41]/70 max-w-lg">
                The centralized banking system is failing. {CONFIG.ticker} is the glitch in the matrix. 
                Renounced. Locked. Untraceable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={CONFIG.pump} 
                  target="_blank"
                  className="bg-[#00ff41] hover:bg-[#00ff41]/80 text-black font-bold py-3 px-8 text-lg uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_0_15px_#00ff41] transition-all"
                >
                  <Zap size={18} /> INITIALIZE BUY
                </a>
                <button 
                  onClick={() => setShowChart(true)}
                  className="border border-[#00ff41] hover:bg-[#00ff41]/10 text-[#00ff41] py-3 px-8 text-lg uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                >
                  <TrendingUp size={18} /> LIVE CHART
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
            <div key={i} className="bg-black border border-[#00ff41]/30 p-6 flex items-start justify-between hover:border-[#00ff41] transition-colors group">
              <div>
                <p className="text-xs text-[#00ff41]/50 font-bold mb-1 group-hover:text-[#00ff41]">{stat.label}</p>
                <p className="text-xl md:text-2xl font-bold tracking-wider text-[#00ff41]">{stat.val}</p>
              </div>
              <stat.icon className="text-[#00ff41]/30 group-hover:text-[#00ff41] transition-colors" />
            </div>
          ))}
        </section>

        {/* CONTRACT ADDRESS (ENCRYPTED FILE BLOCK) */}
        <section className="bg-black border border-[#00ff41] p-2 md:p-4 font-mono text-xs md:text-sm">
          <div className="flex justify-between items-center bg-[#00ff41]/10 p-2 mb-4 border-b border-[#00ff41]/30">
            <span className="text-[#00ff41]">CA_ENCRYPTION_KEY.txt</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#00ff41]/50"></div>
              <div className="w-3 h-3 rounded-full bg-[#00ff41]/50"></div>
            </div>
          </div>

          <div 
            className="p-2 break-all text-[#00ff41]/70 relative group cursor-pointer min-h-[60px] flex items-center" 
            onClick={copyCA}
          >
            {decrypting ? (
              <div className="w-full">
                <p className="opacity-50 mb-2 text-xs text-[#00ff41]/50">// Decrypting...</p>
                <DecryptionAnimation text={CONFIG.ca} onComplete={() => {}} />
              </div>
            ) : copied ? (
              <div className="w-full text-center">
                <p className="text-[#00ff41] font-bold text-lg">✓ DECRYPTED & COPIED</p>
                <p className="text-[#00ff41]/50 text-xs mt-2">{CONFIG.ca}</p>
              </div>
            ) : (
              <>
                <div className="flex-1">
                  <p className="opacity-50 mb-2 text-xs">// Click to decrypt and copy</p>
                  <p className="text-base md:text-xl hover:text-[#00ff41] transition-colors font-mono">
                    {CONFIG.ca.split('').map((char, i) => (
                      <span key={i} className="opacity-30">█</span>
                    ))}
                  </p>
                </div>
                <div className="absolute top-2 right-2">
                  <Copy size={16} className="text-[#00ff41]/50" />
                </div>
              </>
            )}
          </div>
        </section>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-8 py-8 border-t border-[#00ff41]/20">
          <a href={CONFIG.telegram} className="text-[#00ff41] hover:text-[#00ff41]/70 hover:scale-110 transition-transform flex flex-col items-center gap-2">
            <div className="w-12 h-12 border border-[#00ff41] flex items-center justify-center rounded-full">
              <ExternalLink size={24} />
            </div>
            <span className="text-xs tracking-widest">TELEGRAM</span>
          </a>
          <a href={CONFIG.twitter} className="text-[#00ff41] hover:text-[#00ff41]/70 hover:scale-110 transition-transform flex flex-col items-center gap-2">
            <div className="w-12 h-12 border border-[#00ff41] flex items-center justify-center rounded-full">
              <ExternalLink size={24} />
            </div>
            <span className="text-xs tracking-widest">TWITTER</span>
          </a>
        </div>
      </main>

      {/* TOKENOMICS SIDEBAR */}
      <TokenomicsSidebar isVisible={showSidebar} />

      {/* CLI */}
      <CLI onCommand={handleCLICommand} />

      {/* DRAGGABLE CHART MODAL */}
      <DraggableChart isOpen={showChart} onClose={() => setShowChart(false)} />

      {/* DATA MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-black border-2 border-[#00ff41] w-full max-w-lg shadow-[0_0_50px_rgba(0,255,65,0.3)] relative">
            <div className="bg-[#00ff41] text-black p-2 font-bold flex justify-between items-center">
              <span>SYSTEM MESSAGE</span>
              <button onClick={() => setShowModal(false)}><X size={20}/></button>
            </div>
            <div className="p-8 text-center space-y-6">
              <Shield size={64} className="mx-auto text-[#00ff41] animate-pulse" />
              <h2 className="text-2xl font-bold text-[#00ff41]">PROTOCOL SECURE</h2>
              <p className="text-[#00ff41]/70">
                This token is protected by quantum-resistant encryption (Just kidding, it's just a renounced contract on Solana).
              </p>
              <div className="space-y-2 text-sm text-left bg-[#00ff41]/10 p-4 border border-[#00ff41]/30">
                <p className="text-[#00ff41]">{'>'} TAX: {CONFIG.tax}</p>
                <p className="text-[#00ff41]">{'>'} LP: BURNED</p>
                <p className="text-[#00ff41]">{'>'} DEV: BASED</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
