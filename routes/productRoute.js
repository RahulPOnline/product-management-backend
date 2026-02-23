const express = require("express")
const { getProducts, getProductById, postProduct, updateProduct, deleteProduct } = require("../controllers/productController")
const productRouter = express.Router()

productRouter.get("/", getProducts)
productRouter.get("/:id", getProductById)
productRouter.post("/", postProduct)
productRouter.put("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)

module.exports = productRouter