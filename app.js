import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express(); //instanciamos express que nos sirve para levantar el sv

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.get("/", (req, res) => {
  res.send("Hello world");
});

//middleware para vuejs router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

//seteo de puerto
app.set("port", process.env.PORT || 3000); //seteo un puerto global con el nombre port
app.listen(app.get("port"), () => {
  console.log(`Listening port number `);
});
