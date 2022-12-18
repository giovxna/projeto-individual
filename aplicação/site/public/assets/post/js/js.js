// evento de clique que faz aparacer o menu quando o usuário clica nas "barrinhas"
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// classList é, basicamente, uma tag de validação, logo, se uma classe existir, ela será inserida, caso não, será removida.
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// evento de clique que faz desaparecer o menu quando o usuário clica no "x"
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// mesma função, só que para os itens de lista do menu. quando o usuário clicar em "home", por exemplo, o menu desaparecerá

// querySelectorAll vai puxar a lista (literalmete o li) de elementos presentes no html
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// faq
const faqItems = document.querySelectorAll(".faq-item");

// toda vez que o usuário clicar no título do faq, o forEach vai entrar para criar um loop juntamente com o evento de "clique" e validar a função do toggleItem
faqItems.forEach((item) => {
  const faqHeader = item.querySelector(".faq-header");

  // evento de clique
  faqHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".faq-open");

    toggleItem(item);

    // validação da função
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

// o toggleItem é que vai fazer a movimentação de descida da div, ele que vai abrir
const toggleItem = (item) => {
  const faqContent = item.querySelector(".faq-content");

  if (item.classList.contains("faq-open")) {
    faqContent.removeAttribute("style");
    item.classList.remove("faq-open");
  } else {
    faqContent.style.height = faqContent.scrollHeight + "px";
    item.classList.add("faq-open");
  }
};

const sections = document.querySelectorAll("section[id]");

// cards

let cards = document.querySelector(".blog-content");

// realizando busca pelo json nas pastas
fetch("postagem.json")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((post, i) => {
      // console.log(post)
      let card = document.createElement("article");
      card.classList.add("blog-card");
      console.log(card);

      cards.appendChild(card);

      card.innerHTML = `
                           <div class="blog-image">
                           <img src="assets/images/${post.imagem}.jpg" class="blog-img" alt="">
                            <a href="#${post.link}" class="blog-button">
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                        <div class="blog-data">
                            <h2 class="blog-title">
                              ${post.titulo}
                            </h2>
                            <p class="blog-description">
                            ${post.descricao}
                            </p>
                            <div class="blog-footer">
                                <div class="blog-reaction">
                                    <i class="ri-chat-3-line"></i>
                                    ${post.comentarios}
                                </div>
                                <div class="blog-reaction">
                                    <i class="ri-eye-line"></i>
                                    ${post.visualizacao}
                                </div>
                            </div>
                        </div>
  `
    })
  )
