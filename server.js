import app from "./src/app.js";
import conexao from "./infra/conexao.js";

const port = 3000;

// Criando a conexão
conexao.connect((erro) => {
  if (erro) {
    console.log("Erro na conexão: ", erro);
  } else {
    console.log("Conexão realizada com sucesso!");
    app.listen(port, () => {
      console.log(
        `Este servidor está rodando no endereço http://localhost:${port}`
      );
    });
  }
});

