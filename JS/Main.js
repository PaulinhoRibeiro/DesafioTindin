// Rotação da seta
function toggleArrow() {
  var arrow = document.getElementById("seta");
  var currentRotation = arrow.style.transform;

  var rotation = currentRotation.replace(/[^0-9]/g, "") || "0";

  if (rotation === "0") {
    arrow.style.transform = "rotate(180deg)";
  } else {
    arrow.style.transform = "rotate(0deg)";
  }

  listaV();
}

// Função para alternar a visibilidade do menu
function listaV() {
  var navbarmenufechado = document.getElementById("navbar-menufechado");

  if (
    navbarmenufechado.style.display === "none" ||
    navbarmenufechado.style.display === ""
  ) {
    navbarmenufechado.style.display = "block";
  } else {
    navbarmenufechado.style.display = "none";
  }
}

// Função para exibir o menu de sair
function showMenu() {
  document.getElementById("menu-sair").style.display = "block";
}

// Função para esconder o menu de sair
function hideMenu() {
  document.getElementById("menu-sair").style.display = "none";
}

// Função para alternar o tamanho do menu de sair e a imagem do ícone de expansão
function toggleExpandMenu() {
  var menu = document.getElementById("menu-sair");
  var expandIcon = document.getElementById("expand-icon");

  // Alterna a classe 'expanded' e a imagem do ícone
  if (menu.classList.contains("expanded")) {
    menu.classList.remove("expanded");
    expandIcon.src = "./IMG/Sinais/Rectangle 12.png"; // Imagem para expandir
    showElements(); // Mostra os elementos ao minimizar
  } else {
    menu.classList.add("expanded");
    expandIcon.src = "./IMG/Sinais/Rectangle 13.png"; // Imagem para minimizar
    hideElements(); // Esconde os elementos ao expandir
  }
}

// Função para esconder os elementos específicos
function hideElements() {
  document.querySelector(".navbar-arrow").style.display = "none";
  document.querySelector(".seta-item").style.display = "none";
  document.querySelector(".seta2-item").style.display = "none";
}

// Função para mostrar os elementos específicos
function showElements() {
  document.querySelector(".navbar-arrow").style.display = "block";
  document.querySelector(".seta-item").style.display = "block";
  document.querySelector(".seta2-item").style.display = "block";
}

// Adiciona listeners para o slider de imagens
document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".slides-container");
  const slides = document.querySelector(".slides");
  const slideWidth = slides.children[0].getBoundingClientRect().width;
  let scrollAmount = 0;

  document.querySelector(".next").addEventListener("click", function () {
    const maxScroll = slides.scrollWidth - slidesContainer.clientWidth;
    scrollAmount += slideWidth;
    if (scrollAmount > maxScroll) {
      scrollAmount = maxScroll;
    }
    slides.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  document.querySelector(".prev").addEventListener("click", function () {
    scrollAmount -= slideWidth;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    slides.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  document
    .getElementById("expand-btn")
    .addEventListener("click", toggleExpandMenu);
});
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu-sair");
  const toggleButton = document.getElementById("menu-toggle");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("expanded");
  });
});
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    document.querySelector(".geral").style.display = "flex";
    document.getElementById("login-screen").style.display = "none";
    document.querySelector(".menu-sair h2").innerText = "Olá, " + username;
  });

function showModal() {
  document.getElementById("search-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("search-modal").style.display = "none";
}

function executeSearch() {
  var query = document.getElementById("search-input").value;
  // Aqui você pode implementar a lógica de pesquisa
  console.log("Pesquisando por:", query);
  closeModal(); // Fecha o modal após a pesquisa
}

// Modifique a função de pesquisar no footer para abrir o modal
function pesquisar() {
  showModal();
}
let isModalMinimized = false;

function minimizeMaximizeModal() {
  const modalContent = document.querySelector(".modal-content");
  if (isModalMinimized) {
    modalContent.style.display = "block"; // Mostrar o conteúdo
  } else {
    modalContent.style.display = "none"; // Ocultar o conteúdo
  }
  isModalMinimized = !isModalMinimized; // Alternar estado
}
// Função que será chamada ao clicar nos botões
function manipularTela(direcao) {
  if (direcao === "avancar") {
    // lógica para avançar
  } else if (direcao === "voltar") {
    // lógica para voltar
  }
}
