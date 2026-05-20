const produtos = [
  {
    id: 1,
    nome: "Tênis Esportivo Premium",
    categoria: "masculino",
    preco: 349.9,
    variacoes: [
      { cor: "Preto", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=640&h=480&fit=crop" },
      { cor: "Branco", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=640&h=480&fit=crop" },
      { cor: "Vermelho", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Azul Neon", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 2,
    nome: "Chinelo Masculino Conforto",
    categoria: "masculino",
    preco: 89.9,
    variacoes: [
      { cor: "Preto", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=640&h=480&fit=crop" },
      { cor: "Azul", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=640&h=480&fit=crop" },
      { cor: "Cinza", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 3,
    nome: "Sapato Social Executivo",
    categoria: "masculino",
    preco: 249.9,
    variacoes: [
      { cor: "Preto", img: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=640&h=480&fit=crop" },
      { cor: "Marrom", img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=640&h=480&fit=crop" },
      { cor: "Vinho", img: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 4,
    nome: "Tênis Feminino Estilo",
    categoria: "feminino",
    preco: 329.9,
    variacoes: [
      { cor: "Branco", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=640&h=480&fit=crop" },
      { cor: "Rosa", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=640&h=480&fit=crop" },
      { cor: "Roxo", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Cinza", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 5,
    nome: "Sandália Elegante",
    categoria: "feminino",
    preco: 199.9,
    variacoes: [
      { cor: "Bege", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Preta", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Ouro", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 6,
    nome: "Chinelo Feminino Moda",
    categoria: "feminino",
    preco: 79.9,
    variacoes: [
      { cor: "Rosa", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=640&h=480&fit=crop" },
      { cor: "Preto", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=640&h=480&fit=crop" },
      { cor: "Branco", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 7,
    nome: "Bolsa Feminina Luxo",
    categoria: "feminino",
    preco: 290.9,
    variacoes: [
      { cor: "Preta", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=640&h=480&fit=crop" },
      { cor: "Bege", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=640&h=480&fit=crop" },
      { cor: "Vermelha", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 8,
    nome: "Bota Masculina Casual",
    categoria: "masculino",
    preco: 279.9,
    variacoes: [
      { cor: "Marrom", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Preto", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Cinza", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 9,
    nome: "Sneaker Feminina Urbana",
    categoria: "feminino",
    preco: 299.9,
    variacoes: [
      { cor: "Branco Rosa", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=640&h=480&fit=crop" },
      { cor: "Preto", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=640&h=480&fit=crop" },
      { cor: "Cinza", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 10,
    nome: "Sapatilha Feminina Conforto",
    categoria: "feminino",
    preco: 149.9,
    variacoes: [
      { cor: "Preto", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=640&h=480&fit=crop" },
      { cor: "Bege", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=640&h=480&fit=crop" },
      { cor: "Rosa Pastel", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 11,
    nome: "Tênis Running Profissional",
    categoria: "masculino",
    preco: 459.9,
    variacoes: [
      { cor: "Azul Royal", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=640&h=480&fit=crop" },
      { cor: "Laranja", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Verde", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 12,
    nome: "Sapato Casual Masculino",
    categoria: "masculino",
    preco: 189.9,
    variacoes: [
      { cor: "Preto", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=640&h=480&fit=crop" },
      { cor: "Marrom Claro", img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=640&h=480&fit=crop" },
      { cor: "Azul", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 13,
    nome: "Salto Alto Feminino Elegante",
    categoria: "feminino",
    preco: 349.9,
    variacoes: [
      { cor: "Preto", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=640&h=480&fit=crop" },
      { cor: "Nude", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=640&h=480&fit=crop" },
      { cor: "Vermelho", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 14,
    nome: "Moccasin Masculino Premium",
    categoria: "masculino",
    preco: 229.9,
    variacoes: [
      { cor: "Marrom", img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=640&h=480&fit=crop" },
      { cor: "Preto", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=640&h=480&fit=crop" },
      { cor: "Azul Marinho", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 15,
    nome: "Sandália Feminina Rasteira",
    categoria: "feminino",
    preco: 139.9,
    variacoes: [
      { cor: "Branco", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Preto", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Prata", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 16,
    nome: "Tênis Skateboard Urbano",
    categoria: "masculino",
    preco: 319.9,
    variacoes: [
      { cor: "Preto Branco", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=640&h=480&fit=crop" },
      { cor: "Vermelho", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=640&h=480&fit=crop" },
      { cor: "Verde Neon", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 17,
    nome: "Bota Feminina Fashion",
    categoria: "feminino",
    preco: 379.9,
    variacoes: [
      { cor: "Preto", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Marrom", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" },
      { cor: "Cinza", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=640&h=480&fit=crop" }
    ]
  },
  {
    id: 18,
    nome: "Chinelo de Plataforma",
    categoria: "feminino",
    preco: 119.9,
    variacoes: [
      { cor: "Preto", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=640&h=480&fit=crop" },
      { cor: "Branco", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=640&h=480&fit=crop" },
      { cor: "Bege", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=640&h=480&fit=crop" }
    ]
  }
];

const STORAGE_PRODUTOS = "produtos";
const STORAGE_CARRINHO = "carrinho";

function getProdutosStorage() {
  const local = localStorage.getItem(STORAGE_PRODUTOS);
  if (!local) {
    localStorage.setItem(STORAGE_PRODUTOS, JSON.stringify(produtos));
    return produtos.slice();
  }

  try {
    return JSON.parse(local);
  } catch (error) {
    console.warn("Erro ao ler produtos do localStorage:", error);
    localStorage.setItem(STORAGE_PRODUTOS, JSON.stringify(produtos));
    return produtos.slice();
  }
}

function salvarProdutosStorage(lista) {
  localStorage.setItem(STORAGE_PRODUTOS, JSON.stringify(lista));
}

function atualizarQtdCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem(STORAGE_CARRINHO)) || [];
  const elemento = document.getElementById("qtdCarrinho");
  if (elemento) elemento.innerText = carrinho.length;
}

function carregarProdutos(lista) {
  const container = document.getElementById("listaProdutos");
  if (!container) return;

  container.innerHTML = "";

  if (!lista || lista.length === 0) {
    container.innerHTML = `
      <div class="produto" style="grid-column: 1 / -1; padding: 40px;">
        <h3>Nenhum produto encontrado</h3>
        <p>Use a busca ou filtre por categoria para encontrar um produto.</p>
      </div>
    `;
    return;
  }

  lista.forEach(p => {
    const imagem = p.variacoes[0]?.img || "https://via.placeholder.com/640x480?text=Sem+imagem";
    container.innerHTML += `
      <div class="produto">
        <img src="${imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
        <button onclick="abrirProduto(${p.id})">Ver opções</button>
      </div>
    `;
  });
}

function aplicarFiltros() {
  const busca = document.getElementById("buscaInput")?.value.trim().toLowerCase() || "";
  const categoria = document.getElementById("categoriaFiltro")?.value || "todos";
  let lista = getProdutosStorage();

  if (categoria !== "todos") {
    lista = lista.filter(p => p.categoria === categoria);
  }

  if (busca) {
    lista = lista.filter(p => {
      const termo = `${p.nome} ${p.categoria} ${p.variacoes.map(v => v.cor).join(" ")}`.toLowerCase();
      return termo.includes(busca);
    });
  }

  carregarProdutos(lista);
}

function filtrar(tipo) {
  const seletor = document.getElementById("categoriaFiltro");
  if (seletor) seletor.value = tipo;
  aplicarFiltros();
}

function buscarProdutos() {
  aplicarFiltros();
}

function abrirProduto(id) {
  localStorage.setItem("produtoID", id);
  localStorage.setItem(STORAGE_PRODUTOS, JSON.stringify(getProdutosStorage()));
  window.location.href = "produto.html";
}

function adicionarCarrinho(item) {
  const carrinho = JSON.parse(localStorage.getItem(STORAGE_CARRINHO)) || [];
  carrinho.push(item);
  localStorage.setItem(STORAGE_CARRINHO, JSON.stringify(carrinho));
  atualizarQtdCarrinho();
}

function toggleCMS() {
  const painel = document.getElementById("cmsPanel");
  if (!painel) return;
  painel.classList.toggle("ativo");
  painel.setAttribute("aria-hidden", painel.classList.contains("ativo") ? "false" : "true");
  if (painel.classList.contains("ativo")) {
    construirListaCMS();
  }
}

function apresentarMensagemCMS(texto, tipo = "success") {
  const mensagem = document.getElementById("cmsMensagem");
  if (!mensagem) return;
  mensagem.innerText = texto;
  mensagem.className = tipo;
  setTimeout(() => {
    if (mensagem.innerText === texto) mensagem.innerText = "";
  }, 3000);
}

function construirListaCMS() {
  const produtosAtuais = getProdutosStorage();
  const tabela = document.getElementById("cmsTabela");
  if (!tabela) return;

  if (!produtosAtuais.length) {
    tabela.innerHTML = `<p>Nenhum produto cadastrado.</p>`;
    return;
  }

  tabela.innerHTML = produtosAtuais.map(produto => `
    <div class="product-row">
      <span>${produto.nome} (${produto.categoria}) - R$ ${produto.preco.toFixed(2)}</span>
      <span>${produto.variacoes.map(v => v.cor).join(", ")}</span>
      <button type="button" class="btn-editar" onclick="abrirEdicaoProduto(${produto.id})">Editar</button>
      <button type="button" class="btn-remover" onclick="removerProduto(${produto.id})">Excluir</button>
    </div>
  `).join("");
}

function abrirEdicaoProduto(id) {
  const produtosAtuais = getProdutosStorage();
  const produto = produtosAtuais.find(p => p.id === id);
  if (!produto) return;

  document.getElementById("produtoId").value = produto.id;
  document.getElementById("produtoNome").value = produto.nome;
  document.getElementById("produtoCategoria").value = produto.categoria;
  document.getElementById("produtoPreco").value = produto.preco;
  document.getElementById("produtoImagem").value = produto.variacoes[0]?.img || "";
  document.getElementById("produtoCores").value = produto.variacoes.map(v => v.cor).join(", ");
  apresentarMensagemCMS(`Editando produto ID ${id}`);
}

function limparFormularioCMS() {
  document.getElementById("produtoId").value = "";
  document.getElementById("produtoNome").value = "";
  document.getElementById("produtoCategoria").value = "";
  document.getElementById("produtoPreco").value = "";
  document.getElementById("produtoImagem").value = "";
  document.getElementById("produtoCores").value = "";
  apresentarMensagemCMS("Formulário limpo", "info");
}

function montarVariacoes(img, coresTexto) {
  const cores = coresTexto.split(",").map(c => c.trim()).filter(Boolean);
  if (!cores.length) {
    return [{ cor: "Padrão", img }];
  }

  return cores.map(cor => ({ cor, img }));
}

function salvarProdutoCMS(event) {
  event.preventDefault();

  const idCampo = document.getElementById("produtoId").value;
  const nome = document.getElementById("produtoNome").value.trim();
  const categoria = document.getElementById("produtoCategoria").value;
  const preco = Number(document.getElementById("produtoPreco").value);
  const imagem = document.getElementById("produtoImagem").value.trim() || "https://via.placeholder.com/640x480?text=Imagem+não+disponível";
  const cores = document.getElementById("produtoCores").value;

  if (!nome || !categoria || Number.isNaN(preco)) {
    apresentarMensagemCMS("Preencha o nome, categoria e preço antes de salvar.", "error");
    return;
  }

  const produtosAtuais = getProdutosStorage();
  const variacoes = montarVariacoes(imagem, cores);

  if (idCampo) {
    const id = Number(idCampo);
    const index = produtosAtuais.findIndex(p => p.id === id);
    if (index === -1) {
      apresentarMensagemCMS("Produto não encontrado para edição.", "error");
      return;
    }

    produtosAtuais[index] = { id, nome, categoria, preco, variacoes };
    apresentarMensagemCMS("Produto atualizado com sucesso.", "success");
  } else {
    const novoId = produtosAtuais.reduce((max, p) => Math.max(max, p.id), 0) + 1;
    produtosAtuais.push({ id: novoId, nome, categoria, preco, variacoes });
    apresentarMensagemCMS("Produto adicionado com sucesso.", "success");
  }

  salvarProdutosStorage(produtosAtuais);
  construirListaCMS();
  aplicarFiltros();
  limparFormularioCMS();
}

function removerProduto(id) {
  if (!confirm("Tem certeza que deseja excluir este produto?")) return;
  const produtosAtuais = getProdutosStorage().filter(p => p.id !== id);
  salvarProdutosStorage(produtosAtuais);
  construirListaCMS();
  aplicarFiltros();
  apresentarMensagemCMS("Produto excluído com sucesso.", "success");
}

function inicializarCarrinho() {
  if (!localStorage.getItem(STORAGE_CARRINHO)) {
    localStorage.setItem(STORAGE_CARRINHO, JSON.stringify([]));
  }
}

function iniciarAplicacao() {
  inicializarCarrinho();
  if (!localStorage.getItem(STORAGE_PRODUTOS)) {
    salvarProdutosStorage(produtos);
  }
  atualizarQtdCarrinho();
  aplicarFiltros();
  construirListaCMS();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarAplicacao);
} else {
  iniciarAplicacao();
}
