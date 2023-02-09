import express from "express";
import selecaoController from "./app/controllers/selecaoController.js";
const app = express();

// indicar para o express ler body com json()
app.use(express.json());

// ROTAS

// Criando uma rota para seleção
app.get("/selecoes", selecaoController.index);

//Pesquisar seleção por id
app.get("/selecoes/:id", selecaoController.show);

// Adicionando conteudo ao banco de dados
app.post("/selecoes", selecaoController.store);

// Apagar seleçao por id
app.delete("/selecoes/:id", selecaoController.delete);

//Atualiza selecao
app.put("/selecoes/:id", selecaoController.update);

export default app;
