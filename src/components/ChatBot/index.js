import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
   window.watsonAssistantChatOptions = {
    integrationID: "4140adab-68c7-4dba-931d-65ae511f3c10", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "e5560311-b992-4dd0-bfe8-42f418ffe45a", // The ID of your service instance.
    onLoad: async (instance) => { 
      await instance.render(); 
    
      window.chatInstance = instance;
      
        // Observa o DOM até o iframe do Watson aparecer
        const waitForIframe = setInterval(() => {
          const iframe = document.querySelector("iframe[src*='web-chat']");
          if (iframe) {
            clearInterval(waitForIframe);

            let lastDisplay = iframe.style.display;

            const observer = new MutationObserver(() => {
              const currentDisplay = iframe.style.display;

              if (
                lastDisplay === "none" &&
                currentDisplay !== "none" &&
                instance?.clearSession
              ) {
                // O iframe foi exibido => usuário abriu o chat
                instance.clearSession().then(() => {
                  console.log("Sessão do Watson resetada ao abrir.");
                });
              }

              lastDisplay = currentDisplay;
            });

            observer.observe(iframe, {
              attributes: true,
              attributeFilter: ["style"],
            });
          }
        }, 500);
        
    }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
  }, []);

  return null;
};

export default Chatbot;
