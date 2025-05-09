import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards, Autoplay } from 'swiper/modules';
import { Brain, Globe, Lock, Cloud, Bot, Github, ExternalLink, Code, Eye, X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: '01',
      title: 'AI-Agents',
      subtitle: 'AI Automation',
      description: 'Suite of intelligent AI agents (HireLens_AI, DeskStock_AI, PyDrift_AI) for automating HR screening, inventory management, and Python development workflows.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
      icon: <Bot size={24} />,
      githubLink: 'https://github.com/Soham2212004/AI-Agents.git',
      color: 'from-blue-500 to-purple-600',
      fullDescription: `
**AI-Agents**
A collection of powerful AI-powered automation agents built to streamline various business processes.

**🤖 Overview**
This repository contains a suite of specialized AI agents designed to automate and enhance different business workflows. Each agent leverages state-of-the-art AI capabilities to provide intelligent solutions for specific domains.

**🛠️ Available Agents**

**1. HireLens_AI**
An advanced resume screening agent that automates the candidate selection process. Built using n8n workflows and Gemini AI.
**Key Features:**
* Automatically fetches job descriptions and resumes from OneDrive folders
* Extracts text from PDF documents
* Compares resume content against job descriptions
* Provides matching scores (1-100%) based on skills, experience, projects, location, education
* Extracts applicant name and email for easy communication
* Includes detailed explanations for each score
* Processes multiple resumes in batch with individual assessments
**Use Case:** Perfect for HR teams and recruiters looking to streamline the initial resume screening process.

**2. DeskStock_AI**
An intelligent inventory management assistant that operates directly with your spreadsheet data.
**Key Features:**
* Manages store inventory through natural language commands
* Adds new products to inventory
* Modifies product quantities
* Removes products from inventory
* Identifies products with low stock levels
* Answers inventory-related queries in conversational language
* Updates Excel sheets automatically
**Use Case:** Ideal for retail stores, warehouses, or any business that needs to maintain product inventory without manual spreadsheet management.

**3. PyDrift_AI**
A developer assistant that keeps you updated with the latest Python documentation and version changes.
**Key Features:**
* Fetches comprehensive details from the latest Python documentation
* Answers questions about Python features, syntax, and updates
* Eliminates the need to manually search through documentation
* Provides version-specific information for updating Python projects
* Delivers answers in plain language
**Use Case:** Essential for Python developers who need quick access to language documentation and version migration assistance.

**🔜 Coming Soon**
More specialized AI agents are under development! Stay tuned for additional tools that will help automate and enhance your business processes.

**🚀 Getting Started**
Each agent has its own setup instructions and requirements. Please navigate to the specific agent folder for detailed documentation.
      `
    },
    {
      id: '02',
      title: 'AI Multitasker',
      subtitle: 'Mobile App',
      description: 'AI-powered mobile assistant using Flutter, Gemini API, and Firebase Authentication for task automation and voice commands.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
      icon: <Brain size={24} />,
      githubLink: 'https://github.com/Soham2212004/AI-Multitasker.git',
      color: 'from-cyan-500 to-blue-600',
      fullDescription: `
**Overview**
The **AI Multitasker App** is a Flutter application designed to integrate various AI functionalities into a single platform. The app features a set of tools that uses Gemini API and all accessible through a user-friendly interface.

**App Features**
1. **AI Chat Bot** A simple chatbot that can answer a wide range of questions.
2. **AI Code Explainer** Insert code, and the AI will detect the language, explain the code, complete it, and provide the output. A history feature allows users to revisit previous sessions.
3. **AI Recipe Generator** Enter ingredients, and the AI will generate recipes in any language you choose.
4. **AI Study Buddy** Input the subject name, and it will generate a set of questions with answers in PDF format.
5. **AI Interview Coach** Generate interview questions based on your job role and preferences.
6. **AI Text Summarizer** Summarizes the provided input text concisely.
7. **AI Story Teller** Enter a genre, and the AI will create and narrate a story for you.
8. **AI Book Recommendation** Recommends books based on the selected genre.
9. **AI Music Recommendation** Suggests music according to your mood.
10. **AI Finance Planner** Provides a personalized finance plan based on user input.
11. **AI Language Translator** Translates text into your preferred language.
12. **AI Travel Planner** Creates a day-by-day travel itinerary in your language and generates a PDF.
13. **AI Assignment Writer** Takes questions as input and generates long or short-form answers in PDF format.
14. **AI Workout Coach** Generates a full workout plan for you in PDF format based on your input.
15. **AI Question Generator** Generates questions and accepts images as input.
16. **AI Image Generator** Generates images based on the entered prompt using the **Stability API**.
17. **AI Diet Planner** Creates a customized diet plan in PDF format based on your input.
18. **AI Resume Builder** Creates a customized Resume in PDF format based on your input.
19. **Text Extractor** Extractes a text from the image and copied to clipboard.

**Usage**
Each app within the AI Multitasker App is designed for ease of use. Simply provide the necessary input, and the AI will handle the rest, whether it's generating content, translating text, or creating personalized plans in PDF format.
      `
    },
    {
      id: '03',
      title: 'Accident Detection',
      subtitle: 'ML System',
      description: 'Real-time accident detection using CNN and computer vision with emergency alert system integration.',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800',
      icon: <Globe size={24} />,
      githubLink: 'https://github.com/Soham2212004/Road-Accident-Detection-Alert-System.git',
      color: 'from-red-500 to-amber-600',
      fullDescription: `
**Road Accident Detection & Alert System**

**Overview**
**The Road Accident Detection & Alert System is a project designed to detect accidents on roads, trigger alerts, capture accident details, and enable emergency response. It utilizes computer vision, audio alerts, and communication technologies to improve response times and assist in emergency situations.**

**Features**
**Accident Detection: Utilizes computer vision algorithms to detect accidents based on visual cues.**
**Alert System: Triggers an alert sound upon detecting an accident to notify nearby individuals.**
**Screenshot Capture: Captures a screenshot of the accident scene along with date and time for documentation.**
**Emergency Response: Allows authorized personnel to initiate emergency medical services by calling an ambulance.**

**Technologies Used**
**Computer Vision: OpenCV for image processing and object detection.**
**Audio Alert: Integration with sound libraries for alert notifications.**
**Communication: Integration with twilio for emergency response.**
**Documentation: GitHub for version control and project sharing.**

**Getting Started**
**To use the Road Accident Detection & Alert System, follow these steps:**
**Clone the repository to your local machine.**
**Install the necessary dependencies listed in the requirements file.**
**Configure the system settings and authorized personnel details.**
**Run the main application script to start monitoring for accidents.**
**In case of an accident, follow the on-screen instructions for emergency response actions.**

**Usage**
**The system is designed for use in surveillance and monitoring scenarios where quick detection and response to accidents are crucial. It can be deployed in traffic management systems, surveillance cameras, and other relevant environments.**
      `
    },
    {
      id: '04',
      title: 'Investment Calculator',
      subtitle: 'Flutter App',
      description: 'Comprehensive financial planning app with SIP, Lumpsum, FD, EMI calculators using Flutter.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      icon: <Lock size={24} />,
      githubLink: 'https://github.com/Soham2212004/Investment-Calculator-App.git',
      color: 'from-emerald-500 to-green-600',
      fullDescription: `
**Overview**
The Investment Calculator app is a comprehensive financial tool designed to help users manage and plan their finances effectively. This app provides a wide range of calculators to cover various aspects of investments, savings, and everyday math needs.

**Key Features**
**SIP Calculator**
Calculate the future value of your Systematic Investment Plan (SIP) based on regular contributions, interest rates, and investment tenure. Visualize the growth of your investments over time with detailed charts and summaries.

**Lumpsum Calculator**
Determine the potential returns on a one-time investment over a specified period. Analyze how different interest rates and time horizons affect your investment growth.

**Savings Calculator**
Plan your savings goals by calculating how much you need to save regularly to reach a specific amount. Compare different saving strategies and their outcomes.

**FD Calculator**
Calculate the maturity amount and interest earned on your Fixed Deposits (FD). Supports different compounding frequencies (monthly, quarterly, half-yearly, yearly).

**EMI Calculator**
Compute Equated Monthly Installments (EMI) for loans based on principal amount, interest rate, and tenure. Provides a detailed breakdown of interest and principal components of each EMI payment.

**GST Calculator**
Easily calculate the Goods and Services Tax (GST) for various goods and services. Supports different GST rates and provides both inclusive and exclusive tax calculations.

**Currency Converter**
Convert amounts between different currencies with real-time exchange rates. Supports a wide range of global currencies for accurate conversions.

**Math Calculators**
**Simple Calculator:**
Perform basic arithmetic operations like addition, subtraction, multiplication, and division.
**Age Calculator:**
Calculate your exact age in years, months, and days based on your birthdate.
**BMI Calculator:**
Determine your Body Mass Index (BMI) using height and weight to assess your health status.
**Percentage Calculator**
Calculate what percentage one number is of another,Determine the percentage change between two numbers,Calculate the percentage value from a given number and percentage.
**Conversion Calculator**
Convert units of length (e.g., meters to feet, inches to centimeters),Convert units of weight (e.g., kilograms to pounds, grams to ounces),Convert units of volume (e.g., liters to gallons, milliliters to fluid ounces).
**GPA Calculator**
Input your grades and credits for different subjects to calculate your GPA for the semester,Calculate your Cumulative GPA over multiple semesters,Supports different grading systems to calculate grade points.
**Simple and Compound Interest (SI/CI) Calculator**
Calculate the interest earned or paid on a principal amount over a period at a fixed interest rate,Compute the interest on an initial principal, which also accumulates interest over time.

**Additional Features**
**User-Friendly Interface: The app is designed with a clean, intuitive interface for easy navigation and use.**
**Detailed Reports: Generate and download detailed reports of your calculations and projections.**
      `
    },
    {
      id: '05',
      title: 'ML Models',
      subtitle: 'Data Science',
      description: 'Collection of machine learning models for various applications including classification, regression, and clustering.',
      image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=800',
      icon: <Brain size={24} />,
      githubLink: 'https://github.com/Soham2212004/Ml_models.git',
      color: 'from-violet-500 to-indigo-600',
      fullDescription: `
**ML Models App**
Welcome to the ML Models App! This Flutter application integrates state-of-the-art machine learning models for real-time emotion and object detection. Built with TensorFlow Lite, the app offers a seamless user experience with live camera feed analysis.

**Features**
**Emotion Detection**
* **Real-time Analysis**: Detects emotions such as happiness, sadness, anger, and more using the live camera feed.
* **Intuitive UI**: Easy-to-use interface displaying the detected emotion in real-time.
* **High Accuracy**: Utilizes a pre-trained TensorFlow Lite model to ensure accurate emotion detection.

**Object Detection**
* **Live Camera Feed**: Identifies various objects through the live camera, providing instant feedback.
* **Multiple Object Recognition**: Capable of detecting multiple objects simultaneously, including items like t-shirts, watches, persons, and more.
* **Efficient Performance**: Optimized for performance to ensure smooth and responsive object detection.

**Getting Started**
**Prerequisites**
* Flutter SDK
* Dart SDK

**Usage**
**Emotion Detection**
* Open the app and navigate to the "Models" section.
* Select "Emotion Detection."
* Point your device's camera towards a face to see real-time emotion detection.

**Object Detection**
* Open the app and navigate to the "Models" section.
* Select "Object Detection."
* Use your device's camera to scan the environment and see detected objects in real-time.
      `
    },
    {
      id: '06',
      title: 'Cloud Automation',
      subtitle: 'DevOps',
      description: 'Azure cloud automation and deployment pipeline optimization for enterprise applications.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
      icon: <Cloud size={24} />,
      githubLink: 'https://github.com/Soham2212004/azure.git',
      color: 'from-pink-500 to-rose-600',
      fullDescription: `
**Cloud Automation**

**Overview**
This project focuses on Azure cloud automation and deployment pipeline optimization for enterprise applications. It includes a set of scripts, templates, and workflows designed to streamline cloud operations and improve deployment efficiency.

**Key Features**
- Automated resource provisioning using Infrastructure as Code (IaC)
- CI/CD pipeline templates for various application types
- Cost optimization scripts and monitoring tools
- Security compliance automation and governance
- Scalable architecture patterns for enterprise workloads

**Technologies Used**
- Azure Resource Manager (ARM) templates
- Terraform for cross-platform infrastructure
- Azure DevOps pipelines
- PowerShell and Azure CLI scripting
- Azure Functions for serverless automation

**Getting Started**
To use these automation tools:
1. Clone the repository
2. Set up your Azure subscription credentials
3. Modify the configuration files for your environment
4. Run the included setup scripts
5. Integrate with your existing CI/CD processes

**Best Practices**
This repository follows cloud engineering best practices including:
- Modular design for reusability
- Comprehensive error handling and logging
- Least-privilege security principles
- Cost-conscious resource management
- Comprehensive documentation
      `
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

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);

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

  // Function to convert markdown-style text to react elements
  const formatDescription = (text: string) => {
    if (!text) return null;
    
    return text.split('\n').map((line, i) => {
      // Handle headers
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h3 key={i} className="text-xl font-bold mt-4 mb-2">{line.replace(/\*\*/g, '')}</h3>;
      }
      // Handle bold text within lines
      if (line.includes('**')) {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={i} className="mb-2">
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j}>{part.replace(/\*\*/g, '')}</strong>;
              }
              return part;
            })}
          </p>
        );
      }
      // Handle bullet points
      if (line.startsWith('* ')) {
        return <li key={i} className="ml-6 mb-1">• {line.substring(2)}</li>;
      }
      // Skip empty lines but add spacing
      if (line.trim() === '') {
        return <div key={i} className="h-2" />;
      }
      // Regular paragraph
      return <p key={i} className="mb-2">{line}</p>;
    });
  };

  // Modal component for project details
  const ProjectModal = ({ project }: { project: any }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <div 
          ref={modalRef}
          className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-xl w-full max-w-3xl max-h-[80vh] overflow-hidden shadow-2xl"
        >
          {/* Header with image */}
          <div className="relative h-56">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-60"
            />
            <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-20`} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
            
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            
            {/* Project title */}
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                  {project.icon}
                </div>
                <div>
                  <h2 className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.title}
                  </h2>
                  <p className="text-white/70">{project.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project details with scrollable content */}
          <div className="p-6 overflow-y-auto max-h-[calc(80vh-14rem)]">
            <div className="prose prose-invert max-w-none">
              {formatDescription(project.fullDescription)}
            </div>
            
            {/* Action buttons */}
            <div className="mt-8 flex space-x-4">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-5 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white font-medium transition-transform duration-300 hover:scale-105`}
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </a>
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex items-center space-x-2 px-5 py-2 rounded-lg bg-white/10 text-white font-medium transition-transform duration-300 hover:scale-105"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Dynamic background with particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-blue-900/10" />
        <Particles />
      </div>

      {/* Glowing orbs for visual effect */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`text-5xl font-serif mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className={`relative px-4 md:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="project-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <div 
                  className="project-card group h-[450px]" 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-full backdrop-blur-sm bg-black/20 rounded-xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/20 transform group-hover:scale-[1.02]">
                    {/* Image background with gradient overlay */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
                    </div>

                    {/* Animated border on hover */}
                    <div className={`absolute inset-0 border-2 rounded-xl transition-all duration-500 ${hoveredIndex === index ? 'border-opacity-100' : 'border-opacity-0'}`} 
                         style={{ borderImage: hoveredIndex === index ? `linear-gradient(to right, ${project.color.replace('from-', '').replace('to-', '')}) 1` : 'none' }} />

                    {/* Content overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white z-10">
                      {/* Project ID and icon */}
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${project.color} text-white transform transition-transform duration-500 group-hover:rotate-12`}>
                          {project.icon}
                        </div>
                        <span className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>{project.id}</span>
                      </div>
                      
                      {/* Project title and subtitle */}
                      <h3 className={`text-xl font-semibold mb-1 transition-all duration-500 ${hoveredIndex === index ? `bg-gradient-to-r ${project.color} bg-clip-text text-transparent` : 'text-white'}`}>
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">{project.subtitle}</p>
                      
                      {/* Project description */}
                      <div className="h-20 overflow-hidden">
                        <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
                      </div>
                      
                      {/* Action buttons */}
                      <div className={`mt-6 flex space-x-3 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white text-sm font-medium transition-transform duration-300 hover:scale-105`}
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                        </a>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium transition-transform duration-300 hover:scale-105 backdrop-blur-sm"
                        >
                          <Eye size={16} />
                          <span>Preview</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation buttons */}
          <div className="swiper-button-prev !w-12 !h-12 !rounded-full !bg-white/10 !backdrop-blur-md after:!text-blue-500 hover:!bg-white/20 transition-colors duration-300"></div>
          <div className="swiper-button-next !w-12 !h-12 !rounded-full !bg-white/10 !backdrop-blur-md after:!text-blue-500 hover:!bg-white/20 transition-colors duration-300"></div>
        </div>

        {/* View All Projects Button */}
        <div className={`mt-12 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://github.com/Soham2212004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20"
          >
            <Code size={18} />
            <span>View All Projects</span>
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && <ProjectModal project={selectedProject}/>}

      {/* Add CSS keyframes for animations */}
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

        .project-swiper :global(.swiper-button-prev), 
        .project-swiper :global(.swiper-button-next) {
          color: #3b82f6;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .project-swiper:hover :global(.swiper-button-prev),
        .project-swiper:hover :global(.swiper-button-next) {
          opacity: 1;
        }
        
        .project-swiper :global(.swiper-button-prev.swiper-button-disabled), 
        .project-swiper :global(.swiper-button-next.swiper-button-disabled) {
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
};

export default Projects;