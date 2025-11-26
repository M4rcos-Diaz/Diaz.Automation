import { useEffect, useState } from 'react';

interface HeroProps {
  onBookCall: () => void;
}

function Hero({ onBookCall }: HeroProps) {
  const [asciiArt, setAsciiArt] = useState<string[]>([]);

  useEffect(() => {
    const chars = ['0', '1'];

    const generateAsciiArt = () => {
      const art: string[] = [];
      for (let i = 0; i < 35; i++) {
        let line = '';
        for (let j = 0; j < 30; j++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const opacity = Math.random() > 0.5 ? '30' : '20';
          line += `<span class="text-white opacity-${opacity}">${char}</span>`;
        }
        art.push(line);
      }
      return art;
    };

    setAsciiArt(generateAsciiArt());

    const interval = setInterval(() => {
      setAsciiArt(generateAsciiArt());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-end pr-12 md:pr-24 pointer-events-none">
        <div
          className="ascii-art text-right leading-[0.9] animate-float-slow opacity-40"
          dangerouslySetInnerHTML={{ __html: asciiArt.join('<br/>') }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-20">
        <div className="animate-slide-in-left">
          <h2 className="text-xs tracking-[0.3em] uppercase text-white font-light">DIAZ.AUTOMATION</h2>
        </div>
        <button className="text-xs tracking-[0.3em] uppercase text-gray-500 hover:text-white transition-colors font-light">
          [ LOGIN ]
        </button>
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-32 animate-fade-in">
        <div className="max-w-7xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-600 mb-12 font-light">COMING SOON</p>

          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-bold leading-[0.85] mb-16 max-w-5xl">
            BUILD<br />
            ON<br />
            ANY<br />
            AXIS
          </h1>

          <button
            onClick={onBookCall}
            className="inline-block border border-white text-white px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            JOIN THE INNER CIRCLE
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <p className="text-[10px] text-gray-700 tracking-[0.2em] uppercase font-light max-w-4xl">
          DIAZ.AUTOMATION © 2025. ALL RIGHTS RESERVED. D, SA GENEVE SWITZERLAND & D SOFTWARES, QATAR
        </p>
      </div>
    </section>
  );
}

export default Hero;
