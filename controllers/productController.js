const Product = require("../models/productModel")
const applyAPIFeatures = require("../utils/apiFeatures")

const getProducts = async (req, res) => {
    try {
        let query = Product.find()
        query = applyAPIFeatures(query, req.query)
        const products = await query
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const prod = await Product.findById(req.params.id)
        if (!prod) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.json(prod)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const postProduct = async (req, res) => {
    try {
        const createdProduct = await Product.create(req.body)
        res.status(201).json(createdProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const entry = req.body
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, entry, { new: true })
        if (!updateProduct) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.json(updateProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deleteProduct) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.json({ message: "Product Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = {
    getProducts,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct
}