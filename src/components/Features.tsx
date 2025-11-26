import { Terminal, Activity, Database, Zap, Cpu, Lock } from 'lucide-react';

interface FeaturesProps {
  onBookCall: () => void;
}

function Features({ onBookCall }: FeaturesProps) {
  const features = [
    {
      icon: Terminal,
      title: 'AI CHAT AGENTS',
      description: 'Intelligent conversational AI deployed across all touchpoints. 24/7 automated customer engagement with human-like interactions.'
    },
    {
      icon: Activity,
      title: 'LEAD GENERATION',
      description: 'Automated prospect identification and qualification systems. Scale your pipeline with precision targeting algorithms.'
    },
    {
      icon: Database,
      title: 'CRM INTEGRATION',
      description: 'Universal compatibility with Salesforce, HubSpot, and all major platforms. Seamless data synchronization.'
    },
    {
      icon: Zap,
      title: 'WORKFLOW AUTOMATION',
      description: 'Eliminate repetitive tasks with intelligent automation. Adaptive systems that learn and optimize continuously.'
    },
    {
      icon: Cpu,
      title: 'SMART ANALYTICS',
      description: 'Predictive insights powered by machine learning. Real-time data-driven decision making at enterprise scale.'
    },
    {
      icon: Lock,
      title: 'ENTERPRISE SECURITY',
      description: 'Military-grade encryption and SOC 2 compliance. Zero-breach architecture with continuous threat monitoring.'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-6 font-light">CAPABILITIES</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            AUTOMATION<br />INFRASTRUCTURE
          </h2>
          <p className="text-gray-500 text-sm mt-8 max-w-2xl leading-relaxed font-light">
            Advanced AI systems engineered for enterprise-scale operations and maximum efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-900/20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-black p-10 md:p-12 hover:bg-gray-950 transition-all duration-300 group border border-gray-900/20"
              >
                <Icon className="w-7 h-7 text-gray-500 mb-8 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <h3 className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-gray-400 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 md:mt-32 border border-gray-900/40 p-12 md:p-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              READY TO<br />DEPLOY?
            </h3>
            <p className="text-gray-500 mb-12 text-sm leading-relaxed font-light">
              Schedule a consultation to discover how AI automation can transform your operations and multiply efficiency
            </p>
            <button
              onClick={onBookCall}
              className="border border-white text-white px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
