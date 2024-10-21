const express = require("express");
const router = require("./server/routes/index");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Configuração do CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Substitua pela URL do front-end
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`🔥 Server is running on port  http://localhost:${PORT}`);
});
