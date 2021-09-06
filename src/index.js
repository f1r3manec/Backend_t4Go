const express = require("express");
const { verifyDb } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

//Servidor expres

const app = express();

//Coenxión BDD
verifyDb();

//Cors
app.use(cors());
app.options("*", cors());

app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "http://localhost:3000");
  req.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Directorio Público

app.use(express.static("public"));

//Lectura Body

app.use(express.json());

//rutas

app.use("/api/usuario", require("./routes/usuario"));

//escucha peticiones

app.listen(process.env.PORT || 7000, () => {
  console.log(`Server run run at port ${process.env.PORT}`);
});
