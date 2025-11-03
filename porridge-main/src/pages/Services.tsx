import { Palette, Compass, Megaphone, Briefcase, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: 'Brand Strategy',
      description: 'We help you discover and articulate what makes your company unique. From positioning and messaging to visual identity systems, we build the strategic foundation for everything that follows.',
      capabilities: [
        'Brand positioning & architecture',
        'Messaging frameworks',
        'Visual identity design',
        'Brand guidelines & systems',
      ],
    },
    {
      icon: Palette,
      title: 'Creative Direction & Design',
      description: 'Our creative team brings your brand to life across every touchpoint. We design experiences that connect emotionally while serving business objectives.',
      capabilities: [
        'Website & product design',
        'Marketing collateral',
        'Pitch decks & presentations',
        'Social media creative',
      ],
    },
    {
      icon: Megaphone,
      title: 'Growth Marketing',
      description: 'We build marketing systems that scale efficiently. From content strategy to paid acquisition, we focus on sustainable growth that compounds over time.',
      capabilities: [
        'Content strategy & creation',
        'Performance marketing',
        'SEO & organic growth',
        'Email & lifecycle marketing',
      ],
    },
    {
      icon: Briefcase,
      title: 'Venture Partnerships',
      description: 'Our equity-based model aligns our incentives with yours. We structure partnerships that give you access to senior-level creative talent without depleting your runway.',
      capabilities: [
        'Equity-for-creative models',
        'Flexible engagement terms',
        'Embedded team integration',
        'Long-term strategic advisory',
      ],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We immerse ourselves in your business, market, and vision to identify opportunities and challenges.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive brand and marketing strategy aligned with your business goals.',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Our team brings the strategy to life through design, content, and systematic execution.',
    },
    {
      number: '04',
      title: 'Growth',
      description: 'We iterate, optimize, and scale what works, staying with you as an ongoing partner.',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            What we do
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We offer comprehensive brand and marketing services tailored to early-stage startups.
            Our equity-based model means you get experienced creative partners without the traditional agency price tag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-accent/20 hover:shadow-lg transition-all"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <ArrowRight size={16} className="text-accent flex-shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="bg-gray-50 rounded-2xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            How we work with startups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Partnership models that work for you
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Every startup is different. We structure creative equity partnerships that align with your
            stage, needs, and timeline. Whether you need a focused brand sprint or ongoing creative
            leadership, we'll find the right fit.
          </p>
          <div className="inline-flex items-center space-x-2 text-accent font-medium group cursor-pointer">
            <span>Explore partnership options</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </section>
    </div>
  );
}
