import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Work from './Work';
import Skills from './Skills';
import Contacts from './Contacts';
import ChatBot from './Chatbot';
import image from './logo2.jpg';
import '@n8n/chat/style.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Handle scrolling to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#020B2D] text-white min-h-screen">
      <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-1 flex items-center justify-end">
              <div className="hidden md:flex space-x-12">
                {['home', 'about', 'projects'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-white/70 hover:text-white transition-colors duration-200 uppercase text-sm tracking-wider ${
                      activeSection === item ? 'text-white' : ''
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            {/* New Logo Section */}
            <div className="flex items-center justify-center mx-14 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="logo-container relative h-16 w-auto flex items-center justify-center">
                <div className="logo-hexagon"></div>
                <div className="logo-hexagon-inner"></div>
                <div className="logo-hexagon-glow"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <div className="flex items-center space-x-1">
                    <Code size={16} className="text-orange-400" />
                    <span className="logo-text-first font-bold text-lg bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">S</span>
                    <span className="logo-text-last font-bold text-lg bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">S</span>
                    <Code size={16} className="text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-start">
              <div className="hidden md:flex space-x-12">
                {['work', 'skills', 'contacts'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-white/70 hover:text-white transition-colors duration-200 uppercase text-sm tracking-wider ${
                      activeSection === item ? 'text-white' : ''
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/70 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-[#020B2D]/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'work', 'skills', 'contacts'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-white/70 hover:text-white uppercase text-sm tracking-wider"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <Home />
      <About image={image} />
      <Projects />
      <Work setSelectedItem={setSelectedItem} />
      <Skills setSelectedItem={setSelectedItem} />
      <Contacts />

      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>© 2025 Soham Soni. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Dialog.Root open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0A1A3D] rounded-2xl w-[90vw] max-w-4xl max-h-[85vh] overflow-hidden z-[70] shadow-2xl">
            <div className="flex justify-between items-start p-6 border-b border-white/10">
              <h3 className="text-2xl font-semibold text-white">{selectedItem?.title || selectedItem?.company}</h3>
              <Dialog.Close className="text-white hover:text-white/80">
                <X size={24} />
              </Dialog.Close>
            </div>
            <div className="p-1 h-[70vh]">
              <iframe
                src={selectedItem?.driveLink}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      
      {/* Integrate the ChatBot component */}
      <ChatBot isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />

      <style jsx global>{`
        /* Logo animations and styling */
        .logo-container {
          perspective: 1000px;
          transition: transform 0.3s ease;
        }
        
        .logo-container:hover {
          transform: scale(1.05);
        }
        
        .logo-hexagon {
          position: absolute;
          width: 56px;
          height: 48px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2));
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transform-style: preserve-3d;
          transform: rotateY(0deg);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
          z-index: 10;
        }
        
        .logo-hexagon-inner {
          position: absolute;
          width: 48px;
          height: 42px;
          background: linear-gradient(135deg, rgba(6, 13, 45, 0.95), rgba(7, 32, 81, 0.95));
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          z-index: 15;
        }
        
        .logo-hexagon-glow {
          position: absolute;
          width: 64px;
          height: 56px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
          filter: blur(8px);
          opacity: 0.7;
          animation: pulse-glow 3s infinite ease-in-out;
          z-index: 5;
        }
        
        .logo-container:hover .logo-hexagon {
          transform: rotateY(180deg);
          box-shadow: 0 0 25px rgba(99, 102, 241, 0.5);
        }
        
        .logo-text-first, .logo-text-last {
          font-size: 24px;
          font-weight: 700;
          transition: transform 0.3s ease;
        }
        
        .logo-container:hover .logo-text-first {
          transform: translateY(-2px);
        }
        
        .logo-container:hover .logo-text-last {
          transform: translateY(2px);
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

export default App;