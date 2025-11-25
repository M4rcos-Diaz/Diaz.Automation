import { MessageSquare, TrendingUp, Database, Zap, Brain, Shield, Cpu, ArrowRight } from 'lucide-react';

interface FeaturesProps {
  onBookCall: () => void;
}

function Features({ onBookCall }: FeaturesProps) {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chat Agents',
      description: 'Deploy intelligent conversational AI that understands context, handles customer queries 24/7, and delivers human-like interactions that convert.',
      gradient: 'from-cyan-500 to-blue-500',
      highlight: 'Natural Language Processing'
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Automate prospect identification, qualification, and nurturing with AI-driven systems that convert leads at unprecedented scale.',
      gradient: 'from-blue-500 to-cyan-500',
      highlight: 'Intelligent Targeting'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamlessly connect with Salesforce, HubSpot, and any CRM platform for unified data management and enhanced team productivity.',
      gradient: 'from-cyan-600 to-blue-600',
      highlight: 'Universal Compatibility'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Eliminate repetitive tasks with intelligent automation that learns, adapts, and optimizes your business processes in real-time.',
      gradient: 'from-blue-600 to-cyan-600',
      highlight: 'Adaptive Intelligence'
    },
    {
      icon: Brain,
      title: 'Smart Analytics',
      description: 'Leverage AI-powered analytics to predict trends, identify opportunities, and make data-driven decisions with confidence.',
      gradient: 'from-cyan-500 to-blue-500',
      highlight: 'Predictive Insights'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SOC 2 compliance, and enterprise-grade security ensure your data and automations stay protected.',
      gradient: 'from-blue-500 to-cyan-500',
      highlight: 'Military-Grade Protection'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-semibold tracking-wide">POWERED BY AI</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
            Cutting-Edge Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Leverage advanced AI technology to automate, scale, and dominate your market with precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{feature.highlight}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-[15px]">{feature.description}</p>

                  <div className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="relative text-center bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and discover how AI automation can 10x your efficiency and revenue.
            </p>
            <button
              onClick={onBookCall}
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 glow-cyan-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
