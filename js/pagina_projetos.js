h1Title = document.querySelector("#h1Title")
description = document.querySelector("#description")
details = document.querySelector("#details")
detailsDesign = document.querySelector("#detailsDesign")
date = document.querySelector("#date")
links = document.querySelector("#links")

function renderimg(projeto) {
    return `
    <div class="slider-single">
      <img
        class="slider-single-image"
        src="${projeto.imagem1}"
        alt="1"
      />
      <h1 class="slider-single-title">${projeto.descricaoimg1}</h1>
      <a class="slider-single-likes" href="javascript:void(0);">
        <i class="fa fa-heart"></i>
        <p>1,247</p>
      </a>
    </div>
    
    <div class="slider-single">
      <img
        class="slider-single-image"
        src="${projeto.imagem2}"
        alt="1"
      />
      <h1 class="slider-single-title">${projeto.descricaoimg2}</h1>
      <a class="slider-single-likes" href="javascript:void(0);">
        <i class="fa fa-heart"></i>
        <p>1,247</p>
      </a>
    </div>
    
    <div class="slider-single">
      <img
        class="slider-single-image"
        src="${projeto.imagem3}"
        alt="1"
      />
      <h1 class="slider-single-title">${projeto.descricaoimg3}</h1>
      <a class="slider-single-likes" href="javascript:void(0);">
        <i class="fa fa-heart"></i>
        <p>1,247</p>
      </a>
    </div>
    
    <div class="slider-single">
      <img
        class="slider-single-image"
        src="${projeto.imagem4}"
        alt="1"
      />
      <h1 class="slider-single-title">${projeto.descricaoimg4}</h1>
      <a class="slider-single-likes" href="javascript:void(0);">
        <i class="fa fa-heart"></i>
        <p>1,247</p>
      </a>
    </div>
    
    <div class="slider-single">
      <img
        class="slider-single-image"
        src="${projeto.imagem5}"
        alt="1"
      />
      <h1 class="slider-single-title">${projeto.descricaoimg5}</h1>
      <a class="slider-single-likes" href="javascript:void(0);">
        <i class="fa fa-heart"></i>
        <p>1,247</p>
      </a>
    </div>
    
    <div class="slider-single">
      <img
        class="slider-single-image"
        src="${projeto.imagem6}"
        alt="1"
      />
      <h1 class="slider-single-title">${projeto.descricaoimg6}</h1>
      <a class="slider-single-likes" href="javascript:void(0);">
        <i class="fa fa-heart"></i>
        <p>1,247</p>
      </a>
    </div>`   
    }



window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch('json/Projetos.JSON')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro HTTP! status: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const projeto = data.projetos.find(proj => proj.id == id);
        if (projeto) {
            let evento = new Event('conteudoAdicionado');
            let render = renderimg(projeto)

            h1Title.innerText = projeto.titulo
            description.innerText = projeto.descricao
            details.innerText = projeto.detalhesTecnicos
            detailsDesign.innerText = projeto.ProcessoDoDesign
            date.innerText = projeto.DataDeProdução
            links.innerText = projeto.LinksDoProjeto

            div = document.createElement("div");
            div.className = "slider-content";            
            div.innerHTML = renderimg(projeto);


            document.querySelector("#sliderContainer").appendChild(div)

            document.querySelector("#sliderContainer").dispatchEvent(evento);
        } else {
            console.error('Projeto não encontrado!');
        }
    })
    .catch(error => console.error(error));
}
