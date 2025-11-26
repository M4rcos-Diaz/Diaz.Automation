import { useEffect, useState } from 'react';

interface HeroProps {
  onBookCall: () => void;
}

function Hero({ onBookCall }: HeroProps) {
  const [asciiArt, setAsciiArt] = useState<string[]>([]);

  useEffect(() => {
    const chars = ['0', '1'];
    const colors = ['text-blue-400', 'text-blue-500', 'text-purple-400', 'text-purple-500', 'text-pink-400', 'text-red-400'];

    const generateAsciiArt = () => {
      const art: string[] = [];
      for (let i = 0; i < 40; i++) {
        let line = '';
        for (let j = 0; j < 25; j++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
          line += `<span class="${color} opacity-${Math.random() > 0.5 ? '80' : '40'}">${char}</span>`;
        }
        art.push(line);
      }
      return art;
    };

    setAsciiArt(generateAsciiArt());
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="ascii-art text-center leading-[0.8] animate-float-slow" dangerouslySetInnerHTML={{ __html: asciiArt.join('<br/>') }} />
      </div>

      <div className="absolute top-8 left-8">
        <h2 className="text-sm tracking-widest uppercase text-gray-400">Diaz.Automation</h2>
      </div>

      <div className="absolute top-8 right-8">
        <button className="text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
          [ LOGIN ]
        </button>
      </div>

      <div className="relative z-10 max-w-6xl text-left animate-fade-in">
        <p className="text-sm tracking-widest uppercase text-gray-500 mb-8">COMING SOON</p>

        <h1 className="text-8xl md:text-[12rem] lg:text-[14rem] font-bold leading-none mb-12 tracking-tight">
          BUILD<br />
          ON<br />
          ANY<br />
          AXIS
        </h1>

        <button
          onClick={onBookCall}
          className="border-2 border-red-500 text-white px-12 py-4 text-sm tracking-widest uppercase hover:bg-red-500/10 transition-all duration-300"
        >
          JOIN THE INNER CIRCLE
        </button>
      </div>

      <div className="absolute bottom-8 left-8">
        <p className="text-xs text-gray-600 tracking-wider uppercase">
          DIAZ.AUTOMATION [C] 2025. ALL RIGHTS RESERVED. D, SA GENEVE SWITZERLAND & D SOFTWARES, QATAR
        </p>
      </div>
    </section>
  );
}

export default Hero;
