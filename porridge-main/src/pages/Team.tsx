import { Linkedin, Twitter } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Geetanjali Bhattacharji',
      role: 'Co-Founder',
      bio: 'CMO Whisperer, Big 4 Consulting Leader, Marketing ROI expert, Transformation Evangelist, with 30+ years of experience',
      image: '/GEE-01 2.png',
      linkedin: "https://www.linkedin.com/in/geetanjali-bhattacharji-8588928"
    },
    {
      name: 'Anil Nair',
      role: 'Co-Founder ',
      bio: 'Over 25 years of experience in brand strategy, digital marketing, organizational development, technology, and innovation.',
      image: '/ANIL.png',
      linkedin: "https://www.linkedin.com/in/thegoodlife1/"
    },];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're a collective of senior creatives, strategists, and marketers who've spent
            our careers building brands at high-growth companies. Now we're bringing that
            expertise to early-stage startups through equity partnerships.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-accent/20 hover:shadow-lg transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  {/* <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-12 md:p-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              A Message from Our Founders
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                We started Porridge Ventures because we kept meeting brilliant founders with bold ideas — the kind that could reshape industries — but they were building without the brand and creative firepower their vision deserved.
Agencies were too expensive. Freelancers too inconsistent. And hiring senior creative leaders too early could burn through precious runway before product-market fit.
So we built a different model — one rooted in partnership, not transactions. At Porridge, we trade our branding and strategic expertise for equity. That means we only win when you do. We don’t think like service providers; we think like co-founders.
We know the challenges of early-stage building — the uncertainty, the trade-offs, the need to make every decision count. That’s exactly where we come in.
Porridge exists to give early-stage founders the creative advantage they need to build enduring brands — without losing focus, control, or cash flow.
              </p>
              <p>
                Traditional agencies price out early-stage startups. Freelancers lack the strategic
                depth and consistency. And hiring full-time creative leaders too early can drain your
                runway before you've found product-market fit.
              </p>
              <p>
                Our model is simple: we take equity instead of cash, aligning our success with yours.
                This isn't just about making brand work affordable—it's about making us true partners
                in your journey. When we have skin in the game, we think like co-founders, not vendors.
              </p>
              <p>
                We've built brands, scaled marketing teams, and raised capital ourselves. We know the
                challenges you face because we've lived them. And we're here to help you navigate them
                with the creative excellence your vision deserves.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 pt-8 border-t border-gray-200">
              <div>
                <p className="font-semibold text-black">Geetanjali Bhattacharji</p>
                <p className="text-sm text-gray-500">Co-Founder</p>
              </div>
              <div>
                <p className="font-semibold text-black">Anil Nair</p>
                <p className="text-sm text-gray-500">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
