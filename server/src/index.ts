import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env"
import cors from "cors"
import cdsServiceRouter from "./routes/cds.router";


const app = express()

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




app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})