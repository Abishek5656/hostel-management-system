import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import adminRouter from "./routes/admin.routes.js";
import roomRouter from "./routes/room.routes.js";
import hostelerRouter from "./routes/hosteler.routes.js";
import paymentRouter from "./routes/payment.routes.js";

//routes declaration
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/room", roomRouter);
app.use("/api/v1/hosteler", hostelerRouter)
app.use("/api/v1/payment", paymentRouter)

export { app }