import { Server } from "socket.io";

export async function socket(io: Server) {
  try {
    io.on("connection", (socket) => {
      console.log("Socket connected:", socket.id)

      socket.on("message", (response) => {
        console.log("Server received message:", response);
      });

      socket.on("sendMessage", (message) => {
        console.log("Received message from client:", message);
        // Send response back to client
        socket.emit("message", "Hello from server");
      });

      socket.on("disconnect", (reason) => {
        console.log("Socket disconnected:", reason)
      })

    })
  } catch (error) {
    if (error instanceof Error) {
      console.log("Socket error:", error.message)
    }
  }
}