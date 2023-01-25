import express from "express";
const app = express();

// indicar para o express ler body com json()
app.use(express.json());

// mock de dados
const selecoes = [
  {
    id: 1,
    time: "Brasil",
    grupo: "G",
  },
  {
    id: 2,
    time: "Suiça",
    grupo: "G",
  },
  {
    id: 3,
    time: "Camarões",
    grupo: "G",
  },
  {
    id: 4,
    time: "Sérvia",
    grupo: "G",
  },
];

// função para fazer busca por id
function buscarSelecaoPorId(id) {
  return selecoes.filter((selecao) => selecao.id == id);
}

// função para buscar index da seleção
function buscarIndexSelecao(index) {
  return selecoes.findIndex((selecao) => selecao.index == index);
}

// criando rota na raiz
app.get("/", (req, res) => {
  res.status(200).send("Node JS");
});

// Criando uma rota para seleção
app.get("/selecoes", (req, res) => {
  res.status(200).send(selecoes);
});

// Adicionando conteudo ao array
app.post("/selecoes", (req, res) => {
  selecoes.push(req.body);
  res.status(201).send("Seleção cadastrado com sucesso!");
});

//Pesquisar seleção por id
app.get("/selecoes/:id", (req, res) => {
  let index = req.params.id;
  res.status(200).send(buscarSelecaoPorId(index));
});

// Apagar seleçao por id
app.delete("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes.splice(index, 1);
  res.send("Seleção excluída com sucesso!");
});

//Atualiza selecao
app.put('/selecoes/:id', (req, res) => {
  let index = buscarIndexSelecao(req.params.id)
  selecoes[index].time = req.body.time
  selecoes[index].grupo = req.body.grupo
  res.json(selecoes)
});

export default app;
