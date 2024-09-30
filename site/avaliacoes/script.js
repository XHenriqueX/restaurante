let carrinho = [];
let comentarios = [];

const cardapio = [
  {
    img: `img/salmao.png`,
    favorito: false,
    id: 0,
    nome: "Salmão Teryaki",
    descricao: "Filé de salmão grelhado com molho teriyaki, acompanhado de arroz e vegetais.",
    valor: 20.0,
  },
  {
    img: "img/imgPão Indiano.png",
    favorito: false,
    id: 1,
    nome: "Pão Indiano",
    descricao: "Pão típico da Índia, macio e levemente tostado, ideal para acompanhar pratos com molho.",
    valor: 25.0,
  },
  {
    img: "img/imgcereal.png",
    favorito: false,
    id: 2,
    nome: "Cereal",
    descricao: "Mistura de cereais crocantes, servido com leite ou iogurte.",
    valor: 15.0,
  },
  {
    img: "img/imgLamen.png",
    favorito: false,
    id: 3,
    nome: "Lamen",
    descricao: "Macarrão japonês em caldo, acompanhado de carne, ovo e vegetais.",
    valor: 20.0,
  },
];

// Adicionar ao carrinho
export function adicionarACesta(nome, quantidade) {
  for (let comida of cardapio) {
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

// Adicionar favoritagem
export function adicionarFavoritagem(id) {
  let pratoEncontrado;

  cardapio.forEach((prato) => {
    if (prato.id === id) {
      prato.favorito = !prato.favorito;
      pratoEncontrado = prato;
    }
  });

  return pratoEncontrado;
}

// Adicionar comentário
export function adicionarComentario(texto) {
  let novoTexto = {
    id: comentarios.length,
    comentario: texto,
  };

  comentarios.push(novoTexto);
  return novoTexto;
}

console.log(adicionarComentario("Bom"));
console.log(adicionarComentario("Otimo"));

// Remover comentário
export function removerComentario(id) {
  let comentarioEncontrado = false;

  comentarios = comentarios.filter((comentario) => {
    if (comentario.id === id) {
      comentarioEncontrado = true;
      return false; // Remove o comentário
    }
    return true; // Mantém o comentário
  });

  return comentarioEncontrado;
}

console.log("===================");
console.log(removerComentario(1));

// Exportar variáveis
export { carrinho, comentarios, cardapio };
