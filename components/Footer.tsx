import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Custom Icons for X and TikTok
const XIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05050A] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12" stagger={0.1}>
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
               <img 
                src="https://lh3.googleusercontent.com/d/1I_NkgwYC8ZmUeWp3o0BKowzDh1rzDLpt" 
                alt="Brend Creative Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A passionate team of digital artisans helping clients navigate the digital landscape with stunning visuals and strategic marketing.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1FbLDDyW6f/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://x.com/brend_creative_?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)"><XIcon size={20} /></a>
              <a href="https://www.instagram.com/brend_creative_?igsh=Z3M5c2M3eXU5N29l&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://www.tiktok.com/@brend_creative_?_r=1&_t=ZS-93ibYLfRFBK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok"><TikTokIcon size={20} /></a>
            </div>
          </div>

          {/* Quick Links - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-purple mt-0.5 shrink-0" />
                <span>13321 Sebbassa Park, Ruwa, Zimbabwe</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-purple shrink-0" />
                <span>+263 771 293 944</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-purple shrink-0" />
                <span>+263 777 177 780</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-purple shrink-0" />
                <span>sales@brendcreative.co.zw</span>
              </li>
            </ul>
          </div>

          {/* Newsletter - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Sign up for our newsletter to get latest updates.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address..." 
                className="bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-purple transition-colors"
              />
              <button className="bg-transparent border border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white px-4 py-2.5 rounded font-medium text-sm transition-all uppercase tracking-wide">
                Subscribe
              </button>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Brend Creative. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;