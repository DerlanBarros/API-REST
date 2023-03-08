import { resolve } from "path";
import conexao from "../database/conexao.js";

class SelecaoRepository {
  // CRUD
  create(selecoes) {
    const sql = `INSERT INTO tbselecoes SET ?`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, selecoes, (erro, resultado) => {
        if (erro) {
          return reject("Não foi possível criar");
        }
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM tbselecoes;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, (erro, resultado) => {
        if (erro) {
          return reject("Não foi possível localizar");
        }
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  findById(id) {
    const sql = `SELECT * FROM tbselecoes WHERE id=?;`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
          return reject("Não foi possível localizar o objeto com o id: ", id);
        }
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  update(selecao, id) {
    const sql = `UPDATE tbselecoes SET ? WHERE id = ${id}`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, [selecao, id],  (erro, resultado) => {
        if (erro) {
          return reject("Não foi possível atualizar");
        }
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM tbselecoes WHERE id=?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
          return reject("Não foi possível excluir");
        }
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }
}

export default new SelecaoRepository();
