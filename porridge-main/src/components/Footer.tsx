import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Porridge Ventures</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Building brands that grow with equity, not expense.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <p className="text-gray-600 text-sm">
              hello@porridgeventures.com
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Mumbai, India
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Follow</h4>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a> */}
              <a
                href="https://www.linkedin.com/company/glassboxco/"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href="#"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a> */}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Porridge Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
