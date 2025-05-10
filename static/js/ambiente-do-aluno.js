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

  const params = new URLSearchParams(window.location.search)
  const aula =  params.get("aula")
  const titulo =  params.get("titulo")
  const descricao =  params.get("descricao")
  const link_material =  params.get("link_material")

  var title = document.querySelector(".infos h2")
  var description = document.querySelector(".infos p")
  var material_link = document.querySelector(".complement a")

  title.textContent = `${titulo}`
  description.textContent = `${descricao}`
  material_link.src = `${link_material}`



  const embedUrl = convertToEmbedLink(aula);

  const iframe = document.querySelector("iframe")

  iframe.src = String(embedUrl)


  window.history.replaceState({}, document.title, window.location.pathname)
   // https://www.youtube.com/embed/DglM5TELu0k
