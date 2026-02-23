const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const productRouter = require("./routes/productRoute")
const { errorHandler, notFound } = require("./middleware/errorMiddleware")


dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use("/products", productRouter)


app.use(notFound)
app.use(errorHandler)

app.get("/", (req, res) => {
    res.send("Homepage")
})



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})