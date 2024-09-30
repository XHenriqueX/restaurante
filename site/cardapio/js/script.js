
import { cardapio } from '../../backend/pedido.js';

console.log(cardapio)





$(document).ready(function(){
  $('#mobile_btn').on('click', function() {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItens = $(".nav-item")
  
  console.log(sections)
  $(window).on("scroll", function(){
    const header = $("header");
    let activeSectionIndex = 0;
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    if(scrollPosition <=0){
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px");
    }

    sections.each(function(i){
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if(scrollPosition >= sectionTop && scrollPosition <= sectionBottom){
        activeSectionIndex = i;
        return false;
      } 
    })
    navItens.removeClass("active")
    $(navItens[activeSectionIndex]).addClass("active");
  });
});

$(document).ready(function() {
  $('.heart-icon').on('click', function() {
    $(this).toggleClass('liked');
  });
});

let carrinhos = [];

// Função para adicionar itens ao carrinho (Create)
function adicionarAoCarrinho(prato, preco) {
    const item = carrinhos.find(i => i.prato === prato);
    if (item) {
        item.quantidade++;  // Se o prato já está no carrinho, aumenta a quantidade
    } else {
        carrinhos.push({ prato: prato, preco: preco, quantidade: 1 });
    }
    renderCarrinho(); // Atualiza o carrinho na interface
}

// Função para renderizar o carrinho (Read)
function renderCarrinho() {
    const carrinhoContainer = $('#carrinho');
    carrinhoContainer.empty();  // Limpa o carrinho antes de re-renderizar
    if (carrinho.length === 0) {
        carrinhoContainer.append('');
    } else {
        carrinho.forEach((item, index) => {
            carrinhoContainer.append(`
                <div class="carrinho-item">
                    <img src="img/${item.prato}.png" class="dish-image" alt="">
                    <span>${item.prato} - R$${item.preco} x ${item.quantidade}</span>
                    <button onclick="removerDoCarrinho(${index})">Remover</button>
                    <button onclick="atualizarQuantidade(${index}, 'mais')">+</button>
                    <button onclick="atualizarQuantidade(${index}, 'menos')">-</button>
                </div>
            `);
        });
    }
}

// Função para atualizar a quantidade de um item no carrinho (Update)
function atualizarQuantidade(index, operacao) {
    if (operacao === 'mais') {
        carrinho[index].quantidade++;
    } else if (operacao === 'menos' && carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
    }
    renderCarrinho(); // Atualiza o carrinho
}

// Função para remover um item do carrinho (Delete)
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);  // Remove o item pelo índice
    renderCarrinho();  // Atualiza o carrinho na interface
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = [];
    renderCarrinho();
}

$(document).ready(function() {
  // Exemplo de inicialização do carrinho com delegação de eventos
  $('#menu').on('click', '.btn-default', function() {
      const prato = $(this).closest('.dish').find('.dish-title').text().trim();
      const preco = $(this).closest('.dish').find('h4').text().replace('R$', '').trim();
      adicionarAoCarrinho(prato, parseFloat(preco));
  });
});


window.onload = function aparecerCardapio(){
  let pratos = ["Salmão Teryaki", "Pão Indiano", "Lamen", "Cereal"];
  let menu = $('#menu');


  menu.append(`
    <div id="dishes">
      <div class="dish">
        <div class="dish-heart">
          <i class="fa-solid fa-heart heart-icon"></i>
        </div>

        <img src="img/${pratos[0]}.png" class="dish-image" alt="">
        <h3 class="dish-title">
        ${pratos[0]}
        </h3>

        <span class="dish-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>

        <div class="dish-rate">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <span>(500+)</span>
        </div>

        <h4>R$20.00</h4>
        <div class="dish-prise">
          <button class="btn-default">
            <i class="fa-solid fa-basket-shopping"></i>
          </button>
        </div>
      </div>

      <div class="dish">
        <div class="dish-heart">
          <i class="fa-solid fa-heart heart-icon"></i>
        </div>

        <img src="img/${pratos[1]}.png" class="dish-image" alt="">
        <h3 class="dish-title">
        ${pratos[1]}
        </h3>

        <span class="dish-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>

        <div class="dish-rate">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <span>(500+)</span>
        </div>

        <h4>R$25.00</h4>
        <div class="dish-prise">
          <button class="btn-default">
            <i class="fa-solid fa-basket-shopping"></i>
          </button>
        </div>
      </div>
      <div class="dish">
        <div class="dish-heart">
          <i class="fa-solid fa-heart heart-icon"></i>
        </div>

        <img src="img/${pratos[2]}.png" class="dish-image" alt="">
        <h3 class="dish-title">
        ${pratos[2]}
        </h3>

        <span class="dish-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>

        <div class="dish-rate">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <span>(500+)</span>
        </div>
        <h4>R$20.00</h4>
        <div class="dish-prise">
          <button class="btn-default">
            <i class="fa-solid fa-basket-shopping"></i>
          </button>
        </div>
      </div>

      <div class="dish">
        <div class="dish-heart">
          <i class="fa-solid fa-heart heart-icon"></i>
        </div>

        <img src="img/${pratos[3]}.png" class="dish-image" alt="">
        <h3 class="dish-title">
        ${pratos[3]}
        </h3>

        <span class="dish-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>

        <div class="dish-rate">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <span>(500+)</span>
        </div>

        <h4>R$15.00</h4>
        <div class="dish-prise">
          <button class="btn-default">
            <i class="fa-solid fa-basket-shopping"></i>
          </button>
        </div>
      </div>
    </div>
`);
}



