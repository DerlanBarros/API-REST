import app from "./src/app.js";

const port = 3000;

app.listen(port, () => {
    console.log(
      `Este servidor está rodando no endereço http://localhost:${port}`
    );
  });
  