import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "dbcopa",
});

export default conexao;
