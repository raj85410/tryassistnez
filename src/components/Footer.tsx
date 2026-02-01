import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Get Started', path: '/contact#contact-form' }
    ],
    services: [
      { name: 'Bookkeeping & Data Management', path: '/services' },
      { name: 'Virtual Assistance', path: '/services' },
      { name: 'Creative Artwork & Design', path: '/services' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-heading font-bold text-white">Assistnez</span>
            </Link>
            <p className="font-body text-gray-300 mb-6 leading-relaxed">
              Empowering promotional products businesses through reliable, efficient, and professional virtual assistance services.
            </p>
            <p className="font-heading font-bold text-lg mb-2">We assist you excel</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="font-body text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="font-body text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-primary" />
                <span className="font-body text-gray-300">
                  ABS Plaza<br />
                  Jagatpura 7 Number<br />
                  Jaipur, Rajasthan<br />
                  India 302017
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                <a href="tel:+442012345678" className="font-body text-gray-300 hover:text-white transition-colors">
                  +44 (0)20 1234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                <a href="mailto:support@assistnez.com" className="font-body text-gray-300 hover:text-white transition-colors">
                  support@assistnez.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-gray-400 text-center md:text-left">
              &copy; {currentYear} Assistnez. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
