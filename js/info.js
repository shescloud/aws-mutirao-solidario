// Dados dos palestrantes
const speakersData = {
    'ajuda': {
      name: 'AWS MUTIRÃO TECH SOLIDÁRIO',
      info: 'O Rio Grande do Sul está enfrentando um momento crítico devido às recentes e devastadoras inundações. Contamos com a sua solidariedade e apoio neste momento difícil. Por favor, considere fazer uma doação de qualquer valor escaneando o QR Code ao lado. Sua contribuição é vital para auxiliar as vítimas dessa tragédia. A sua ajuda fará muita diferença!',
      image: "images/frame.png",
      title: "AWS User Groups Brasil",    
      icon: '',  
      link: 'https://www.vakinha.com.br/vaquinha/a-maior-campanha-solidaria-do-rs'
    },  


  };
  
  // Função para abrir o popup com informações do palestrante
  function openPopup(speakerId) {
    const speaker = speakersData[speakerId];
    if (speaker) {
        document.getElementById("speakerName").textContent = speaker.name;
    document.getElementById("speakerTitle").textContent = speaker.title; 
    document.getElementById("speakerInfo").textContent = speaker.info;
    document.getElementById("speakerImage").src = speaker.image;
      
     
     const speakerIcon = document.getElementById("speakerIcon");
     const iconClass = speaker.icon.startsWith("fa-") ? `fas ${speaker.icon}` : speaker.icon;
     speakerIcon.className = iconClass;

    document.getElementById("speakerPopup").style.display = "block";
    document.getElementById("popupBackground").style.display = "block";
    }
}

  
  // Função para fechar o popup
  function closePopup() {
    document.getElementById("speakerPopup").style.display = "none";
    document.getElementById("popupBackground").style.display = "none"; // Esconde o fundo escuro com transparência
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.close').addEventListener('click', closePopup);
  
    
    window.addEventListener('click', function(event) {
      let popup = document.getElementById("speakerPopup");
      let overlay = document.getElementById("popupBackground");
      if (event.target === overlay) {
        closePopup();
      }
    });
  });
  