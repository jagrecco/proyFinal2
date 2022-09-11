import express from "express";
import { Router } from "express";

import { productosDao } from "../daos/index.js"

/* const test = new productosDao() */

const products = Router()


/* import { getAll, getById, save, deleteById, changeById } from "../controllers/productsController.js"; */
/* import { isLogin } from "../controllers/adminController.js"; */


products.get("/", async (req, res) => {
  console.log("la ruta llegó")
  /* const listado = await productos.listarTodos()
console.log(listado)
console.log(listado.length + " documentos.") */

const productos = await productosDao.listarTodos();
  /* const productos = getAll() */
  console.log(productos)
  res.status(200).json(productos);
});

/* products.get("/:id", (req, res) => {  
  let id = req.params.id    
  let data = getById(id)   
  res.status(201).json(data)
});

products.post("/", (req, res) => { 
  let login = isLogin()
  if (login) {
    const {name, description, code, thumbnail, price, stock} = req.body
    const data = save({name, description, code, thumbnail, price, stock})  
    res.status(201).json(data) 
  } else {
    res.json({ error : -1, descripcion: "ruta '/' método 'POST' no autorizada" })
  }
});

products.delete("/:id", (req, res) => { 
  let login = isLogin()
  if (login) {
    let id = req.params.id  
    const data = deleteById(id)  
    res.json(data) 
  } else {
    res.json({ error : -1, descripcion: `ruta '/${id}' método 'DELETE' no autorizada` })
  }
});

products.put("/:id", (req, res) => {
  let login = isLogin()
  if (login) {
    let id = parseInt(req.params.id)
    const {name, description, code, thumbnail, price, stock} = req.body
    const data = changeById(id, {name, description, code, thumbnail, price, stock})  
    res.json(data) 
  } else {
    res.json({ error : -1, descripcion: `ruta '/${id}' método 'PUT' no autorizada` })
  } 
});
 */
export default products;