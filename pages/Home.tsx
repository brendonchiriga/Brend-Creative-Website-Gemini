import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, PenTool, Layout, Monitor, Printer, CreditCard, TrendingUp, X, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';

// Stats with numeric values for animation
const stats = [
  { label: 'Projects Completed', end: 152, suffix: '' },
  { label: 'Happy Customers', end: 100, suffix: '+' },
  { label: 'Collaborations', end: 40, suffix: '+' },
  { label: 'Years In Service', end: 3, suffix: '' },
];

const recentWork = [
  { 
    id: 1, 
    title: 'Electr Solar', 
    category: 'Solar Energy', 
    img: 'https://lh3.googleusercontent.com/d/1-7OUuk3WRo_iwbjNVa5F_OGybmDeEG95' 
  },
  { 
    id: 2, 
    title: 'Brend Creative Sounds', 
    category: 'Audio Visuals', 
    img: 'https://lh3.googleusercontent.com/d/17YoGnlTMPaYX1TFX0EPXU7Wwhg8mxtJK' 
  },
  { 
    id: 3, 
    title: 'Khanyisa Greentech Energy', 
    category: 'Green Tech', 
    img: 'https://lh3.googleusercontent.com/d/1r1hZmtpuS1vObwsUk9JtxaKDo3aLtI1U' 
  },
  { 
    id: 4, 
    title: 'Raminol Lifestyle', 
    category: 'Lifestyle', 
    img: 'https://lh3.googleusercontent.com/d/1Zkxtiv6ycuGgZVv8E3sPpDLHkZ7KsLYv' 
  },
];

const rotatingTexts = [
  "Digital Marketing",
  "Website Design",
  "Graphic Design",
  "Digital Transformation"
];

const heroImages = [
    "https://lh3.googleusercontent.com/d/1_RR2-RmcNVVpKLWJp5bEYwIowr_Uavqk",
    "https://lh3.googleusercontent.com/d/19W3qABZtSmJ5VaUm0i-ZBFC8idDFlraa",
    "https://lh3.googleusercontent.com/d/1rxSc2D-pR_QGtONF1wcKU8b5troWXdx7",
    "https://lh3.googleusercontent.com/d/1PD2yz_qyBeIwfShyreAvJzRtZ2E-uVtS",
    "https://lh3.googleusercontent.com/d/1SvpxK7DSnQRfBpylsyXPfmGfOq1sT3oY",
    "https://lh3.googleusercontent.com/d/1r5DXtJuo_UaPYKWSO9hrYfKMrqJhxupe",
    "https://lh3.googleusercontent.com/d/1KD2XGUX6PiJYP85-S1kDO-7guP3-CcTF",
    "https://lh3.googleusercontent.com/d/1tbXfEJeKVcUixJFzFAUssQx-G1oVhXn6"
];

