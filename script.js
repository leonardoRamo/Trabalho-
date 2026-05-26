const produtos = [
  {
    id: 1,
    nome: "Tênis Esportivo Premium",
    categoria: "masculino",
    preco: 349.9,
    variacoes: [
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-sneakers" },
      { cor: "Branco", img: "https://source.unsplash.com/640x480/?white-sneakers" },
      { cor: "Vermelho", img: "https://source.unsplash.com/640x480/?red-sneakers" },
      { cor: "Azul Neon", img: "https://source.unsplash.com/640x480/?blue-sneakers" }
    ]
  },
  {
    id: 2,
    nome: "Chinelo Masculino Conforto",
    categoria: "masculino",
    preco: 89.9,
    variacoes: [
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-flipflops" },
      { cor: "Azul", img: "https://source.unsplash.com/640x480/?blue-flipflops" },
      { cor: "Cinza", img: "https://source.unsplash.com/640x480/?gray-flipflops" }
    ]
  },
  {
    id: 3,
    nome: "Sapato Social Executivo",
    categoria: "masculino",
    preco: 249.9,
    variacoes: [
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-dress-shoes" },
      { cor: "Marrom", img: "https://source.unsplash.com/640x480/?brown-dress-shoes" },
      { cor: "Vinho", img: "https://source.unsplash.com/640x480/?wine-red-dress-shoes" }
    ]
  },
  {
    id: 4,
    nome: "Tênis Feminino Estilo",
    categoria: "feminino",
    preco: 329.9,
    variacoes: [
      { cor: "Branco", img: "https://source.unsplash.com/640x480/?white-womens-sneakers" },
      { cor: "Rosa", img: "https://source.unsplash.com/640x480/?pink-womens-sneakers" },
      { cor: "Roxo", img: "https://source.unsplash.com/640x480/?purple-womens-sneakers" },
      { cor: "Cinza", img: "https://source.unsplash.com/640x480/?gray-womens-sneakers" }
    ]
  },
  {
    id: 5,
    nome: "Sandália Elegante",
    categoria: "feminino",
    preco: 199.9,
    variacoes: [
      { cor: "Bege", img: "https://source.unsplash.com/640x480/?beige-sandals" },
      { cor: "Preta", img: "https://source.unsplash.com/640x480/?black-sandals" },
      { cor: "Ouro", img: "https://source.unsplash.com/640x480/?gold-sandals" }
    ]
  },
  {
    id: 6,
    nome: "Chinelo Feminino Moda",
    categoria: "feminino",
    preco: 79.9,
    variacoes: [
      { cor: "Rosa", img: "https://source.unsplash.com/640x480/?pink-flipflops" },
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-flipflops" },
      { cor: "Branco", img: "https://source.unsplash.com/640x480/?white-flipflops" }
    ]
  },
  {
    id: 7,
    nome: "Bolsa Feminina Luxo",
    categoria: "feminino",
    preco: 290.9,
    variacoes: [
      { cor: "Preta", img: "https://source.unsplash.com/640x480/?black-handbag" },
      { cor: "Bege", img: "https://source.unsplash.com/640x480/?beige-handbag" },
      { cor: "Vermelha", img: "https://source.unsplash.com/640x480/?red-handbag" }
    ]
  },
  {
    id: 8,
    nome: "Bota Masculina Casual",
    categoria: "masculino",
    preco: 279.9,
    variacoes: [
      { cor: "Marrom", img: "https://source.unsplash.com/640x480/?brown-boots" },
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-boots" },
      { cor: "Cinza", img: "https://source.unsplash.com/640x480/?gray-boots" }
    ]
  },
  {
    id: 9,
    nome: "Sneaker Feminina Urbana",
    categoria: "feminino",
    preco: 299.9,
    variacoes: [
      { cor: "Branco Rosa", img: "https://source.unsplash.com/640x480/?pink-white-sneakers" },
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-womens-sneakers" },
      { cor: "Cinza", img: "https://source.unsplash.com/640x480/?gray-womens-sneakers" }
    ]
  },
  {
    id: 10,
    nome: "Sapatilha Feminina Conforto",
    categoria: "feminino",
    preco: 149.9,
    variacoes: [
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-ballet-flats" },
      { cor: "Bege", img: "https://source.unsplash.com/640x480/?beige-ballet-flats" },
      { cor: "Rosa Pastel", img: "https://source.unsplash.com/640x480/?pastel-pink-flats" }
    ]
  },
  {
    id: 11,
    nome: "Tênis Running Profissional",
    categoria: "masculino",
    preco: 459.9,
    variacoes: [
      { cor: "Azul Royal", img: "https://source.unsplash.com/640x480/?royal-blue-running-shoes" },
      { cor: "Laranja", img: "https://source.unsplash.com/640x480/?orange-running-shoes" },
      { cor: "Verde", img: "https://source.unsplash.com/640x480/?green-running-shoes" }
    ]
  },
  {
    id: 12,
    nome: "Sapato Casual Masculino",
    categoria: "masculino",
    preco: 189.9,
    variacoes: [
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-casual-shoes" },
      { cor: "Marrom Claro", img: "https://source.unsplash.com/640x480/?light-brown-shoes" },
      { cor: "Azul", img: "https://source.unsplash.com/640x480/?blue-casual-shoes" }
    ]
  },
  {
    id: 13,
    nome: "Salto Alto Feminino Elegante",
    categoria: "feminino",
    preco: 349.9,
    variacoes: [
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-high-heels" },
      { cor: "Nude", img: "https://source.unsplash.com/640x480/?nude-high-heels" },
      { cor: "Vermelho", img: "https://source.unsplash.com/640x480/?red-high-heels" }
    ]
  },
  {
    id: 14,
    nome: "Moccasin Masculino Premium",
    categoria: "masculino",
    preco: 229.9,
    variacoes: [
      { cor: "Marrom", img: "https://source.unsplash.com/640x480/?brown-moccasins" },
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-moccasins" },
      { cor: "Azul Marinho", img: "https://source.unsplash.com/640x480/?navy-moccasins" }
    ]
  },
  {
    id: 15,
    nome: "Sandália Feminina Rasteira",
    categoria: "feminino",
    preco: 139.9,
    variacoes: [
      { cor: "Branco", img: "https://source.unsplash.com/640x480/?white-flat-sandals" },
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-flat-sandals" },
      { cor: "Prata", img: "https://source.unsplash.com/640x480/?silver-flat-sandals" }
    ]
  },
  {
    id: 16,
    nome: "Tênis Skateboard Urbano",
    categoria: "masculino",
    preco: 319.9,
    variacoes: [
      { cor: "Preto Branco", img: "https://source.unsplash.com/640x480/?black-white-skate-shoes" },
      { cor: "Vermelho", img: "https://source.unsplash.com/640x480/?red-skate-shoes" },
      { cor: "Verde Neon", img: "https://source.unsplash.com/640x480/?neon-green-skate-shoes" }
    ]
  },
  {
    id: 17,
    nome: "Bota Feminina Fashion",
    categoria: "feminino",
    preco: 379.9,
    variacoes: [
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-womens-boots" },
      { cor: "Marrom", img: "https://source.unsplash.com/640x480/?brown-womens-boots" },
      { cor: "Cinza", img: "https://source.unsplash.com/640x480/?gray-womens-boots" }
    ]
  },
  {
    id: 18,
    nome: "Chinelo de Plataforma",
    categoria: "feminino",
    preco: 119.9,
    variacoes: [
      { cor: "Preto", img: "https://source.unsplash.com/640x480/?black-platform-sandals" },
      { cor: "Branco", img: "https://source.unsplash.com/640x480/?white-platform-sandals" },
      { cor: "Bege", img: "https://source.unsplash.com/640x480/?beige-platform-sandals" }
    ]
  }
];

