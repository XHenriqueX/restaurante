// Definições de tipos substituídas por objetos comuns

let carrinho = [];
let comentarios = [];

const cardapio = [
  //C1
  {
    img: "img/Salmão Teryaki.png",
    favorito: false,
    id: 0,
    nome: "Salmão Teryaki",
    descricao:
      "Filé de salmão grelhado com molho teriyaki, acompanhado de arroz e vegetais.",
    valor: 20.0,
  },

  //C2
  {
    img: "img/Pão Indiano.png",
    favorito: false,
    id: 1,
    nome: "Pão Indiano",
    descricao:
      "Pão típico da Índia, macio e levemente tostado, ideal para acompanhar pratos com molho.",
    valor: 25.0,
  },

  //C3
  {
    img: "img/Lamen.png",
    favorito: false,
    id: 2,
    nome: "Lamen",
    descricao:
      "Macarrão japonês em caldo, acompanhado de carne, ovo e vegetais.",
    valor: 20.0,
  },

  //C4
  {
    img: "img/cereal.png",
    favorito: false,
    id: 3,
    nome: "Cereal",
    descricao: "Mistura de cereais crocantes, servido com leite ou iogurte.",
    valor: 15.0,
  },
];

// Criar carrinho
function adicionarACesta(nome, quantidade) {
  for (let i = 0; i < cardapio.length; i++) {
    let comida = cardapio[i];

    if (comida.nome === nome) {
      let novoCarrinho = {
        idComida: comida.id,
        quantidade: quantidade,
        valor: comida.valor * quantidade,
      };
      carrinho.push(novoCarrinho);
      return carrinho;
    }
  }
}

// Adicionar e remover favoritagem
function adicionarFavoritagem(id) {
  let pratoEncontrado;

  cardapio.forEach((prato) => {
    if (prato.id !== id) return;

    prato.favorito = !prato.favorito;
    pratoEncontrado = prato;
  });

  return pratoEncontrado;
}

// Adicionar comentário
function adicionarComentario(texto) {
  let novoTexto = {
    id: comentarios.length,
    comentario: texto,
  };

  comentarios.push(novoTexto);
  return novoTexto;
}

// Remover comentário
function removerComentario(id) {
  let comentarioEncontrado = false;

  comentarios.forEach((comentario, index) => {
    if (comentario.id === id) {
      comentarios.splice(index, 1);
      comentarioEncontrado = true;
    }
  });
  return comentarioEncontrado;
}

// Exportações
export {
  carrinho,
  comentarios,
  cardapio,
  adicionarACesta,
  adicionarFavoritagem,
  adicionarComentario,
  removerComentario,
};
