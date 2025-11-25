import { Bot, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

function Hero({ onBookCall }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-purple-950/20"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/40 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span className="text-sm text-purple-200 font-medium tracking-wider">AI-Powered Business Solutions</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-100 bg-clip-text text-transparent leading-tight">
          Diaz Automation
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
          Transform Your Business with Intelligent AI Solutions
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          We specialize in AI chat agents, lead generation automation, and seamless CRM integrations to scale your business effortlessly.
        </p>

        <button
          onClick={onBookCall}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 glow-purple-lg"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Bot className="w-5 h-5" />
            Book a Call
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Automations Deployed' },
            { value: '99%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'AI Support' }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-gray-900/40 backdrop-blur-sm border border-purple-500/25 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-900/60">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}

export default Hero;
