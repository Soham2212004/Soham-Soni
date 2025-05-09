import React, { useEffect, useState } from 'react';

interface ChatBotProps {
  isChatOpen: boolean;
  setIsChatOpen: (isOpen: boolean) => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isChatOpen, setIsChatOpen }) => {
  const [chatLoaded, setChatLoaded] = useState(false);

  // Initialize the n8n chat
  useEffect(() => {
    // Only load chat once
    if (!chatLoaded) {
      import('@n8n/chat').then(({ createChat }) => {
        createChat({
          webhookUrl: 'https://soham-soni.app.n8n.cloud/webhook/ba02ee75-d852-4a09-9293-67cb67b8ebf3/chat',
          mode: 'window',
          showWelcomeScreen: true,
          i18n: {
            en: {
              title: 'Ask Anything About Me',
              subtitle: "I'm Soham's virtual assistant. I can answer any questions about Soham",
              inputPlaceholder: 'Type your question...',
              getStarted: 'New Conversation'
            },
          },
          initialMessages: [
            "Hello! I'm Soham's virtual assistant.",
          ]
        });
        
        setChatLoaded(true);
        
        // Setup DOM elements and event listeners after chat is loaded
        setupChatElements(setIsChatOpen);
      }).catch(err => {
        console.error('Failed to load n8n chat:', err);
      });
    }
  }, [chatLoaded, setIsChatOpen]);

  // Set up custom CSS for chat styling
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Chat theme colors */
      :root {
        --chat--color-primary: #173783;
        --chat--color-primary-shade-50: #132e6d;
        --chat--color-primary-shade-100: #0f2556;
        --chat--color-secondary: #3b71e8;
        --chat--color-secondary-shade-50: #3463cc;
        --chat--color-white: #ffffff;
        --chat--color-light: #f2f4f8;
        --chat--color-light-shade-50: #e6e9f1;
        --chat--color-dark: #020B2D;
        --chat--color-typing: #3b71e8;
        --chat--toggle--background: #3b71e8;
        --chat--toggle--hover--background: #2c5cc6;
        --chat--toggle--active--background: #1e4aaf;
        --chat--toggle--color: var(--chat--color-white);
        --chat--header--background: #020B2D;
        --chat--message--user--background: #3b71e8;
        --chat--window--width: 650px;
        --chat--window--height: 700px;
      }
      
      /* Force center positioning */
      .n8n-chat-wrapper.visible .n8n-chat-window {
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        right: auto !important;
        bottom: auto !important;
        transform: translate(-50%, -50%) !important;
        max-width: 95vw !important;
        max-height: 90vh !important;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 16px !important;
        overflow: hidden !important;
        z-index: 9999 !important;
        transition: opacity 0.3s ease, transform 0.3s ease !important;
      }
      
      /* Chat UI styling */
      .n8n-chat-messages {
        background: #0A1A3D !important;
      }
      
      .n8n-chat-footer {
        background: #0A1A3D !important;
        border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
      }
      
      /* Overlay styling */
      .n8n-chat-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(8px);
        z-index: 998;
        display: none;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .n8n-chat-overlay.visible {
        display: block;
        opacity: 1;
      }
      
      /* Custom tooltip styling */
      #custom-chat-toggle-wrapper {
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: flex;
        align-items: center;
        z-index: 997;
        pointer-events: none;
      }
      
      #custom-chat-toggle-text {
        background: rgba(59, 113, 232, 0.9);
        color: white;
        padding: 12px 18px;
        border-radius: 30px;
        margin-right: 15px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-weight: 500;
        opacity: 0;
        transform: translateX(20px);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        cursor: pointer;
        white-space: nowrap;
        font-size: 16px;
        pointer-events: auto;
      }
      
      #custom-chat-toggle-wrapper.hover #custom-chat-toggle-text {
        opacity: 1;
        transform: translateX(0);
      }
      
      /* Chat toggle button styling */
      .n8n-chat-toggle-button {
        bottom: 30px !important;
        right: 30px !important;
        position: fixed !important;
        z-index: 998 !important;
        height: 60px !important;
        width: 60px !important;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3) !important;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
      }
      
      .n8n-chat-toggle-button:hover {
        transform: scale(1.1) !important;
      }
      
      /* Mobile responsiveness */
      @media (max-width: 768px) {
        :root {
          --chat--window--width: 90vw;
          --chat--window--height: 80vh;
        }
        
        #custom-chat-toggle-text {
          font-size: 14px; 
          padding: 8px 12px;
        }
        
        .n8n-chat-toggle-button {
          height: 50px !important;
          width: 50px !important;
          bottom: 20px !important;
          right: 20px !important;
        }
        
        #custom-chat-toggle-wrapper {
          bottom: 20px;
          right: 20px;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Effect to ensure chat window is properly centered whenever isChatOpen changes
  useEffect(() => {
    if (isChatOpen) {
      const centerChatWindow = () => {
        const chatWindow = document.querySelector('.n8n-chat-window');
        if (chatWindow) {
          chatWindow.style.cssText += `
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            right: auto !important;
            bottom: auto !important;
            transform: translate(-50%, -50%) !important;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
          `;
        }
      };

      // Apply centering multiple times to ensure it works with different timing conditions
      centerChatWindow();
      const timers = [
        setTimeout(centerChatWindow, 100),
        setTimeout(centerChatWindow, 300),
        setTimeout(centerChatWindow, 500)
      ];
      
      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [isChatOpen]);

  // Escape key to close chat
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isChatOpen) {
        const toggleBtn = document.querySelector('.n8n-chat-toggle-button');
        if (toggleBtn) {
          (toggleBtn as HTMLElement).click();
        }
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isChatOpen]);

  return <div id="n8n-chat"></div>;
};

