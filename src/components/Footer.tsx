
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">lovable.dev</h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Advancing scientific research through cutting-edge computational biology 
                and pharmaceutical science services. Your trusted partner in discovery.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>contact@lovable.dev</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>Boston, MA, United States</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Molecular Docking
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                ADME Prediction
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                MD Simulations
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Scientific Writing
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Results Analysis
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('about');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('services');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('contact');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} lovable.dev. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                ResearchGate
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
