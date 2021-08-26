import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();

const app = express();

app.get('/api', (req, res) => {
  res.send("API is running ...");
});

app.get('/api/products', (req, res) => {
  res.json(products);
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
})

const port = process.env.Port || 5000

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));