// Function to set up all chat-related DOM elements and event listeners
const setupChatElements = (setIsChatOpen: (isOpen: boolean) => void) => {
  // Create chat container if not exists
  if (!document.getElementById('n8n-chat')) {
    // Create main chat container
    const chatDiv = document.createElement('div');
    chatDiv.id = 'n8n-chat';
    document.body.appendChild(chatDiv);
    
    // Create overlay for background
    const overlayDiv = document.createElement('div');
    overlayDiv.className = 'n8n-chat-overlay';
    document.body.appendChild(overlayDiv);
    
    // Create custom tooltip wrapper and text
    const customToggleWrapper = document.createElement('div');
    customToggleWrapper.id = 'custom-chat-toggle-wrapper';
    document.body.appendChild(customToggleWrapper);
    
    const customToggleText = document.createElement('div');
    customToggleText.id = 'custom-chat-toggle-text';
    customToggleText.textContent = 'Know More About Me';
    customToggleWrapper.appendChild(customToggleText);
    
    // Setup a MutationObserver to watch for chat window visibility changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          const chatWrapper = document.querySelector('.n8n-chat-wrapper');
          
          if (chatWrapper) {
            // Check if the chat is visible
            if (chatWrapper.classList.contains('visible')) {
              overlayDiv.classList.add('visible');
              setIsChatOpen(true);
              
              // Force center the window with a delay to ensure it's applied
              setTimeout(() => {
                const chatWindow = document.querySelector('.n8n-chat-window');
                if (chatWindow) {
                  chatWindow.style.cssText += `
                    position: fixed !important;
                    top: 50% !important;
                    left: 50% !important;
                    transform: translate(-50%, -50%) !important;
                    max-width: 95vw !important;
                    max-height: 90vh !important;
                  `;
                }
              }, 50);
            } else {
              overlayDiv.classList.remove('visible');
              setIsChatOpen(false);
            }
          }
        }
      }
    });
    
    // Start observing the body for changes
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    });
    
    // Set up the tooltip hover functionality with polling to find chat toggle
    const setupToggleButtonHover = () => {
      const findToggleButtonInterval = setInterval(() => {
        const toggleButton = document.querySelector('.n8n-chat-toggle-button');
        
        if (toggleButton) {
          clearInterval(findToggleButtonInterval);
          
          // Handle mouse events for toggle button and tooltip
          toggleButton.addEventListener('mouseenter', () => {
            customToggleWrapper.classList.add('hover');
          });
          
          toggleButton.addEventListener('mouseleave', () => {
            setTimeout(() => {
              if (!customToggleText.matches(':hover')) {
                customToggleWrapper.classList.remove('hover');
              }
            }, 50);
          });
          
          // Handle tooltip hover events
          customToggleText.addEventListener('mouseenter', () => {
            customToggleWrapper.classList.add('hover');
          });
          
          customToggleText.addEventListener('mouseleave', () => {
            setTimeout(() => {
              if (!(toggleButton as Element).matches(':hover')) {
                customToggleWrapper.classList.remove('hover');
              }
            }, 50);
          });
          
          // Make tooltip clickable to open chat
          customToggleText.addEventListener('click', () => {
            (toggleButton as HTMLElement).click();
          });
          
          // Click handlers for toggle button
          toggleButton.addEventListener('click', () => {
            setTimeout(() => {
              const chatWindow = document.querySelector('.n8n-chat-window');
              const chatWrapper = document.querySelector('.n8n-chat-wrapper');
              
              if (chatWindow && chatWrapper && chatWrapper.classList.contains('visible')) {
                // Force center positioning again when chat is opened
                chatWindow.style.cssText += `
                  position: fixed !important;
                  top: 50% !important;
                  left: 50% !important;
                  transform: translate(-50%, -50%) !important;
                `;
                
                overlayDiv.classList.add('visible');
                setIsChatOpen(true);
              } else {
                overlayDiv.classList.remove('visible');
                setIsChatOpen(false);
              }
            }, 100);
          });
        }
      }, 300);
      
      // Clear interval after 10 seconds if button isn't found
      setTimeout(() => clearInterval(findToggleButtonInterval), 10000);
    };
    
    // Start looking for toggle button after a delay
    setTimeout(setupToggleButtonHover, 1000);
    
    // Close chat when clicking on overlay
    overlayDiv.addEventListener('click', () => {
      const toggleBtn = document.querySelector('.n8n-chat-toggle-button');
      if (toggleBtn) {
        (toggleBtn as HTMLElement).click();
      }
    });
  }
};

export default ChatBot;