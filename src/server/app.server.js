import express from "express";
import { engine } from "express-handlebars";
import "../config/mongoose.config.js";

export class App {
  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set("view engine", "hbs");
    this.app.set("views", "./src/public/views");
    this.app.engine(
      "hbs",
      engine({
        extname: "hbs",
        defaultLayout: "index.hbs",
        layoutsDir: "./src/public/views/layouts",
        partialsDir: "./src/public/views/partials",
      })
    );
  }
  middlewares() {
    this.app.use(express.static("./src/public"));
  }
  routes() {
    this.app.get("/", (_req, res) => {
      res.render("main");
    });
  }
}
