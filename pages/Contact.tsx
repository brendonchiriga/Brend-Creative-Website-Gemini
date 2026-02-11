import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen pt-24 md:pt-32 pb-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-gray-400 text-sm md:text-base">We'd love to hear about your project.</p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12" stagger={0.3}>
            
            {/* Contact Form */}
            <div className="bg-[#151525]/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/5 order-2 lg:order-1">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-400 text-xs md:text-sm mb-2">First Name</label>
                            <input type="text" className="w-full bg-[#0B0B15]/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-purple transition-colors" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs md:text-sm mb-2">Last Name</label>
                            <input type="text" className="w-full bg-[#0B0B15]/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-purple transition-colors" placeholder="Doe" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs md:text-sm mb-2">Email Address</label>
                        <input type="email" className="w-full bg-[#0B0B15]/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-purple transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs md:text-sm mb-2">Message</label>
                        <textarea rows={5} className="w-full bg-[#0B0B15]/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-purple transition-colors" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <a 
                        href="https://wa.me/message/UIPUSGMC4O3TL1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 text-center block"
                    >
                        Send Message <Send size={18} />
                    </a>
                </form>
            </div>

            {/* Contact Details & Map */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                
                <div className="bg-[#151525]/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/5 space-y-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4">Contact Information</h3>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                            <MapPin className="text-brand-purple w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-wide font-semibold mb-1">Address</p>
                            <p className="text-white text-sm md:text-base">13321 Sebbassa Park, Ruwa</p>
                            <p className="text-white text-sm md:text-base">Zimbabwe</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                            <Phone className="text-brand-cyan w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-wide font-semibold mb-1">Phone</p>
                            <p className="text-white text-sm md:text-base">+263 771 293 944</p>
                            <p className="text-white text-sm md:text-base">+263 777 177 780</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0">
                            <Mail className="text-pink-500 w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-wide font-semibold mb-1">Email</p>
                            <p className="text-white text-sm md:text-base">sales@brendcreative.co.zw</p>
                        </div>
                    </div>
                </div>

                {/* Simulated Map */}
                <div className="bg-[#151525]/80 backdrop-blur-md p-2 rounded-3xl border border-white/5 h-56 md:h-64 overflow-hidden relative group">
                    <iframe 
                        src="https://maps.google.com/maps?q=13321+Sebbassa+Park,+Ruwa,+Zimbabwe&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, borderRadius: '1rem', filter: 'grayscale(100%) invert(90%)' }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Brend Creative Location"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 z-10">
                         <a href="https://maps.app.goo.gl/rshKN86JuFh22GKZ7" target="_blank" rel="noopener noreferrer">
                            <button className="bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold shadow-lg hover:bg-gray-200 transition-colors">
                                View on Google Maps
                            </button>
                         </a>
                    </div>
                </div>

            </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;