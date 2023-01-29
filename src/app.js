import express from "express";
import conexao from "../infra/conexao.js";
const app = express();

// indicar para o express ler body com json()
app.use(express.json());

// ROTAS

// Criando uma rota para seleção
app.get("/selecoes", (req, res) => {
  // Instruções sql
  const sql = "SELECT * FROM tbselecoes;";
  conexao.query(sql, (erro, result) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(result);
    }
  });
});

//Pesquisar seleção por id
app.get("/selecoes/:id", (req, res) => {
  let id = req.params.id;
  // Instrução sql
  const sql = `SELECT * FROM tbselecoes WHERE id=?;`;
  conexao.query(sql, id, (erro, result) => {
    const row = result[0];
    if (erro) {
      res.status(404).json({
        erro: erro,
      });
    } else {
      res.status(200).json(row);
    }
  });
});

// Adicionando conteudo ao banco de dados
app.post("/selecoes", (req, res) => {
  const selecao = req.body.selecao;
  const grupo = req.body.grupo;
  // Instrução sql
  const sql = `INSERT INTO tbselecoes(selecao, grupo) values (?,?)`;
  conexao.query(sql, [selecao, grupo], (erro, result) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(201).json(result);
    }
  });
});

// Apagar seleçao por id
app.delete("/selecoes/:id", (req, res) => {
  let id = req.params.id;
  const sql = "DELETE FROM tbselecoes WHERE id=?";
  conexao.query(sql, id, (erro, result) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(result);
    }
  });
});

//Atualiza selecao
app.put("/selecoes/:id", (req, res) => {
  const id = req.params.id;
  const selecao = req.body;
  const sql = `UPDATE tbselecoes SET ? WHERE id = ${id}`;
  conexao.query(sql, selecao, (erro, result) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(result);
    }
  });
});

export default app;
