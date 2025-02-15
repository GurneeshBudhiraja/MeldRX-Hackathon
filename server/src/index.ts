import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env"
import cors from "cors"
import cdsServiceRouter from "./routes/cds.route";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { socket } from "./socket";



const app = express()

const server = createServer(app)
const io = new Server(server, {
  path: "/socket/connect",
  cors: {
    origin: "*",
    methods: ['get', 'post', 'put', 'delete'],
    credentials: true
  }
})
socket(io)

// CORS Middleware
app.use(cors({
  methods: ['get', 'post', 'put', 'delete'],
  origin: "*",
  credentials: true
}));
// JSON Middleware
app.use(express.json())
// Middleware for the form
app.use(express.urlencoded({ extended: true }))
// CookieParser form
app.use(cookieParser())


// cds-service router
app.use("/cds-services", cdsServiceRouter)

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" })
})





server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})