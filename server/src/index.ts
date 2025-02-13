import express from "express";
import cookieParser from "cookie-parser";
import aiRouter from "./routes/ai.route"
import { PORT } from "./config/env"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api/v1/ai/", aiRouter)


app.get("/", (req, res) => {
  res.json({ msg: 'Hello world' })
})


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
