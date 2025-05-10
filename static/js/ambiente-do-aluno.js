function convertToEmbedLink(youtubeUrl) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/;
    const match = youtubeUrl.match(regex);
  
    if (match && match[1]) {
      const videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      return null; // URL inválida
    }
  }
  
  // Exemplo de uso
  const link = document.querySelector("ul li a")
  const url = link.getAttribute("aria-label")
  const embedUrl = convertToEmbedLink(url);
  
  const iframe = document.querySelector("iframe")

  iframe.src = String(embedUrl)

  link.href = `/aulas/1?${embedUrl}`



  console.log(embedUrl); // https://www.youtube.com/embed/DglM5TELu0k