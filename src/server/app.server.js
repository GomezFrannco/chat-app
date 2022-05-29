import express from "express";

export class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.static("./src/public"));
  }
  routes() {
    this.app.get("/", (_req, res) => {
      res.sendFile("index");
    });
  }
}
