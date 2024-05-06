// Dados dos palestrantes
const speakersData = {
    'keynote': {
      name: 'Claudia Charro',
      info: 'Claudia Charro é formada em Pedagogia e Sistemas de Informação pela USP e atualmente é Technology Strategist na Microsoft. Está desde 2001 na área de tecnologia atuou como desenvolvedora, analista de sistemas, arquiteta e em 2015 transicionou para Cloud Computing como instrutora técnica e arquiteta de soluções na Amazon Web Services.Claudia foi uma das fundadoras do projeto TheFemTech e atualmente coordena as mentorias de carreira em grupo e ações de preparação promovidas pela Microsoft. Seu sonho é impactar a vida das pessoas através da tecnologia e promover ambientes saudáveis e de alta performance para qualquer pessoa que deseje ter uma carreira na tecnologia.',
      image: "images/speakers/charro.jpeg",
      title: 'Estrategista Técnica na Microsoft',      
      icon: '',
    },
    'keynote2': {
      name: 'Yara Mascarenhas',
      info: 'Formada em Ciências da Computação pelo ICMC / USP - em São Carlos - Yara é co-fundadora da Globalcode e CEO do The Developers Conference (TDC), maior evento de profissionais de tecnologia da América Latina! Atua diariamente com as maiores empresas do setor para a co-criação de estratégias que gerem resultados através de interações - digitais e presenciais - com profissionais de tecnologia.A mais de uma década colabora com a gestão de comunidades e ecossistemas de inovação aberta!   Recentemente criou a ARENA Eventos Digitais, com objetivo de apoiar a transformação dos eventos presenciais aproveitando todo o potencial de geração de valor dos eventos online.',
      image: "images/speakers/yara.jpeg",
      title: "CEO at TDC The Developer's Conference",    
      icon: '',  
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
  