import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

// IMPORTANT: Replace this with the actual URL from your Google Form Embed code (action attribute of the form)
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdOUoqYcSH-TzFTnVeRlOXbxZb0o1L1t1mU_Sa5RfpN_KfPCw/formResponse" 

// IMPORTANT: Replace these with the actual Entry IDs from your Google Form (see instructions)
const FORM_ENTRY_IDS = {
  name: "entry.819810553", // <--- CHANGE THIS
  email: "entry.523648762", // <--- CHANGE THIS
  company: "entry.1645462390", // <--- CHANGE THIS
  message: "entry.409691794", // <--- CHANGE THIS
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // 1. Construct URLSearchParams object
    const params = new URLSearchParams();
    params.append(FORM_ENTRY_IDS.name, formData.name);
    params.append(FORM_ENTRY_IDS.email, formData.email);
    params.append(FORM_ENTRY_IDS.company, formData.company);
    params.append(FORM_ENTRY_IDS.message, formData.message);

    try {
      // 2. Send the request (Google Form endpoint expects POST request)
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for cross-domain Google Forms submission
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      // Since we use 'no-cors', we can't check response.ok, 
      // but a successful fetch usually means the request was sent.
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' }); // Clear form

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitError("There was an error sending your message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
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

      <section className="max-w-full mx-auto px-6 lg:px-8 flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
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
              
              {/* Submission Error Display */}
              {submitError && (
                <p className="text-red-500 mb-4 text-center">{submitError}</p>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
                className={`w-full md:w-auto px-8 py-4 bg-black text-white rounded-full font-medium transition-colors inline-flex items-center justify-center space-x-2 group ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent'
                }`}
              >
                {isSubmitting ? (
                  <span>Submitting...</span> // Show loading state
                ) : (
                  <>
                    <span>Send message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
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