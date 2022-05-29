import { App } from "./server/app.server.js";
import { Server } from "./server/listener.server.js";
import { Socket } from "./server/socket.server.js";

const app = new App(); // express application

function Main() {
  const server = new Server(app.app);
  const socket = new Socket(server.http);
  return server.listen();
}

Main();
