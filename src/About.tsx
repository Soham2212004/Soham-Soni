import React, { useState, useRef, useEffect } from 'react';
import { Coffee, Download, Mail, Award, Code, Cloud } from 'lucide-react';

interface AboutProps {
  image: string;
}

const About: React.FC<AboutProps> = ({ image }) => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      title: "AI & Machine Learning",
      icon: <Award size={24} className="text-blue-400" />,
      description: "Experience with ML frameworks, deep learning, and AI application development",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Full Stack Development",
      icon: <Code size={24} className="text-purple-400" />,
      description: "React, TypeScript, Node.js, Firebase, and modern web technologies",
      color: "from-purple-500 to-indigo-400"
    },
    {
      title: "Cloud Computing",
      icon: <Cloud size={24} className="text-green-400" />,
      description: "Azure, Google Cloud, AWS, infrastructure management and DevOps",
      color: "from-green-500 to-teal-400"
    },
    {
      title: "Data Science",
      icon: <Coffee size={24} className="text-pink-400" />,
      description: "Data analysis, visualization, and building insights from complex datasets",
      color: "from-pink-500 to-rose-400"
    }
  ];

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

  // Particle animation for background
  const Particles = () => {
    const particleCount = 20;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.floor(Math.random() * 4) + 1;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const animationDuration = `${Math.random() * 20 + 10}s`;
      const delay = `${Math.random() * 5}s`;
      const opacity = Math.random() * 0.5 + 0.1;
      
      particles.push(
        <div 
          key={i}
          className="absolute rounded-full bg-purple-400"
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

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Dynamic background with particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020B2D]/90 via-[#0A1A3D]/90 to-[#020B2D]/90" />
        <Particles />
      </div>

      {/* Glowing orbs for visual effect */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`text-5xl font-serif mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

<div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <div className="space-y-6">
    <div className="flex items-center space-x-4 mb-6">
      <Coffee size={24} className="text-blue-400" />
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        AI Engineer & Data Scientist
      </h3>
    </div>
    <p className="text-lg text-gray-300 leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg border border-white/5">
      I am a passionate computer science professional specializing in artificial intelligence and automation solutions. With a B.Tech in Computer Science from Parul University, I focus on creating AI-powered applications that streamline workflows and enhance productivity.
    </p>
    <p className="text-lg text-gray-300 leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg border border-white/5">
      My expertise spans machine learning, cloud technologies, and modern development frameworks, allowing me to efficiently tackle complex problems with innovative approaches across RAG architecture, LLMs, and semantic search technologies.
    </p>
            <div className="flex flex-wrap gap-4 pt-6">

              <a 
                href="#contacts" 
                className="px-6 py-3 border border-blue-600 hover:bg-blue-600/20 rounded-full transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg shadow-blue-600/10"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="aspect-square rounded-2xl overflow-hidden relative backdrop-blur-sm bg-black/20 border border-white/10">
              <img
                src={image}
                alt="Soham Soni"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D] via-transparent to-transparent" />
              
              {/* Interactive overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 to-purple-800/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500" />
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mt-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-semibold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm bg-black/20 rounded-xl overflow-hidden border border-white/10 p-6 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                
                <div className="flex items-center space-x-3 mb-4">
                  {skill.icon}
                  <h4 className={`text-xl font-medium transition-all duration-500 bg-gradient-to-r ${skill.color} bg-clip-text ${hoveredSkill === index ? 'text-transparent' : 'text-white'}`}>
                    {skill.title}
                  </h4>
                </div>
                
                <p className="text-gray-300 pl-9">
                  {skill.description}
                </p>
                
                <div className={`w-0 h-0.5 bg-gradient-to-r ${skill.color} transition-all duration-500 mt-4 ${hoveredSkill === index ? 'w-full' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS keyframes for floating animation */}
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
      `}</style>
    </section>
  );
};

export default About;