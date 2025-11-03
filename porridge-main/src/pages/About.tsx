import { Target, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            We help founders turn creative capital into business growth.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Porridge Ventures was founded on a simple belief: the best creative partnerships
            are built on shared risk and shared reward. We work with early-stage startups
            who need world-class brand and marketing expertise but aren't ready for traditional
            agency fees.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Philosophy</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Collaboration over transaction</h3>
                  <p className="text-gray-600">
                    We're not vendors. We're partners who care deeply about your success
                    because it's directly tied to ours.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Creativity with ownership</h3>
                  <p className="text-gray-600">
                    Our equity stake means we think like founders, bringing strategic vision
                    alongside creative excellence.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Long-term partnership</h3>
                  <p className="text-gray-600">
                    We're in it for the journey, not just a project. Our relationships are
                    built to evolve as your company grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-12 md:p-16">
            <h3 className="text-2xl font-semibold mb-4">Why Porridge?</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The name comes from the Goldilocks principle: finding what's just right.
              Not too corporate, not too boutique. Not too rigid, not too loose.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work at the intersection of strategic rigor and creative freedom, helping
              startups find their perfect brand fit. Like a good bowl of porridge, we believe
              in getting the fundamentals exactly right.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-black text-white rounded-2xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Mission Statement
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            We exist to bridge the gap between exceptional creative work and early-stage
            founder constraints. By taking equity instead of cash, we enable ambitious startups
            to build brands worthy of their vision—creating a new model where creativity becomes
            a competitive advantage, not a cash drain.
          </p>
        </div>
      </section>
    </div>
  );
}
