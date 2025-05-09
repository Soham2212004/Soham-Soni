import React, { useState, useRef, useEffect } from 'react';
import { Download, Linkedin, Github, Instagram, Award } from 'lucide-react';

// Import the logo directly - this is the correct way to import local images in React/Next.js
import logoImage from './logo.jpg';

const Home = () => {
  // Using the imported image
  const profileImage = logoImage;
  const [showResumePopup, setShowResumePopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Mouse parallax effect for profile image - IMPORTANT: Using useCallback to prevent re-renders
  const handleMouseMove = React.useCallback((e) => {
    if (profileRef.current) {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate movement based on mouse position relative to center of screen
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      // Update DOM directly instead of using state to prevent re-renders
      if (profileRef.current) {
        profileRef.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
      }
    }
  }, []);

  // Set up the mouse move listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const openResumePopup = () => {
    setShowResumePopup(true);
  };

  const closeResumePopup = () => {
    setShowResumePopup(false);
  };

  // Particle animation for background
  const Particles = () => {
    const particleCount = 40;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.floor(Math.random() * 3) + 1;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const animationDuration = `${Math.random() * 30 + 20}s`;
      const delay = `${Math.random() * 10}s`;
      const opacity = Math.random() * 0.3 + 0.05;
      
      particles.push(
        <div 
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left,
            top,
            opacity,
            animation: `float ${animationDuration} infinite ease-in-out`,
            animationDelay: delay
          }}
        />
      );
    }
    
    return <>{particles}</>;
  };

