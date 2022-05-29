import { createServer } from "http";
import dotenv from "dotenv";

export class Server {
  constructor(app, port) {
    this.http = createServer(app);
    this.dotenv = dotenv.config();
    this.port = process.env.PORT || port || 8080;
  }
  listen() {
    this.http.listen(this.port, () => {
      console.log("🚀 listening on port:", this.port);
    });
  }
}
