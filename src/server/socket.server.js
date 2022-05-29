import { Server } from "socket.io";

export class Socket {
  constructor(server) {
    this.io = new Server(server)
    this.events();
  }
  events() {
    this.io.on('connection', socket => console.log('User Connected'))
  }
}