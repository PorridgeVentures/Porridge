import { ArrowRight, Lightbulb, Handshake, TrendingUp } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Lightbulb,
      title: 'Brand Strategy',
      description: 'We craft distinctive brand identities that resonate with your audience and differentiate you in the market.',
    },
    {
      icon: Handshake,
      title: 'Creative Partnerships',
      description: 'Equity-based collaborations that align our success with yours, transforming creative capital into business growth.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-informed marketing systems designed to scale efficiently and drive sustainable customer acquisition.',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8 text-balance">
            We’re partners who build strength, transform businesses, and grow brands with expertise and conviction.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Porridge Ventures partners with early-stage startups to build brands, marketing systems,
            and growth strategies through creative equity partnerships. We're founder-level creative partners
            invested in your long-term success.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 group-hover:bg-accent/10 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="bg-gray-50 rounded-2xl p-12 md:p-16">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed max-w-4xl">
            "We don't just deliver creative work—we become your creative co-founders,
            bringing strategic vision and execution expertise with skin in the game."
          </blockquote>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Let's build together
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to turn creative capital into business growth? Start a conversation with us.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full hover:bg-accent transition-colors group"
          >
            <span className="font-medium">Get in touch</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