const STORAGE_PRODUTOS = "produtos";
const STORAGE_CARRINHO = "carrinho";

function formatarPreco(valor) {
  const numero = Number(valor);
  if (Number.isNaN(numero)) return "0,00";
  return numero.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function parsePreco(valorTexto) {
  if (valorTexto === null || valorTexto === undefined) return NaN;
  const texto = String(valorTexto).trim().replace(/\./g, "").replace(/,/g, ".");
  return Number(texto);
}

function isProdutoValido(produto) {
  return produto && typeof produto.id === "number" && typeof produto.nome === "string" && typeof produto.categoria === "string" && typeof produto.preco === "number" &&
    Array.isArray(produto.variacoes) && produto.variacoes.length > 0 && produto.variacoes.every(v => v && typeof v.cor === "string" && typeof v.img === "string" && v.img.trim());
}

function getProdutosStorage() {
  const local = localStorage.getItem(STORAGE_PRODUTOS);
  if (!local) {
    localStorage.setItem(STORAGE_PRODUTOS, JSON.stringify(produtos));
    return produtos.slice();
  }

  try {
    const lista = JSON.parse(local);
    if (!Array.isArray(lista) || lista.length === 0 || !lista.every(isProdutoValido)) {
      localStorage.setItem(STORAGE_PRODUTOS, JSON.stringify(produtos));
      return produtos.slice();
    }
    return lista;
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
    const coresHtml = p.variacoes.map((v, i) => ` <span class="swatch" data-prod="${p.id}" data-idx="${i}" title="${v.cor}" style="background:linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.02));"></span>`).join("");
    container.innerHTML += `
      <div class="produto" data-id="${p.id}">
        <img src="${imagem}" alt="${p.nome}" id="img-prod-${p.id}" onerror="this.src='https://via.placeholder.com/640x480?text=Sem+imagem'">
        <div class="produto-body">
          <h3>${p.nome}</h3>
          <div class="swatches">${coresHtml}</div>
          <p class="cores">${p.variacoes.map(v => v.cor).join(", ")}</p>
          <div class="preco">R$ ${formatarPreco(p.preco)}</div>
          <div class="acoes">
            <button class="btn-ver" onclick="abrirProduto(${p.id})">Ver opções</button>
            <button class="btn-add" onclick="adicionarCarrinhoPorId(${p.id}, 0)">Adicionar</button>
          </div>
        </div>
      </div>
    `;
  });

  // inicializa comportamentos de swatches depois da renderização
  setTimeout(() => inicializarSwatches(), 50);
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

function adicionarCarrinhoPorId(prodId, varIndex = 0) {
  const produtosAtuais = getProdutosStorage();
  const produto = produtosAtuais.find(p => p.id === prodId);
  if (!produto) return;
  const variacao = produto.variacoes[varIndex] || produto.variacoes[0] || { cor: 'Padrão', img: '' };
  const item = {
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco,
    cor: variacao.cor,
    img: variacao.img
  };
  adicionarCarrinho(item);
  apresentarMensagemCMS('Item adicionado ao carrinho', 'success');
}

function alterarVariacao(prodId, idx) {
  const imgEl = document.getElementById(`img-prod-${prodId}`);
  const produtosAtuais = getProdutosStorage();
  const produto = produtosAtuais.find(p => p.id === prodId);
  if (!produto) return;
  const variacao = produto.variacoes[idx];
  if (variacao && imgEl) imgEl.src = variacao.img;
  // marcar swatch selecionado
  document.querySelectorAll(`.swatch[data-prod="${prodId}"]`).forEach(s => s.classList.remove('selected'));
  const sw = document.querySelector(`.swatch[data-prod="${prodId}"][data-idx="${idx}"]`);
  if (sw) sw.classList.add('selected');
}

function inicializarSwatches() {
  document.querySelectorAll('.swatch').forEach(sw => {
    const prodId = Number(sw.getAttribute('data-prod'));
    const idx = Number(sw.getAttribute('data-idx'));
    // tentar aplicar cor visual baseando-se no texto (fallback estético)
    const produtosAtuais = getProdutosStorage();
    const produto = produtosAtuais.find(p => p.id === prodId);
    if (produto) {
      const cor = produto.variacoes[idx]?.cor || '';
      // tentar mapear cores comuns para cores hex simples
      const mapa = {
        'Preto':'#161616','Branco':'#f8fafc','Vermelho':'#d62c2c','Azul':'#1e40af','Azul Neon':'#06b6d4','Roxo':'#7c3aed','Rosa':'#f472b6','Cinza':'#6b7280','Marrom':'#7c4a2a','Bege':'#e6d6c3','Laranja':'#ff6b00','Verde':'#16a34a'
      };
      const corHex = mapa[cor] || '#cbd5e1';
      sw.style.background = corHex;
    }

    sw.addEventListener('click', () => {
      alterarVariacao(prodId, idx);
      // atualizar botão adicionar para usar essa variação
      const produtoEl = document.querySelector(`.produto[data-id="${prodId}"]`);
      const btn = produtoEl?.querySelector('.btn-add');
      if (btn) btn.setAttribute('onclick', `adicionarCarrinhoPorId(${prodId}, ${idx})`);
    });
  });
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
      <span>${produto.nome} (${produto.categoria}) - R$ ${formatarPreco(produto.preco)}</span>
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
  document.getElementById("produtoPreco").value = formatarPreco(produto.preco);
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
  const precoTexto = document.getElementById("produtoPreco").value;
  const preco = parsePreco(precoTexto);
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
