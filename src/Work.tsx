import React, { useState, useRef, useEffect } from 'react';

interface WorkProps {
  setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
}

interface JobDetails {
  company: string;
  role: string;
  period: string;
  description: string;
  image: string;
  driveLink: string;
  color: string;
  details?: {
    responsibilities: string[];
    skills: string[];
    mentor?: string;
  };
}

const Work: React.FC<WorkProps> = ({ setSelectedItem }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobDetails | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const experience: JobDetails[] = [
    {
      company: "Linde Engineering India",
      role: "Software Development Intern",
      period: "Dec 2024 - Present",
      description: "Working on Azure Cloud automation and full-stack development. Developed Contract Management App using React TypeScript and Firebase Authentication.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      driveLink: "https://drive.google.com/file/d/1yi_J9JXjcUphpQuZ14IEUaYf_pxD2W_Y/preview",
      color: "from-blue-500 to-cyan-400",
      details: {
        responsibilities: [
          "Engineered a sophisticated document Q&A AI agent utilizing RAG architecture, integrating Gemini API with PostgreSQL and Azure Blob Storage",
          "Developed an advanced automation system capable of analyzing entire software projects using LLMs to identify and update outdated dependencies",
          "Implemented OCR automation leveraging Tesseract technology to streamline document processing workflows",
          "Created and optimized ML-based pipelines for improved data processing efficiency",
          "Contributed to the development of a Contract Management System using React, SQLite, and Flask with Firebase Authentication"
        ],
        skills: ["RAG Architecture", "LLMs", "Azure", "React", "Firebase", "PostgreSQL", "Tesseract OCR", "Semantic Search"],
        mentor: "Sweta Mistry, Karan Joshi, and Prerak Patel"
      }
    },
    {
      company: "Uniconverge Technologies",
      role: "Cloud Computing Intern",
      period: "April 2024 - June 2024",
      description: "Worked on Google Cloud & Microsoft Azure infrastructure. Implemented AI model deployment and cloud infrastructure management.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
      driveLink: "https://drive.google.com/file/d/1MjJaN4E_KjXECI7T_jhdT7blHiwrlRCc/preview",
      color: "from-purple-500 to-indigo-400",
      details: {
        responsibilities: [
          "Focused on deploying and configuring AI/ML applications on major cloud platforms, particularly Google Cloud Platform (GCP) and Microsoft Azure",
          "Optimized cloud infrastructure configurations to maximize scalability and cost-efficiency across multiple projects",
          "Assisted in the optimization of machine learning pipelines and automation workflows within cloud environments",
          "Gained valuable experience in Docker containerization, CI/CD implementation, and model integration for production-level deployment",
          "Contributed to the development of scalable cloud-based AI solutions while working in a remote and agile team setting"
        ],
        skills: ["Google Cloud Platform", "Microsoft Azure", "Docker", "CI/CD", "ML Pipelines", "Cloud Infrastructure Optimization"]
      }
    },
    {
      company: "SAP Code Unnati",
      role: "Innovation Marathon Participant",
      period: "Jan 2024 - March 2024",
      description: "Participated in innovation marathon, developing solutions using SAP technologies and cloud platforms.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800",
      driveLink: "https://drive.google.com/file/d/10PwISz-SY6Qk8MJXJ7XLykSgcRCuEaph/preview",
      color: "from-green-500 to-teal-400",
      details: {
        responsibilities: [
          "Completed 6-month intensive training in ML, AI, and IoT technologies",
          "Developed innovative solutions using SAP technologies and cloud platforms",
          "Participated in the SAP Code Unnati Program innovation marathon",
          "Earned certification in Basics of ABAP Programming"
        ],
        skills: ["SAP Technologies", "ABAP Programming", "ML", "AI", "IoT", "Innovation"]
      }
    },
    {
      company: "myOnsite Healthcare",
      role: "AI/ML Hackathon Finalist",
      period: "Nov 2023 - Dec 2023",
      description: "Developed an AI-powered healthcare solution, reaching finals in the hackathon competition.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      driveLink: "https://drive.google.com/file/d/1BPi6JuGA0yost7_m5XbE0Ecq2UPPn5aF/preview",
      color: "from-pink-500 to-rose-400",
      details: {
        responsibilities: [
          "Developed an AI-powered healthcare solution focused on improving patient care",
          "Applied machine learning techniques to healthcare data for innovative outcomes",
          "Presented the solution to a panel of judges and industry experts",
          "Reached the finals in the competitive AI/ML hackathon"
        ],
        skills: ["Healthcare AI", "Machine Learning", "Hackathon", "Problem Solving", "Presentation Skills"]
      }
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  const handleJobClick = (job: JobDetails) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCertificateView = (driveLink: string) => {
    window.open(driveLink, '_blank');
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

  return (
    <section id="work" className="min-h-screen py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Dynamic background with particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-blue-900/10" />
        <Particles />
      </div>

      {/* Glowing orbs for visual effect */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-serif mb-16 text-center transition-all duration-1000">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {experience.map((job, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="backdrop-blur-sm bg-black/20 rounded-xl overflow-hidden border border-white/10">
                <div className="relative h-48">
                  <img
                    src={job.image}
                    alt={job.company}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${job.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                  
                  {/* Animated highlight border on hover */}
                  <div className={`absolute inset-0 border-2 border-transparent rounded-t-xl transition-all duration-500 ${hoveredIndex === index ? `bg-gradient-to-r ${job.color} opacity-30` : 'opacity-0'}`} 
                       style={{ background: hoveredIndex === index ? 'transparent' : '', borderColor: hoveredIndex === index ? 'currentColor' : 'transparent' }} />
                </div>
                
                <div className="p-8 relative">
                  {/* Animated glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${job.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-b-xl`} />
                  
                  <h3 className={`text-2xl font-semibold mb-2 transition-all duration-500 bg-gradient-to-r ${job.color} bg-clip-text ${hoveredIndex === index ? 'text-transparent' : 'text-white'}`}>
                    {job.company}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-400 font-medium">{job.role}</span>
                    <span className="text-gray-400">{job.period}</span>
                  </div>
                  
                  <p className="text-gray-300">{job.description}</p>
                  
                  {/* View More Button */}
                  <div className={`mt-6 flex justify-end transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <button 
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${job.color} text-white text-sm font-medium transition-transform duration-300 hover:scale-105`}
                      onClick={() => handleJobClick(job)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for job details */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div 
            ref={modalRef}
            className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            style={{
              boxShadow: `0 0 40px rgba(0, 0, 0, 0.5), 
                          0 0 20px rgba(${selectedJob.color.includes('blue') ? '59, 130, 246' : 
                                          selectedJob.color.includes('purple') ? '139, 92, 246' : 
                                          selectedJob.color.includes('green') ? '16, 185, 129' : 
                                          '236, 72, 153'}, 0.2)`
            }}
          >
            {/* Modal Header */}
            <div className="relative h-48">
              <img
                src={selectedJob.image}
                alt={selectedJob.company}
                className="w-full h-full object-cover opacity-40"
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${selectedJob.color} opacity-20`} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${selectedJob.color} bg-clip-text text-transparent`}>
                  {selectedJob.company}
                </h2>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-medium text-xl">{selectedJob.role}</span>
                  <span className="text-gray-400">{selectedJob.period}</span>
                </div>
              </div>
              
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                onClick={() => setShowModal(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Overview</h3>
                <p className="text-gray-300">{selectedJob.description}</p>
              </div>
              
              {/* Mentor info if available */}
              {selectedJob.details?.mentor && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">Mentor</h3>
                  <p className="text-gray-300">{selectedJob.details.mentor}</p>
                </div>
              )}
              
              {/* Responsibilities */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Key Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedJob.details?.responsibilities.map((item, index) => (
                    <li key={index} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.details?.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${selectedJob.color} bg-opacity-20 text-white`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Certificate Button */}
              <div className="flex justify-center mt-8">
                <button 
                  className={`px-6 py-3 rounded-lg bg-gradient-to-r ${selectedJob.color} text-white font-medium transition-transform duration-300 hover:scale-105 flex items-center space-x-2`}
                  onClick={() => handleCertificateView(selectedJob.driveLink)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Work;