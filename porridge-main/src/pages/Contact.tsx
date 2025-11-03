import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Let's start a conversation
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're looking for a creative partner or just want to explore how equity-based
            partnerships work, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
              <Mail size={24} className="text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">hello@porridgeventures.com</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
              <MapPin size={24} className="text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Mumbai, India</p>
          </div>
          {/* <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
              <Send size={24} className="text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Number</h3>
            <p className="text-gray-600">XXXXXXXX</p>
          </div> */}
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Send size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Message sent!</h3>
              <p className="text-gray-600">
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your company name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project and what you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-accent transition-colors inline-flex items-center justify-center space-x-2 group"
              >
                <span>Send message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">
        <div className="bg-gray-50 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Curious about creative equity partnerships?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're always happy to walk through how our model works and whether it might be a good
            fit for your startup. No pressure, just a conversation.
          </p>
        </div>
      </section>
    </div>
  );
}
