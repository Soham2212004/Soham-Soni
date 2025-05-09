import React, { useState } from 'react';
import { Code, Brain, Cloud, Smartphone, Award, Wrench, X } from 'lucide-react';

const Skills = ({ setSelectedItem }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);
  
  // Skill categories with their icons and items
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Dart (Flutter)", icon: "📱" },
        { name: "JavaScript", icon: "🌐" },
        { name: "SQL", icon: "🗄️" },
        { name: "C/C++", icon: "⚙️" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: <Brain className="text-purple-400" size={24} />,
      skills: [
        { name: "TensorFlow & PyTorch", icon: "🧠" },
        { name: "Data Visualization", icon: "📊" },
        { name: "MLOps", icon: "🔄" },
        { name: "Computer Vision", icon: "👁️" },
        { name: "NLP & LLMs", icon: "💬" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-cyan-400" size={24} />,
      skills: [
        { name: "Microsoft Azure", icon: "☁️" },
        { name: "Google Cloud", icon: "🌩️" },
        { name: "DevOps", icon: "🔄" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Microservices", icon: "🧩" }
      ]
    },
    {
      title: "Mobile & Web",
      icon: <Smartphone className="text-green-400" size={24} />,
      skills: [
        { name: "Flutter & Firebase", icon: "🔥" },
        { name: "React & TypeScript", icon: "⚛️" },
        { name: "Responsive Design", icon: "📱" },
        { name: "RESTful APIs", icon: "🔌" },
        { name: "Git & GitHub", icon: "🐙" }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-yellow-400" size={24} />,
      skills: [
        { name: "n8n", icon: "🔄" },
        { name: "Cursor AI", icon: "🖱️" },
        { name: "Claude", icon: "🤖" },
        { name: "Lovable", icon: "❤️" },
        { name: "Bolt", icon: "⚡" },
        { name: "Replit", icon: "💻" }
      ]
    }
  ];

  // Updated Certificate data with Google Drive links
  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      issuer: "Oracle",
      date: "2024",
      description: "Certified professional in Oracle Cloud Infrastructure Generative AI.",
      icon: <Award size={24} className="text-blue-400" />,
      link: "https://drive.google.com/file/d/1g4BM0Lvf8v0vfNZ757EbCIevJihgMXZr/view?usp=drive_link"
    },
    {
      title: "Basics of ABAP Programming",
      issuer: "SAP",
      date: "2023",
      description: "Foundational knowledge in ABAP programming for SAP systems.",
      icon: <Award size={24} className="text-purple-400" />,
      link: "https://drive.google.com/file/d/1T-rOb0AF2OjE-SYR4ZYt7QWiItjo04gJ/view?usp=sharing"
    },
    {
      title: "Google Cloud Study Jams",
      issuer: "JIS University, Kolkata",
      date: "2023",
      description: "Participation and completion of Google Cloud training program.",
      icon: <Award size={24} className="text-cyan-400" />,
      link: "https://drive.google.com/file/d/16AZsqZAUBkzB9H2klKDzNI0uAE2SoIUK/view?usp=sharing"
    },
    {
      title: "Advanced Machine Learning Training",
      issuer: "Edunet Foundation",
      date: "2023",
      description: "Specialized training in advanced machine learning techniques.",
      icon: <Award size={24} className="text-green-400" />,
      link: "https://drive.google.com/file/d/1WBAepr8ZEfsgqEvWzPdujEGv9qLlCsKH/view?usp=drive_link"
    },
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL",
      date: "2022",
      description: "Comprehensive training in data analytics using Python.",
      icon: <Award size={24} className="text-yellow-400" />,
      link: "https://drive.google.com/file/d/1SGSTy7Kqz1a7fV1tX4tNd9hKYmSjk-Vy/view?usp=sharing"
    },
    {
      title: "AI/ML Hackathon Participation",
      issuer: "myOnsite Healthcare",
      date: "2022",
      description: "Active participation in AI/ML-focused hackathon.",
      icon: <Award size={24} className="text-pink-400" />,
      link: "https://drive.google.com/file/d/1BPi6JuGA0yost7_m5XbE0Ecq2UPPn5aF/view?usp=sharing"
    }
  ];

  // Function to convert Google Drive link to embed link
  const getEmbedLink = (driveLink) => {
    // Extract the file ID from the Google Drive link
    const fileIdMatch = driveLink.match(/\/d\/(.+?)\/view/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return driveLink; // Return original if not matching pattern
  };

  const handleCertificateClick = (cert) => {
    setCurrentCertificate({
      ...cert,
      embedLink: getEmbedLink(cert.link)
    });
    setShowCertificate(true);
  };

  const closeCertificateModal = () => {
    setShowCertificate(false);
    setCurrentCertificate(null);
  };

  return (
    <section id="skills" className="min-h-screen py-20 relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-serif mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${getCardGradient(index)} rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-2 cursor-pointer border border-white/10 backdrop-blur-sm`}
              onMouseEnter={() => {
                setHoverIndex(index);
                setActiveCategory(index);
              }}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className={`flex items-center text-xl font-semibold mb-6 text-white transition-all duration-500 ${hoverIndex === index ? 'scale-110' : ''}`}>
                <div className="p-3 bg-white/10 rounded-lg mr-3 backdrop-blur-sm">
                  {category.icon}
                </div>
                <span>{category.title}</span>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`flex items-center px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 ${activeCategory === index ? 'text-white' : 'text-white/70'}`}
                  >
                    <span className={`mr-3 ${getIconColor(index)}`}>{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-serif mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl p-6 transform hover:scale-105 transition-all duration-500 cursor-pointer border border-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20"
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                    <p className="text-sm text-blue-400 mb-2">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 mb-2">{cert.date}</p>
                    <p className="text-sm text-gray-300">{cert.description}</p>
                    <div className="mt-3 text-xs text-blue-300 flex items-center">
                      <span>View Certificate</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && currentCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-blue-900/90 to-indigo-900/90 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden border border-white/20 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  {currentCertificate.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{currentCertificate.title}</h3>
                  <p className="text-sm text-blue-300">{currentCertificate.issuer} • {currentCertificate.date}</p>
                </div>
              </div>
              <button 
                onClick={closeCertificateModal}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            <div className="h-[70vh] w-full bg-black/20">
              <iframe 
                src={currentCertificate.embedLink} 
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

// Helper functions for styling
function getCardGradient(index) {
  const gradients = [
    "from-blue-900/70 to-blue-700/50",
    "from-purple-900/70 to-purple-700/50",
    "from-cyan-900/70 to-cyan-700/50",
    "from-green-900/70 to-green-700/50",
    "from-yellow-900/70 to-yellow-700/50"
  ];
  return gradients[index % gradients.length];
}

function getIconColor(index) {
  const colors = [
    "text-blue-400",
    "text-purple-400",
    "text-cyan-400",
    "text-green-400",
    "text-yellow-400"
  ];
  return colors[index % colors.length];
}

export default Skills;