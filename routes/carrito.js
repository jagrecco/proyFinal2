import express from "express";
import { Router } from "express";

const carts = Router();

/* import { createCart, deleteById, getById, addProduct, deletProduct } from "../controllers/cartsController.js"; */
/* 
carts.post("/", (req, res) => {     
  const data = createCart()  
  res.status(201).json(data)   
});

carts.delete("/:id", (req, res) => {   
  let id = req.params.id  
  const data = deleteById(id)  
  res.json(data) 
});

carts.get("/:id/productos", (req, res) => {  
  let id = req.params.id    
  let data = getById(id)   
  res.status(201).json(data.products)
});

carts.post("/:id/productos/:idProducto", (req, res) => { 
  let idCarrito = req.params.id   
  let idProducto = req.params.idProducto  
  
  const data = addProduct(idCarrito, idProducto)
  res.status(201).json(data)   
});

carts.delete("/:id/productos/:idProducto", (req, res) => { 
  let idCarrito = req.params.id   
  let idProducto = req.params.idProducto   
  
  const data = deletProduct(idCarrito, idProducto)
  res.json(data)   
}); */

export default carts;
