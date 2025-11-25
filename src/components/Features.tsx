import { MessageSquare, TrendingUp, Database, Zap, Brain, Shield } from 'lucide-react';

interface FeaturesProps {
  onBookCall: () => void;
}

function Features({ onBookCall }: FeaturesProps) {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chat Agents',
      description: 'Deploy intelligent conversational AI that understands context, handles customer queries 24/7, and delivers human-like interactions.',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Automate prospect identification, qualification, and nurturing with AI-driven systems that convert at scale.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamlessly connect your existing CRM with AI automation for unified data management and enhanced productivity.',
      gradient: 'from-purple-600 to-violet-600'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Eliminate repetitive tasks with intelligent automation that learns and adapts to your business processes.',
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      icon: Brain,
      title: 'Smart Analytics',
      description: 'Get actionable insights with AI-powered analytics that predict trends and optimize decision-making.',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance standards ensure your data and automations are always protected.',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-100 bg-clip-text text-transparent">
            Cutting-Edge Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leverage the power of AI to automate, scale, and dominate your market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gray-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/60 transition-all duration-500 hover:scale-105 hover:bg-gray-900/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 shadow-lg glow-purple group-hover:glow-purple-lg transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onBookCall}
            className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 glow-purple-lg"
          >
            <span className="relative z-10">Schedule Your Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
