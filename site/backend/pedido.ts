export type ItemDoCardapio = {
  img: string;
  favorito: boolean;
  id: number;
  nome: string;
  valor: number;
  descricao: string;
};

export type ItemDoCarrinho = {
  idComida: number;
  quantidade: number;
  valor: number;
};

export type Comentario = {
  id: number;
  comentario: string;
};

export let carrinho: ItemDoCarrinho[] = [];

export let comentarios: Comentario[] = [];

export const cardapio: ItemDoCardapio[] = [
  //C1
  {
    img: `\img\salmao.png`,
    favorito: false,
    id: 0,
    nome: "Salmão Teryaki",
    descricao:
      "Filé de salmão grelhado com molho teriyaki, acompanhado de arroz e vegetais.",
    valor: 20.0,
  },

  //C2

  {
    img: "imgPão Indiano.png",
    favorito: false,
    id: 1,
    nome: "Pão Indiano",
    descricao:
      "Pão típico da Índia, macio e levemente tostado, ideal para acompanhar pratos com molho.",
    valor: 25.0,
  },

  //C3

  {
    img: "imgcereal.png",
    favorito: false,
    id: 2,
    nome: "Cereal",
    descricao: "Mistura de cereais crocantes, servido com leite ou iogurte.",
    valor: 15.0,
  },

  //C4

  {
    img: "imgLamen.png",
    favorito: false,
    id: 3,
    nome: "Lamen",
    descricao:
      "Macarrão japonês em caldo, acompanhado de carne, ovo e vegetais.",
    valor: 20.0,
  },
];

//CREATE CARRINHO

export function adicionarACesta(nome: string, quantidade: number) {
  let i: number = 0;
  while (i < cardapio.length) {
    let comida = cardapio[i];

    if (comida.nome === nome) {
      let novoCarrinho: ItemDoCarrinho = {
        idComida: comida.id,
        quantidade: quantidade,
        valor: comida.valor * quantidade,
      };
      carrinho.push(novoCarrinho);
      return carrinho;
    }
    i++;
  }
}

// DELETE CARRINHO

// ADICIONAR E REMOVER FAVORITAGEM....

export function adicionarFavoritagem(id: number): ItemDoCardapio | undefined {
  let pratoEncontrado: ItemDoCardapio | undefined;

  cardapio.forEach((prato) => {
    if (prato.id !== id) return;

    prato.favorito = !prato.favorito;

    pratoEncontrado = prato;
  });

  return pratoEncontrado;
}

// ADICIONAR COMENTARIO

export function adicionarComentario(texto: string) {
  let novoTexto: Comentario = {
    id: comentarios.length,
    comentario: texto,
  };

  comentarios.push(novoTexto);

  return novoTexto;
}

console.log(adicionarComentario("Bom"));
console.log(adicionarComentario("Otimo"));

// REMOVER COMENTATRIO

export function removerComentario(id: number) {
  let comentarioEcontrado: boolean;

  comentarios.forEach((comentario) => {
    if (comentario.id !== id) {
      comentarios.splice(comentario.id, 1);
      comentarioEcontrado = false;
    }
  });
  return comentarioEcontrado;
}

console.log("===================");
console.log(removerComentario(1));
