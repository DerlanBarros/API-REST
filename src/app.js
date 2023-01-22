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

// função para fazer alguma coisa

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

export default app;