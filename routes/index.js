import { Router } from "express";
const router = Router();

import products from "./productos.js";
import cart from "./carrito.js";
import err from "./error.js";

router.use("/api/productos", products)
router.use("/api/carrito", cart)
router.use("*", err)

export default router