import { ArrowUpRight, Clock } from 'lucide-react';

export default function Insights() {
  const articles = [
    {
      title: 'The Future of Creative Equity',
      excerpt: 'Why the traditional agency model is broken for startups, and how equity-based partnerships are changing the game.',
      category: 'Partnership Models',
      readTime: '8 min read',
      date: 'March 2024',
    },
    {
      title: 'How Venture Studios Redefine Partnerships',
      excerpt: 'A deep dive into the venture studio model and what it means for creative collaboration in the startup ecosystem.',
      category: 'Industry Insights',
      readTime: '6 min read',
      date: 'February 2024',
    },
    {
      title: 'Why Founders Need Brand Thinking Early',
      excerpt: 'Brand isn\'t just a logo. We explore why strategic brand work in the early stages creates compounding returns.',
      category: 'Brand Strategy',
      readTime: '10 min read',
      date: 'January 2024',
    },
    {
      title: 'Building Marketing Systems That Scale',
      excerpt: 'From scrappy experiments to systematic growth: how to build marketing infrastructure that grows with you.',
      category: 'Growth Marketing',
      readTime: '7 min read',
      date: 'December 2023',
    },
    {
      title: 'The Art of Founder-Led Storytelling',
      excerpt: 'Why authentic founder narratives cut through the noise, and how to craft yours without sounding like everyone else.',
      category: 'Brand Strategy',
      readTime: '9 min read',
      date: 'November 2023',
    },
    {
      title: 'Design Systems for Early-Stage Startups',
      excerpt: 'How to build flexible, scalable design systems when you\'re moving fast and everything is changing.',
      category: 'Creative Direction',
      readTime: '12 min read',
      date: 'October 2023',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Insights
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our perspective on brand building, creative partnerships, and what it takes to
            build remarkable companies in the startup ecosystem.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-accent/20 hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-accent/5 group-hover:to-accent/10 transition-all" />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {article.category}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-gray-400 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.date}</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">
        <div className="bg-black text-white rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Subscribe to our insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get our latest thinking on brand building, creative partnerships, and startup growth
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
            />
            <button className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
