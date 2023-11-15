function renderProg(projeto, index) {
  return `
   
    <a href="#" id="projeto-${index}-${projeto.id}" class="card">
        <img src="${projeto.imagem}" class="card__image" alt="${projeto.altImagens}" />
        <div class="card__overlay">
          <div class="card__header">

              <img class="card__thumb" src="${projeto.perfil}" alt="${projeto.altPerfil}" />
              <div class="card__header-text">
                  <h3 class="card__title">${projeto.titulo}</h3>
                  
              </div>
          </div>
          <p class="card__description">${projeto.descricaoCurta}</p>
        </div>
      </a>
   
  `;
}

function renderDesign(projeto, index) {
  return `      
          <div class="imgBx">
            <img src="${projeto.imagem}" alt="images">
          </div>
          <div class="details">
            <h2>${projeto.titulo}<br><span>${projeto.descricaoCurta}</span></h2>
          </div>
      
  `;
}

window.addEventListener("DOMContentLoaded", (event) => {
  fetch("json/Projetos.JSON ")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro HTTP! status: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      let div;

      data.projetos.forEach((projeto, index) => {
        if (projeto.categoria === "programacao") {
          let li = document.createElement("li");
          li.innerHTML = renderProg(projeto, index);
          li.querySelector(`.card`).addEventListener("click", function () {
            abrirProjeto(projeto.id);
          });
          document.querySelector("#cardsProg").appendChild(li);
        } else if (projeto.categoria === "design") {
          div = document.createElement("div");
          div.className = "card-polaroide";
          div.id = `projeto-${index}-${projeto.id}`;
          div.innerHTML = renderDesign(projeto, index);

          document.querySelector("#cardsDesign").appendChild(div);
        }
        if (div) {
          div
            
            .addEventListener("click", function () {
              abrirProjeto(projeto.id);
            });
        }
      });
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
});

// bucar projeto
function abrirProjeto(event, id) {
  event.preventDefault();

  // Encontre o projeto com o id dado
  let projeto = data.projetos.find((projeto) => projeto.id === id);

  if (projeto) {
    // Abra o projeto
    window.location.href = projeto.link;
  } else {
    console.error("Projeto não encontrado:", id);
  }
}

function abrirProjeto(id) {
  window.location.href = `projetos_page.html?id=${id}`;
}