// Helper component for counting animation
const CountUp = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Rotating Text Effect
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % rotatingTexts.length;
      const fullText = rotatingTexts[i];

      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      let speed = 100;

      if (isDeleting) {
        speed = 50;
      }

      if (!isDeleting && updatedText === fullText) {
        speed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        speed = 500;
      }

      setTypingSpeed(speed);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Image Slider Effect
  useEffect(() => {
      const imageTimer = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 4000);
      return () => clearInterval(imageTimer);
  }, []);

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 lg:pt-48 lg:pb-24 overflow-visible">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1500px] pointer-events-none z-0">
             <div className="absolute top-[10%] left-[0%] w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-brand-purple/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse"></div>
             <div className="absolute bottom-[10%] right-[0%] w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] bg-brand-cyan/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-left z-20">
                <ScrollReveal stagger={0.15}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] mb-6">
                        <span className="whitespace-nowrap">Elevate Your Brand With</span> <br/>
                        <span className="gradient-text whitespace-nowrap">
                            {text}
                        </span>
                        <span className="text-brand-cyan animate-blink">|</span>
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
                        We’re your one-stop shop for all things creative and strategic, guiding you to achieve your business goals with impressive graphic designs and strategic digital marketing.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        {/* Wrapper div to avoid conflict between ScrollReveal animation transform and MagneticButton transform */}
                        <div>
                             <MagneticButton className="w-full sm:w-auto">
                                <Link to="/contact" className="block w-full">
                                    <button className="w-full bg-[#ff0000] text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-500/25">
                                    Contact Us
                                    </button>
                                </Link>
                            </MagneticButton>
                        </div>
                        <Link to="/services" className="w-full sm:w-auto">
                            <button className="group relative w-full bg-transparent border border-gray-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/5 hover:border-white transition-all overflow-hidden">
                                <span className="relative z-10">Our Services</span>
                                {/* Border Beam */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-border-beam pointer-events-none"></div>
                            </button>
                        </Link>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent my-8"></div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center sm:text-left">
                                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan mb-1">
                                    <CountUp end={stat.end} suffix={stat.suffix} />
                                </div>
                                <div className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wide font-medium leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 relative z-10 group mt-4 lg:mt-0 flex justify-center lg:block">
                <ScrollReveal className="w-full max-w-2xl lg:max-w-none relative" stagger={0.15}>
                    {/* Animated Background Glow for Carousel - Wrapped for Entrance + Pulse separation */}
                    <div className="absolute -inset-4 rounded-[2.5rem] z-0">
                         <div className="w-full h-full bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 rounded-[2.5rem] blur-2xl opacity-70 animate-pulse"></div>
                    </div>

                    {/* Main Carousel Card */}
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/20 bg-transparent backdrop-blur-sm z-10">
                        {heroImages.map((img, index) => (
                            <img 
                                key={index}
                                src={img} 
                                alt={`Hero Slide ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                                referrerPolicy="no-referrer"
                            />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B15]/60 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Floating Card 1: Strategy - Wrapped for Entrance + Float separation */}
                    <div className="hidden md:block absolute -top-4 -left-0 md:top-8 md:-left-12 z-20">
                        <div className="flex bg-white/10 p-3 md:p-5 rounded-xl md:rounded-2xl border border-white/10 shadow-xl backdrop-blur-md items-center gap-3 md:gap-4 animate-float transform scale-90 md:scale-100 origin-top-left">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                                <TrendingUp size={20} className="md:w-6 md:h-6" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">Strategy</p>
                                <p className="text-gray-400 text-[10px] md:text-xs">Growth Focused</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Card 2: Quality - Wrapped for Entrance + Float separation */}
                    <div className="hidden md:block absolute -bottom-4 -right-0 md:bottom-8 md:-right-8 z-20">
                        <div className="flex bg-white/10 p-3 md:p-5 rounded-xl md:rounded-2xl border border-white/10 shadow-xl backdrop-blur-md items-center gap-3 md:gap-4 animate-float transform scale-90 md:scale-100 origin-bottom-right" style={{ animationDelay: '2s' }}>
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-lg md:text-xl">
                                A+
                            </div>
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">Design Quality</p>
                                <p className="text-gray-300 text-[10px] md:text-xs">Top Rated</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-transparent relative">
         <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
         <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal className="text-center mb-12 md:mb-16">
                <span className="text-brand-cyan font-semibold uppercase tracking-wider text-xs md:text-sm">Our Services</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Elevate Your Brand</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Development & Digital Marketing Under One Roof</p>
            </ScrollReveal>

            <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" stagger={0.1}>
                {/* Service 1 */}
                <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 transition-colors shrink-0">
                        <PenTool className="text-brand-purple w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Graphic Design</h3>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                        Cutting Edge and Professional Graphic Designs. Visual Storytelling through design. Elevate your brand with stunning visuals!
                    </p>
                    <Link to="/services" className="text-brand-cyan font-medium flex items-center gap-2 text-sm hover:gap-3 transition-all mt-auto">
                        Learn More <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Service 2 */}
                <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors shrink-0">
                        <Monitor className="text-brand-cyan w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Digital Marketing</h3>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                        Kickstart your visibility. Grow Your Brand, Reach More Customers with data-driven strategies from SEO to targeted ads.
                    </p>
                    <Link to="/services" className="text-brand-cyan font-medium flex items-center gap-2 text-sm hover:gap-3 transition-all mt-auto">
                        Learn More <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Service 3 */}
                <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors shrink-0">
                        <Code className="text-purple-400 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Web Development</h3>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                        Best Informative Website for your Company. Build, Launch, and Grow Online with fast, responsive, and user-friendly websites.
                    </p>
                    <Link to="/services" className="text-brand-cyan font-medium flex items-center gap-2 text-sm hover:gap-3 transition-all mt-auto">
                        Learn More <ArrowRight size={16} />
                    </Link>
                </div>
                 {/* Service 4 */}
                 <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors shrink-0">
                        <Database className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Digital Transformation</h3>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                         Bridge the gap between vision and tech execution with bespoke applications, business analysis, and custom system development.
                    </p>
                    <Link to="/services#digital-transformation" className="text-brand-cyan font-medium flex items-center gap-2 text-sm hover:gap-3 transition-all mt-auto">
                        Learn More <ArrowRight size={16} />
                    </Link>
                </div>
                 {/* Service 5 */}
                 <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors shrink-0">
                        <Printer className="text-yellow-400 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Digital Printing</h3>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                        Premium Digital Printing for Sharp, Vibrant results! Crisp, Vibrant & High-Quality Prints for all your needs.
                    </p>
                    <Link to="/services" className="text-brand-cyan font-medium flex items-center gap-2 text-sm hover:gap-3 transition-all mt-auto">
                        Learn More <ArrowRight size={16} />
                    </Link>
                </div>
                 {/* Service 6 */}
                 <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors shrink-0">
                        <CreditCard className="text-green-400 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Business Cards</h3>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                        Professional business cards for a lasting impression! Make a Powerful First Impression with premium quality cards.
                    </p>
                    <Link to="/services" className="text-brand-cyan font-medium flex items-center gap-2 text-sm hover:gap-3 transition-all mt-auto">
                        Learn More <ArrowRight size={16} />
                    </Link>
                </div>
            </ScrollReveal>
         </div>
      </section>

      {/* Portfolio / Recent Work */}
      <section className="py-16 md:py-20 bg-transparent">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
             <ScrollReveal className="text-center mb-12 md:mb-16">
                <span className="text-brand-cyan font-semibold uppercase tracking-wider text-xs md:text-sm">Featured Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Impactful projects, every time</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    A showcase of our commitment to delivering top-tier, innovative digital solutions.
                </p>
            </ScrollReveal>

            <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
                {recentWork.map((item) => (
                    <div key={item.id} className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B15] via-[#0B0B15]/80 to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-brand-cyan text-sm mb-4">{item.category}</p>
                            <button 
                                onClick={() => setSelectedImage(item.img)}
                                className="bg-transparent border border-white/30 text-white text-xs px-4 py-2 rounded hover:bg-brand-purple hover:border-brand-purple transition-colors cursor-pointer">
                                PORTFOLIO DETAILS
                            </button>
                        </div>
                        {/* Purple bottom bar effect */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-cyan"></div>
                    </div>
                ))}
            </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white/5 backdrop-blur-md border-t border-white/5">
        <ScrollReveal className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-8 bg-gradient-to-r from-[#1A1A2E]/90 to-[#161625]/90 p-8 md:p-12 lg:p-10 rounded-3xl border border-white/5 backdrop-blur-sm text-center lg:text-left">
                <div className="max-w-xl mx-auto lg:mx-0">
                     <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to start your project?</h2>
                     <p className="text-gray-400 text-sm md:text-base">Contact us today for a free consultation and quote.</p>
                </div>
                {/* Actions container */}
                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 lg:gap-6 justify-center w-full lg:w-auto">
                    <Link to="/contact">
                        <button className="bg-brand-cyan text-black px-8 py-3 rounded-md font-bold hover:bg-white transition-colors min-w-[180px]">
                            GET FREE QUOTE
                        </button>
                    </Link>
                    <div className="text-white font-medium flex items-center gap-3 text-sm md:text-base bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-brand-cyan/30 transition-colors">
                        <span className="hidden sm:inline text-gray-400 text-xs uppercase font-bold tracking-wide">Call Us</span>
                        <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                            <span className="text-lg">📞</span>
                        </div>
                        <span className="whitespace-nowrap font-mono tracking-tight">+263 777 177 780</span>
                    </div>
                </div>
            </div>
        </ScrollReveal>
      </section>

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
                alt="Portfolio Full View" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}
    </div>
  );
};

export default Home;