import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, Send, User, AtSign, MessageSquare, CheckCircle } from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const mailtoLink = `mailto:sonisoham91@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.open(mailtoLink);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

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

  // Social media links with hover effects
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Soham2212004", color: "hover:text-gray-300 hover:border-gray-300" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/sohamsoni220104", color: "hover:text-blue-400 hover:border-blue-400" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1", color: "hover:text-pink-500 hover:border-pink-500" }
  ];

  return (
    <section id="contacts" className="min-h-screen py-20 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-blue-900/10" />
        <Particles />
      </div>

      {/* Glowing orbs for visual effect */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-serif mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             ref={formRef}>
          {/* Left column - Contact info */}
          <div className="space-y-8 backdrop-blur-sm bg-black/10 rounded-xl p-8 border border-white/10 transform transition-all hover:scale-105 duration-500">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <a href="mailto:sonisoham91@gmail.com" 
                 className="contact-link group flex items-center space-x-4 text-gray-300 hover:text-white p-4 rounded-lg transition-colors duration-300 hover:bg-white/5">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/40 transition-colors duration-300 group-hover:scale-110 transform">
                  <Mail size={20} className="text-blue-400 group-hover:text-blue-300" />
                </div>
                <div className="transition-all duration-300 group-hover:translate-x-2">
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-400 group-hover:text-blue-400">sonisoham91@gmail.com</p>
                </div>
              </a>
            </div>
            
            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Follow Me
              </h3>
              
              <div className="flex space-x-5">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          </div>

          {/* Right column - Contact form */}
          <div className="backdrop-blur-sm bg-black/10 rounded-xl p-8 border border-white/10 transform transition-all hover:scale-105 duration-500 relative overflow-hidden">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Send a Message
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'name' || formData.name ? 'text-blue-500' : 'text-gray-400'}`}>
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-black/20 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>
              
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' || formData.email ? 'text-blue-500' : 'text-gray-400'}`}>
                  <AtSign size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-black/20 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>
              
              <div className="relative">
                <div className={`absolute left-4 top-6 transition-all duration-300 ${focusedField === 'message' || formData.message ? 'text-blue-500' : 'text-gray-400'}`}>
                  <MessageSquare size={18} />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-black/20 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full ${
                  submitSuccess ? 'bg-green-600' : isSubmitting ? 'bg-blue-800' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
                } text-white py-4 rounded-lg transition-all duration-500 flex items-center justify-center space-x-2 transform hover:scale-105`}
              >
                {submitSuccess ? (
                  <>
                    <CheckCircle size={20} className="mr-2" />
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
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

export default Contacts;