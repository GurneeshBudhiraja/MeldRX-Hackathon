import { Server } from "socket.io";

export async function socket(io: Server) {
  try {
    io.on("connection", (socket) => {
      console.log("Socket connected:", socket.id)

      socket.on("message", (response) => {
        console.log("Server received message:", response);
      });

      socket.on("timeoutStart", (message) => {
        let index = 0
        console.log("message")
        setInterval(() => {
          if (index >= 4) {
            return;
          }
          socket.emit("index", index)
          index++
        }, 3000)
      })

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