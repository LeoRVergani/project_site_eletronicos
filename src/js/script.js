function trocarImagem() {
    const imagem = document.getElementById("banner");

    if      (window.innerWidth < 375) { imagem.src = "./src/img/banner320.png";} 
    else if (window.innerWidth < 640) { imagem.src = "./src/img/banner320.png";} 
    else if (window.innerWidth < 768) { imagem.src = "./src/img/banner600.png";} 
    else if (window.innerWidth < 1024) { imagem.src = "./src/img/banner-tablet-800.png";} 
    else if (window.innerWidth < 1535){ imagem.src = "./src/img/banner-desktop-1024.png";}
    else { imagem.src = "./src/img/banner-desktop.png";}
}
    window.addEventListener("load", trocarImagem);
    window.addEventListener("resize", trocarImagem);
