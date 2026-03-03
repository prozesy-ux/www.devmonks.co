import React, { useState, useRef } from "react";
import { HeroContent } from "@/sections/Hero/components/HeroContent";

const logos = [
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a129353e4d9ef6d4af5e1f_Logo_Wefi_%20mono.svg", alt: "wefi" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a12921fd278f7110b07da8_Logo_Vocai_mono.svg", alt: "vocai" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a129050165f07db01bad86_Logo_triply_mono.svg", alt: "triply" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a128eb9626b7413c930afb_Logo_tempo_mono.svg", alt: "tempo" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a128d46bb9619ae34c8a32_Logo_Sitewise_mono.svg", alt: "Sitewise" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a128990d4c09b483213578_Logo_oter_mono.svg", alt: "Oter" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1287bae455f64da2d3ffb_Logo_Memorybox_mono.svg", alt: "memorybox" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a12861c7b4b66459838dc4_Logo_medease_mono.svg", alt: "Medease" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1284555890db17cdb6192_Logo_likely_mono.svg", alt: "likely" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1282f279f02ef00fd85bd_Logo_lendiview_mono.svg", alt: "Lendiview" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a127e3fc81704faa2076a8_Logo_Learndojo_mono.svg", alt: "Learndojo" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0d2c427a0dbc039a16769_Logo_HLCafe_%20mono.svg", alt: "HLcafe" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0d2a2b59c75a1958245bd_Logo_grow_mono.svg", alt: "Grow Affiliate" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0d28258fbac6b08259eea_Logo_Getease_%20mono.svg", alt: "Getease" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0d263d4ce258fa781c416_Logo_Gainsty_mono.svg", alt: "Gainsty" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0d1f4102ab4c6d661f1a3_Logo_Fleek_%20mono.svg", alt: "Fleek" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0d1dd7f18c185d62b554f_Logo_Fitflow_%20mono.svg", alt: "Fitflow" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0d1c327a0dbc039a1439b_Logo_Esdiac_mono.svg", alt: "Esdiac" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0d1941c49538bd6971041_Logo_edvive_mono.svg", alt: "Edvive" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0d17c375617ff7a86508c_Logo_Dlicio_mono.svg", alt: "Dilicio" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a0892c433a7e171f982671_Logo_CRE%20Guard_mono.svg", alt: "CRE Guard" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07f605d5b9fba3ed852d5_Logo_cpg_mono.svg", alt: "CPG" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07f4a70f6851eb70d2d5b_Logo_Coinpulse_%20mono.svg", alt: "Coin Pulse" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07f258a9926c38e5074bd_Logo_Bizphix_mono.svg", alt: "Bizphix" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07efdac07b72acf77b8fa_Logo_alpine_mono.svg", alt: "Alpine" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07ee583c6de026698f4ac_Logo_akijship_mono.svg", alt: "Akij Ship" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07ec7db05429345c74285_Logo_akij_mono.svg", alt: "Akij" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07eaa84476f0dbf76520d_Logo_AirAstana_%20mono.svg", alt: "Air Astana" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07e6cde2f1e5a5c514fa8_Logo_affine_mono.svg", alt: "Afffine" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07e014e59e2dfb51bc678_Logo_Addisoft_mono.svg", alt: "Addisoft" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07ddbde4c7ff356d67950_Logo_3asafeer_mono.svg", alt: "3asafeer" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07c65f4b055e92871a3f5_Logo_compaies_mono.svg", alt: "Compai.es" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07c887fefec5689a1d3f9_Logo_Hammer_%20mono.svg", alt: "Isaacs & Isaacs" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07c47b82f17b569e67e6f_Logo_Rob_%20mono.svg", alt: "Rob Levine" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07ce037474e1242e574ff_Logo_AJC_%20mono.svg", alt: "American Jet Centre" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07cf90a0848a4af35e9ef_Logo_Metal_%20mono.svg", alt: "Metal" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d1501c867b73b314bc9_Logo_Plentypay_mono.svg", alt: "Plenty Pay" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d3266ab034b672a0a22_Logo_FMS_%20mono.svg", alt: "FMS" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d4a94b1bb2db9b5a2ca_Logo_Clarity_mono.svg", alt: "Clarity Traders" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d60f445e66623b18156_Logo_Buttercup_mono.svg", alt: "Buttercup Venues" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d71ef14d9f4ac318564_Logo_Sift_mono.svg", alt: "Sift" },
  { src: "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d8470f6851eb70ca200_Logo_PF_mono.svg", alt: "Property Finder" }
];

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { width, height, left, top } = sectionRef.current.getBoundingClientRect();
    
    // Calculate percentage position for the radial gradient
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative box-border caret-transparent overflow-hidden isolate bg-[#050505]"
    >
      {/* Video Background with Interactive Overlay */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source
            src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699be9e0e0e0e0e0e0e0e0e0_hero-bg-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dotted pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        {/* Moving interactive orange glow */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(circle 300px at ${mousePos.x}% ${mousePos.y}%, rgba(234, 88, 12, 0.12), transparent 70%)`
          }}
        />
        {/* Static accent glow on the right */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-orange-600/10 blur-[120px] rounded-full translate-x-1/3 pointer-events-none" />
      </div>

      <div className="box-border caret-transparent px-4 md:px-5">
        <div className="border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-transparent box-border caret-transparent border-l border-r">
          <div className="box-border caret-transparent px-4 md:px-5">
            <div className="box-border caret-transparent pt-[120px] pb-12 md:pt-[142px] md:pb-28">
              <div className="box-border caret-transparent max-w-screen-xl mx-auto">
                <HeroContent />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-800 box-border caret-transparent h-px w-full"></div>
      
      {/* Animated Logo Strip */}
      <div className="flex overflow-hidden w-full bg-[#050505]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Render two identical sets of logos to create a seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} role="list" className="flex shrink-0">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  role="listitem"
                  className="items-center border-l-zinc-800 box-border caret-transparent flex shrink-0 justify-center w-[120px] px-[18px] border-l md:w-auto md:px-7 py-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="inline-block h-[40px] max-w-full object-contain w-full md:h-[50px] opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-zinc-800 box-border caret-transparent h-px w-full"></div>
    </section>
  );
};
