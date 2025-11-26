import { Terminal, Activity, Database, Zap, Cpu, Lock } from 'lucide-react';

interface FeaturesProps {
  onBookCall: () => void;
}

function Features({ onBookCall }: FeaturesProps) {
  const features = [
    {
      icon: Terminal,
      title: 'AI CHAT AGENTS',
      description: 'Intelligent conversational AI deployed across all touchpoints. 24/7 automated customer engagement.'
    },
    {
      icon: Activity,
      title: 'LEAD GENERATION',
      description: 'Automated prospect identification and qualification. Scale your pipeline exponentially.'
    },
    {
      icon: Database,
      title: 'CRM INTEGRATION',
      description: 'Universal compatibility with Salesforce, HubSpot, and all major platforms.'
    },
    {
      icon: Zap,
      title: 'WORKFLOW AUTOMATION',
      description: 'Eliminate repetitive tasks. Adaptive intelligence that learns and optimizes continuously.'
    },
    {
      icon: Cpu,
      title: 'SMART ANALYTICS',
      description: 'Predictive insights powered by machine learning. Data-driven decision making at scale.'
    },
    {
      icon: Lock,
      title: 'ENTERPRISE SECURITY',
      description: 'Military-grade encryption. SOC 2 compliance. Zero-breach architecture.'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">CAPABILITIES</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            AUTOMATION<br/>INFRASTRUCTURE
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Advanced AI systems designed for enterprise-scale operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800/20 border border-gray-800/20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-black p-8 hover:bg-gray-900/30 transition-all duration-300 group"
              >
                <Icon className="w-8 h-8 text-gray-400 mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-400 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center border border-gray-800/30 p-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            READY TO DEPLOY?
          </h3>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discover how AI automation can transform your operations
          </p>
          <button
            onClick={onBookCall}
            className="border-2 border-white text-white px-12 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            SCHEDULE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
