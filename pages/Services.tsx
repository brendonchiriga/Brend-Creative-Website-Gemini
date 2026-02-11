import React from 'react';
import { Check, Globe, Palette, BarChart3, Database, ChevronRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';

const Services: React.FC = () => {
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  const bespokeServices = [
      { name: "Business Analysis", color: "#ff0000" }, // Red
      { name: "Custom Development", color: "#faff00" }, // Yellow
      { name: "System Architecture", color: "#3b82f6" }, // Blue
      { name: "Process Optimization", color: "#ec4899" } // Pink
  ];

  // Repeat the list to ensure enough length for the marquee
  const repeatedServices = [...bespokeServices, ...bespokeServices, ...bespokeServices, ...bespokeServices];

  return (
    <div className="bg-transparent min-h-screen pt-24 md:pt-32 pb-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Premium Services</h1>
            <p className="text-gray-400 text-sm md:text-base">Tailored solutions for every stage of your business growth</p>
        </ScrollReveal>

        {/* Pricing Grid - Optimized for tablet with md:grid-cols-2 */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16" stagger={0.15}>
            
            {/* Web Design Pricing */}
            <div 
                className="group relative bg-[#151525]/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col hover:border-brand-purple transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-purple/20 overflow-hidden cursor-default"
                onMouseMove={handleMouseMove}
            >
                {/* Spotlight Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,0,0,0.06),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="text-brand-purple" size={24} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Web Design</h2>
                    <div className="flex items-end gap-2 mb-6">
                        <span className="text-sm text-gray-400 mb-1">From</span>
                        <span className="text-3xl md:text-4xl font-bold text-brand-cyan">$250</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                        At Brend Creative, we design professional websites to boost your online presence. Our Basic Package offers a sleek, user-friendly site perfect for startups.
                    </p>
                    
                    <div className="space-y-4 mb-8 flex-1">
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className="text-brand-purple mt-1 shrink-0" />
                            <span><strong>Basic ($250):</strong> Sleek, user-friendly site for startups.</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className="text-brand-purple mt-1 shrink-0" />
                            <span><strong>Standard ($350):</strong> Fully responsive, enhanced features.</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className="text-brand-purple mt-1 shrink-0" />
                            <span><strong>E-Commerce ($400):</strong> Stunning shop with secure payments.</span>
                        </div>
                    </div>
                    
                    <Link to="/contact">
                        <button className="w-full py-3 rounded-xl border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all font-medium cursor-pointer relative z-20">
                            Get Web Design Quote
                        </button>
                    </Link>
                </div>
            </div>

            {/* Graphic Design Pricing */}
            <div 
                className="group relative bg-[#151525]/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col hover:border-brand-cyan transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-cyan/20 overflow-hidden cursor-default"
                onMouseMove={handleMouseMove}
            >
                {/* Spotlight Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(250,255,0,0.06),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

                <div className="absolute top-0 right-0 bg-brand-cyan text-black text-xs font-bold px-3 py-1 rounded-bl-xl z-20">POPULAR</div>
                
                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Palette className="text-brand-cyan" size={24} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Graphic Design</h2>
                    <div className="flex items-end gap-2 mb-6">
                        <span className="text-sm text-gray-400 mb-1">From</span>
                        <span className="text-3xl md:text-4xl font-bold text-brand-cyan">$10</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                        We craft eye-catching visuals to make your brand stand out. From Flyers & Posters to Logos that define your identity.
                    </p>
                    
                    <div className="space-y-4 mb-8 flex-1">
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className="text-brand-cyan mt-1 shrink-0" />
                            <span>Flyers & Posters for events/promos</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className="text-brand-cyan mt-1 shrink-0" />
                            <span>Professional Logo Design</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className="text-brand-cyan mt-1 shrink-0" />
                            <span>Banners, Brochures & Letterheads</span>
                        </div>
                    </div>

                    <Link to="/contact">
                        <button className="w-full py-3 rounded-xl bg-brand-cyan text-black hover:bg-white transition-all font-medium shadow-lg shadow-cyan-500/20 cursor-pointer relative z-20">
                            Get Design Quote
                        </button>
                    </Link>
                </div>
            </div>

            {/* Digital Marketing Pricing */}
            <div 
                className="group relative bg-[#151525]/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col hover:border-pink-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 md:col-span-2 lg:col-span-1 md:w-1/2 md:mx-auto lg:w-full lg:mx-0 overflow-hidden cursor-default"
                onMouseMove={handleMouseMove}
            >
                {/* Spotlight Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(236,72,153,0.06),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="text-pink-500" size={24} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Digital Marketing</h2>
                    <div className="flex items-end gap-2 mb-6">
                        <span className="text-sm text-gray-400 mb-1">From</span>
                        <span className="text-3xl md:text-4xl font-bold text-brand-cyan">$60</span>
                        <span className="text-sm text-gray-400 mb-1">/month</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                        Kickstart your visibility. Grow your brand with data-driven strategies and consistent design flow.
                    </p>
                    
                    <div className="space-y-4 mb-8 flex-1">
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className="text-pink-500 mt-1 shrink-0" />
                            <span><strong>Standard ($60/mo):</strong> 8 basic designs/mo (2/week) + 2 revisions.</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className="text-pink-500 mt-1 shrink-0" />
                            <span><strong>Premium ($80/mo):</strong> 12 designs/mo (1 prem/2 basic weekly).</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                            <Check size={16} className="text-pink-500 mt-1 shrink-0" />
                            <span><strong>Enterprise ($120/mo):</strong> 12 prem designs, social mgmt.</span>
                        </div>
                    </div>

                    <Link to="/contact">
                        <button className="w-full py-3 rounded-xl border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all font-medium cursor-pointer relative z-20">
                            Get Marketing Quote
                        </button>
                    </Link>
                </div>
            </div>
        </ScrollReveal>

        {/* Startup Combo Package */}
        <div id="startup-package" className="scroll-mt-32"></div>
        <ScrollReveal className="mb-24 relative group">
            {/* Gradient Border/Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-[2rem] opacity-50 blur-sm transition duration-500 group-hover:opacity-100"></div>
            
            <div className="relative bg-[#151525] rounded-[1.9rem] p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-10 items-center lg:items-start transition-transform duration-300 hover:-translate-y-1">
                
                {/* Left Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 border border-brand-purple/30 text-white font-bold text-xs uppercase tracking-wider mb-2">
                        <Rocket size={14} className="text-brand-cyan" />
                        <span>Limited Time Offer</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Starter Package <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">(Startup Combo)</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Designed specifically for new and small startups that need a professional brand presence fast and affordably. This all-in-one combo gives you the essential tools to launch confidently.
                    </p>
                    
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-6 text-left">
                        <h4 className="text-brand-cyan font-bold uppercase tracking-wide text-xs mb-3">Best For</h4>
                        <p className="text-gray-400 text-sm">
                            Early-stage startups, small businesses, and entrepreneurs who need a complete brand foundation without high upfront costs.
                        </p>
                    </div>
                </div>

                {/* Right Content - Features & Price */}
                <div className="w-full lg:w-5/12 bg-[#0B0B15]/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col">
                    <div className="flex items-end gap-2 mb-6 pb-6 border-b border-white/10">
                        <span className="text-5xl font-bold text-white">$275</span>
                        <span className="text-gray-400 font-medium mb-1.5">- One-Time</span>
                    </div>

                    <h3 className="text-white font-bold mb-4">What's Included:</h3>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                            <div className="bg-brand-cyan/20 p-1 rounded-full mt-0.5"><Check size={14} className="text-brand-cyan" /></div>
                            <div className="text-sm text-gray-300"><strong className="text-white">Starter Website</strong> - Simple, informative website (home, about, services, contact)</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-brand-cyan/20 p-1 rounded-full mt-0.5"><Check size={14} className="text-brand-cyan" /></div>
                            <div className="text-sm text-gray-300"><strong className="text-white">Company Logo</strong> - Clean, professional logo for brand identity</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-brand-cyan/20 p-1 rounded-full mt-0.5"><Check size={14} className="text-brand-cyan" /></div>
                            <div className="text-sm text-gray-300"><strong className="text-white">Letterhead</strong> - Branded company letterhead</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-brand-cyan/20 p-1 rounded-full mt-0.5"><Check size={14} className="text-brand-cyan" /></div>
                            <div className="text-sm text-gray-300"><strong className="text-white">Company Profile</strong> - Professional business profile document</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-brand-cyan/20 p-1 rounded-full mt-0.5"><Check size={14} className="text-brand-cyan" /></div>
                            <div className="text-sm text-gray-300"><strong className="text-white">Flyer</strong> - Marketing flyer for promotion or introductions</div>
                        </li>
                    </ul>

                    <MagneticButton className="w-full">
                        <Link to="/contact">
                            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-black font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-brand-purple/20 cursor-pointer">
                                Get Startup Combo
                            </button>
                        </Link>
                    </MagneticButton>
                </div>
            </div>
        </ScrollReveal>

        {/* Bespoke Applications - Standalone Section (Borderless Design) */}
        <div id="digital-transformation" className="relative py-16 md:py-24 border-t border-white/5 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            
            {/* Pill Section - Moved outside flex to align H2 and P */}
            <ScrollReveal className="flex justify-center lg:justify-start mb-8">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm border border-blue-500/20">
                    <Database size={16} />
                    <span className="uppercase tracking-wide text-xs font-bold">Bespoke Applications</span>
                </div>
            </ScrollReveal>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                
                {/* Left Column: Title & visual elements */}
                <ScrollReveal className="w-full lg:w-5/12 lg:sticky lg:top-32 relative z-10" stagger={0.1}>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 leading-tight text-center lg:text-left lg:-mt-3">
                        Digital Transformation <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-cyan">&amp; Custom Systems</span>
                    </h2>

                     {/* Added Image from Google Drive */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 mb-8 mt-4 group">
                        <img 
                            src="https://lh3.googleusercontent.com/d/1cMhGictEA6JKvoDedmZUk2IsxlrjokJl" 
                            alt="Digital Transformation Dashboard" 
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Marquee Animation for Tags */}
                    <div className="w-full mt-8 relative">
                        <style>{`
                            @keyframes marquee {
                                from { transform: translateX(0); }
                                to { transform: translateX(-50%); }
                            }
                            .animate-marquee {
                                display: flex;
                                width: max-content;
                                animation: marquee 60s linear infinite;
                            }
                            .marquee-container {
                                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                                overflow: hidden;
                                width: 100%;
                            }
                            .animate-marquee:hover {
                                animation-play-state: paused;
                            }
                        `}</style>
                        
                        <div className="marquee-container">
                            <div className="animate-marquee">
                                {/* First Set */}
                                <div className="flex gap-4 px-2">
                                    {repeatedServices.map((service, index) => (
                                        <div key={`s1-${index}`} className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                            <div 
                                                className="w-2 h-2 rounded-full animate-pulse shrink-0"
                                                style={{ 
                                                    backgroundColor: service.color,
                                                    boxShadow: `0 0 8px ${service.color}`
                                                }}
                                            ></div>
                                            <span className="text-gray-200 font-medium text-sm whitespace-nowrap">{service.name}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Duplicate Set for Loop */}
                                <div className="flex gap-4 px-2">
                                     {repeatedServices.map((service, index) => (
                                        <div key={`s2-${index}`} className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                            <div 
                                                className="w-2 h-2 rounded-full animate-pulse shrink-0"
                                                style={{ 
                                                    backgroundColor: service.color,
                                                    boxShadow: `0 0 8px ${service.color}`
                                                }}
                                            ></div>
                                            <span className="text-gray-200 font-medium text-sm whitespace-nowrap">{service.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </ScrollReveal>

                {/* Right Column: Content text and CTA */}
                <ScrollReveal className="w-full lg:w-7/12" stagger={0.15}>
                    <div className="text-gray-300 leading-relaxed mb-12">
                        <p className="text-lg md:text-lg lg:text-xl text-white font-medium mb-10 leading-relaxed text-center lg:text-left">
                            We help businesses drive digital transformation by aligning strategy, technology, and execution to modernize operations, optimize processes, and deliver scalable digital systems that support growth and innovation.
                        </p>
                        
                        {/* Divider */}
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-brand-cyan rounded-full mb-10 mx-auto lg:mx-0"></div>

                        <div className="space-y-6 text-base md:text-lg text-gray-400">
                            <p>
                                Our approach focuses on understanding existing business processes, identifying gaps and inefficiencies, and defining clear digital transformation opportunities. We design tailored digital solutions that improve operational efficiency, enhance user experience, and align technology with business objectives.
                            </p>
                            <p>
                                Our multidisciplinary team of Business Analysts, Developers, and Designers works collaboratively to assess current systems and deliver the most effective digital transformation strategy, from analysis and system design to scalable implementation.
                            </p>
                        </div>
                    </div>
                    
                    {/* CTA Section - Grouped in a sleek container */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#151525]/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-blue-500/50 transition-colors duration-300">
                        <div className="space-y-1 text-center md:text-left">
                            <p className="text-blue-400 font-bold uppercase tracking-wider text-xs">Project Investment</p>
                            <h4 className="text-3xl font-bold text-white">Custom Pricing</h4>
                            <p className="text-gray-500 text-sm">Tailored to your requirements</p>
                        </div>

                        <MagneticButton className="w-full md:w-auto">
                            <a 
                                href="https://wa.me/message/UIPUSGMC4O3TL1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/btn relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent font-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 w-full md:w-auto overflow-hidden"
                            >
                                <div className="absolute inset-0 transition-all duration-200 rounded-xl bg-gradient-to-r from-blue-600 to-brand-cyan opacity-80 group-hover/btn:opacity-100"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    Start Conversation 
                                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </MagneticButton>
                    </div>
                </ScrollReveal>

            </div>
        </div>

      </div>
    </div>
  );
};

export default Services;