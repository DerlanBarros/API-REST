import conexao from "../database/conexao.js";

class SelecaoController {
  index(req, res) {
    const sql = "SELECT * FROM tbselecoes;";
    conexao.query(sql, (erro, result) => {
      if (erro) {
        res.status(404).json({ erro: erro });
      } else {
        res.status(200).json(result);
      }
    });
  }

  show(req, res) {
    let id = req.params.id;
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
  }

  store(req, res) {
    const selecao = req.body.selecao;
    const grupo = req.body.grupo;
    const sql = `INSERT INTO tbselecoes(selecao, grupo) values (?,?)`;
    conexao.query(sql, [selecao, grupo], (erro, result) => {
      if (erro) {
        res.status(404).json({ erro: erro });
      } else {
        res.status(201).json(result);
      }
    });
  }

  delete(req, res) {
    let id = req.params.id;
    const sql = "DELETE FROM tbselecoes WHERE id=?";
    conexao.query(sql, id, (erro, result) => {
      if (erro) {
        res.status(404).json({ erro: erro });
      } else {
        res.status(200).json(result);
      }
    });
  }

  update(req, res) {
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
  }
}

// padrâo Singleton
export default new SelecaoController();
