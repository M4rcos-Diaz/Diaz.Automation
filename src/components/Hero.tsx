import { Bot, Sparkles, ArrowRight, Zap } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

function Hero({ onBookCall }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-black to-blue-950/20"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '0.7s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full mb-8 backdrop-blur-md animate-slide-up">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300 font-semibold tracking-wide">AI-Powered Automation Platform</span>
          <Zap className="w-4 h-4 text-cyan-400" />
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-black mb-8 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Diaz Automation
        </h1>

        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-100 mb-6 max-w-4xl mx-auto leading-tight font-semibold animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Transform Your Business with Intelligent AI
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Cutting-edge AI chat agents, automated lead generation, and seamless CRM integrations designed to scale your business exponentially.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={onBookCall}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 glow-cyan-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Bot className="w-5 h-5" />
              Book a Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            className="px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-xl font-bold text-white text-lg backdrop-blur-sm hover:bg-gray-800/80 hover:border-cyan-500/50 transition-all duration-300"
          >
            View Case Studies
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
          {[
            { value: '500+', label: 'Automations Deployed', icon: Zap },
            { value: '99%', label: 'Client Satisfaction', icon: Sparkles },
            { value: '24/7', label: 'AI Support Active', icon: Bot }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <Icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-semibold tracking-wider uppercase">{stat.label}</div>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"></div>
    </section>
  );
}

export default Hero;
