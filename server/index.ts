import express from "express";
import cookieParser from "cookie-parser";
import aiRouter from "./src/routes/ai.route.ts"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api/v1", aiRouter)


app.get("/", (req, res) => {
  res.json({ msg: 'Hello world' })
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
