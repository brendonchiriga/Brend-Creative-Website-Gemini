import React, { useState } from 'react';
import { Facebook, Instagram, Phone, X } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const XIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsAppIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);

const About: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Combined array of new and existing portfolio images
  const portfolioImages = [
    // New Images
    'https://lh3.googleusercontent.com/d/1UHW605QxPAbYKT75uSZ4KnzXSHg7ZlI4',
    'https://lh3.googleusercontent.com/d/1TBA-JjYwAbDkbkpvk02GohRL1efRnVTV',
    'https://lh3.googleusercontent.com/d/1UwNNPwf9Rj28CQaz9jCmPs4UeO4BMqjg',
    'https://lh3.googleusercontent.com/d/1oeOTzKPW_AKTa0UnUahxiPYVjx64JhQl',
    // Existing Portfolio Images from Home
    'https://lh3.googleusercontent.com/d/1-7OUuk3WRo_iwbjNVa5F_OGybmDeEG95',
    'https://lh3.googleusercontent.com/d/17YoGnlTMPaYX1TFX0EPXU7Wwhg8mxtJK',
    'https://lh3.googleusercontent.com/d/1r1hZmtpuS1vObwsUk9JtxaKDo3aLtI1U',
    'https://lh3.googleusercontent.com/d/1Zkxtiv6ycuGgZVv8E3sPpDLHkZ7KsLYv'
  ];

  return (
    <div className="bg-transparent min-h-screen pt-24 md:pt-32 pb-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <ScrollReveal className="text-center mb-12 md:mb-20">
             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">About Brend <span className="text-brand-cyan">Creative</span></h1>
             <p className="text-gray-400 max-w-4xl mx-auto text-base md:text-lg leading-relaxed px-4">
                Welcome to Brend Creative! We’re your one-stop shop for all things creative and strategic, guiding you to achieve your business goals.
                Browse our profile to discover how we can craft impressive graphic designs that perfectly capture your vision, alongside our strategic digital marketing expertise.
             </p>
        </ScrollReveal>

        {/* Founder Section */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center bg-[#151525]/80 backdrop-blur-md rounded-3xl p-6 md:p-12 border border-white/5" stagger={0.3}>
            <div className="order-2 lg:order-1">
                <span className="text-brand-purple font-semibold uppercase tracking-wider text-xs md:text-sm mb-2 block">Founder Message</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Your Creative Partner For Success</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                    <p>
                        Brend Creative is a dynamic freelance graphic design and digital marketing studio dedicated to helping businesses thrive. We believe that compelling visuals and a strong digital presence are essential for success in today’s competitive market.
                    </p>
                    <p>
                        Our services go beyond standard design offerings—we craft stunning business cards, company profiles, flyers, and professional CVs while also providing personalized branding and marketing solutions.
                    </p>
                    <p>
                        As a freelancer-based studio, we offer agility and tailored attention, ensuring each project meets your unique goals without the high costs of a traditional agency.
                    </p>
                </div>
                
                <div className="mt-8 border-l-4 border-brand-cyan pl-6">
                    <h3 className="text-white font-bold text-lg md:text-xl">Brendon R Chiriga</h3>
                    <p className="text-gray-500 text-sm">Business Information Technology</p>
                </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
                 {/* Placeholder for Founder Image */}
                 <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 border border-white/10 group">
                    <img 
                        src="https://lh3.googleusercontent.com/d/1zOnJYzcRgYJomh4F8nwa2ygQm4USoqfH" 
                        alt="Brendon R Chiriga" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 </div>
            </div>
        </ScrollReveal>

        {/* Latest Work Gallery */}
        <div className="mt-20 md:mt-32 border-t border-white/5 pt-16 md:pt-20">
            <ScrollReveal className="text-center mb-12 md:mb-16">
                <span className="text-brand-cyan font-semibold uppercase tracking-wider text-xs md:text-sm">Featured Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Checkout Our Latest Work</h2>
            </ScrollReveal>
            
            <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
                {portfolioImages.map((img, index) => (
                <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer aspect-[4/3]" 
                    onClick={() => setSelectedImage(img)}
                >
                    <img 
                        src={img} 
                        alt={`Portfolio Work ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        loading="lazy" 
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium border border-white/30 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">View Project</span>
                    </div>
                </div>
                ))}
            </ScrollReveal>
        </div>

        {/* Social Proof */}
        <ScrollReveal className="mt-16 md:mt-24 text-center pb-8 border-t border-white/5 pt-16">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8">Follow Us on Social Media</h3>
            <div className="flex justify-center gap-4 md:gap-8 flex-wrap px-4">
                <a href="https://www.facebook.com/share/1FbLDDyW6f/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 bg-[#151525]/80 backdrop-blur-sm border border-white/5 rounded-xl hover:border-brand-purple hover:bg-brand-purple/10 hover:text-white text-gray-400 text-sm md:text-base transition-all font-medium flex items-center gap-2 group">
                    <Facebook className="w-5 h-5 group-hover:text-brand-cyan transition-colors" />
                    <span>Facebook</span>
                </a>
                <a href="https://x.com/brend_creative_?s=21" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 bg-[#151525]/80 backdrop-blur-sm border border-white/5 rounded-xl hover:border-brand-purple hover:bg-brand-purple/10 hover:text-white text-gray-400 text-sm md:text-base transition-all font-medium flex items-center gap-2 group">
                    <XIcon className="w-5 h-5 group-hover:text-brand-cyan transition-colors" />
                    <span>X-twitter</span>
                </a>
                <a href="https://www.instagram.com/brend_creative_?igsh=Z3M5c2M3eXU5N29l&utm_source=qr" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 bg-[#151525]/80 backdrop-blur-sm border border-white/5 rounded-xl hover:border-brand-purple hover:bg-brand-purple/10 hover:text-white text-gray-400 text-sm md:text-base transition-all font-medium flex items-center gap-2 group">
                    <Instagram className="w-5 h-5 group-hover:text-brand-cyan transition-colors" />
                    <span>Instagram</span>
                </a>
                 <a href="https://wa.me/message/UIPUSGMC4O3TL1" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 bg-[#151525]/80 backdrop-blur-sm border border-white/5 rounded-xl hover:border-brand-purple hover:bg-brand-purple/10 hover:text-white text-gray-400 text-sm md:text-base transition-all font-medium flex items-center gap-2 group">
                    <WhatsAppIcon className="w-5 h-5 group-hover:text-brand-cyan transition-colors" />
                    <span>WhatsApp</span>
                </a>
            </div>
        </ScrollReveal>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
            <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
                <X size={40} />
            </button>
            <img 
                src={selectedImage} 
                alt="Full View" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}
    </div>
  );
};

export default About;