// Animated typing effect for role titles - using memoization to prevent re-renders
const TypedText = React.memo(() => {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = [
    "AI Developer | Automation Specialist",
    "LLM & Prompt Engineering Expert",
    "Cloud Solution Architect",
    "Data Scientist & ML Engineer"
  ];

  // Using ref to track current title to prevent issues with closures
  const titleRef = useRef(titleIndex);
  titleRef.current = titleIndex;
  
  // Set up the typing animation with useEffect
  useEffect(() => {
    let timeoutId;
    
    const runTypingAnimation = () => {
      const currentTitle = titles[titleRef.current];
      
      if (isTyping) {
        // Typing effect
        if (displayText.length < currentTitle.length) {
          timeoutId = setTimeout(() => {
            setDisplayText(currentTitle.substring(0, displayText.length + 1));
          }, 100); // Typing speed
        } else {
          // Wait before starting to erase
          timeoutId = setTimeout(() => {
            setIsTyping(false);
          }, 1500);
        }
      } else {
        // Erasing effect
        if (displayText.length > 0) {
          timeoutId = setTimeout(() => {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          }, 50); // Erasing speed (faster than typing)
        } else {
          // Move to next title when erased completely
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setIsTyping(true);
        }
      }
    };

    runTypingAnimation();
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [displayText, isTyping, titles]);
  
  return (
    <div className="h-16 sm:h-12 overflow-hidden flex items-center">
      <div className="font-semibold text-indigo-300">
        {displayText}
        <span className={`inline-block w-1 h-5 bg-indigo-300 ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
      </div>
    </div>
  );
});

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020B2D] via-[#041436] to-[#020B2D]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#020B2D]" />
        </div>
        
        {/* Enhanced network graph background with particles */}
        <div className="absolute inset-0">
          <div className="network-pattern"></div>
          <Particles />
        </div>
        
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main content container */}
      <div className={`relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Left side: Text content */}
        <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-blue-200 mb-2 relative">
              <span className="relative inline-block">
                Hi There,
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-expand"></span>
              </span>
            </h2>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 relative overflow-hidden">
              I'm <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Soham Soni</span>
              <div className="absolute -bottom-2 left-0 w-3/4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </h1>
            
            <div className="text-xl mb-8">
              <TypedText />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openResumePopup}
                className="bg-transparent border-2 border-indigo-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-indigo-500/20 hover:bg-indigo-600/10 transition-all duration-300 flex items-center transform hover:scale-105"
              >
                <span className="relative z-10">Resume</span>
                <span className="ml-2 relative z-10 group-hover:rotate-45 transition-transform duration-300">+</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
              </button>
              

            </div>
            
            {/* Social media icons with enhanced styling */}
            <div className="flex mt-10 space-x-6">
              <a 
                href="https://www.linkedin.com/in/soham-soni-2342b4239/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-900/50 backdrop-blur-sm border border-blue-800/30 rounded-full p-3 hover:bg-blue-700 hover:scale-110 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-blue-200" />
              </a>
              
              <a 
                href="https://github.com/Soham2212004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-900/50 backdrop-blur-sm border border-purple-800/30 rounded-full p-3 hover:bg-purple-700 hover:scale-110 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-white group-hover:text-purple-200" />
              </a>
              
              <a 
                href="https://www.instagram.com/_soham_soni_?igsh=NGk5azVpeGVpcHM5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-900/50 backdrop-blur-sm border border-pink-800/30 rounded-full p-3 hover:bg-pink-700 hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white group-hover:text-pink-200" />
              </a>
              
              <a 
                href="https://www.credly.com/users/soni-soham" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-900/50 backdrop-blur-sm border border-green-800/30 rounded-full p-3 hover:bg-green-700 hover:scale-110 transition-all duration-300 group"
                aria-label="Credly"
              >
                <Award className="w-6 h-6 text-white group-hover:text-green-200" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side: Enhanced Profile image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Profile image as circular element with 3D effects */}
          <div 
            className="profile-image-container" 
            ref={profileRef}
          >
            {/* Animated rings */}
            <div className="profile-image-wrapper">
              <div className="profile-image-glow"></div>
              <div className="profile-image">
                <img 
                  src={profileImage}
                  alt="Soham Soni" 
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Resume Popup */}
      {showResumePopup && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-gradient-to-b from-[#0A1A3D] to-[#041436] rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col border border-blue-900/50 shadow-2xl shadow-blue-500/20">
            <div className="p-6 border-b border-blue-900/50 flex justify-between items-center backdrop-blur-sm bg-blue-900/10">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Soham Soni - Resume
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://drive.google.com/uc?export=download&id=1MDDKYTZM94oit5jlMAwl2eOscEUhbtUT" 
                  download="Soham_Soni_Resume.pdf"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg flex items-center transform hover:scale-105 transition-all duration-300 shadow-md shadow-blue-600/20"
                >
                  <Download size={18} className="mr-2" />
                  Download
                </a>
                <button 
                  onClick={closeResumePopup}
                  className="bg-gradient-to-r from-indigo-700 to-indigo-600 hover:from-indigo-600 hover:to-indigo-500 text-white px-4 py-2 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md shadow-indigo-600/20"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-0 bg-[#041030]/50">
              <iframe 
                src="https://drive.google.com/file/d/1MDDKYTZM94oit5jlMAwl2eOscEUhbtUT/preview"
                className="w-full h-full min-h-[85vh]"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-expand {
          animation: expand 1.5s forwards ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s forwards;
        }
        
        .network-pattern {
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(99, 179, 237, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(129, 140, 248, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, rgba(124, 58, 237, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          position: relative;
        }
        
        .network-pattern::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(129, 140, 248, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(129, 140, 248, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .profile-image-container {
          position: relative;
          width: 350px;
          height: 350px;
          margin-left: auto;
          transition: transform 0.3s ease-out;
          transform-style: preserve-3d;
        }
        
        
        .profile-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .profile-image-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(99, 179, 237, 0.4) 0%, transparent 70%);
          filter: blur(20px);
          animation: pulse-glow 4s infinite ease-in-out;
        }
        
        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 0 30px rgba(99, 179, 237, 0.3),
            0 0 15px rgba(129, 140, 248, 0.3),
            inset 0 0 15px rgba(99, 179, 237, 0.3);
          transition: all 0.5s ease;
          z-index: 10;
          border: 1px solid rgba(165, 180, 252, 0.3);
        }
        
        .profile-image:hover {
          transform: scale(1.05);
          box-shadow: 
            0 0 40px rgba(99, 179, 237, 0.4),
            0 0 20px rgba(129, 140, 248, 0.4),
            inset 0 0 20px rgba(99, 179, 237, 0.4);
        }
        
        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      `}</style>
    </section>
  );
};

export default Home;