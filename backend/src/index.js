const express = require("express");
const router = require("./server/routes/index");

const app = express();
const PORT = 5000;

app.use(router);

app.listen(PORT, () => {
  console.log(`🔥 Server is running on port  http://localhost:${PORT}`);
});
