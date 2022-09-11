let productosDao;
let carritosDao;

//import ProductosDao from "./daos/archivoProductosDao.js"

import ProductosDao from "./mongoProductosDao.js"

productosDao = new ProductosDao()

import dotenv from 'dotenv';
dotenv.config();

const PERS = process.env.PERS || "memoria";

/*switch (PERS) {
  case 'mongoDB':

    const ProductosDaoMongoDb = await (async () => {let {ProductosDaoMongoDb} = await import('./productos/ProductosDaoMongoDb.js'); return ProductosDaoMongoDb})();     
    const CarritosDaoMongoDb = await (async () => {let {CarritosDaoMongoDb} = await import('./carritos/CarritosDaoMongoDb.js'); return CarritosDaoMongoDb})();    
    productosDao = new ProductosDaoMongoDb();
    carritosDao = new CarritosDaoMongoDb();

//    const TmpMongoProductos = import('./mongoProductosDao.js');
//    productosDao = new TmpMongoProductos();

    break;

  case 'archivo':
    const TmpArchProductos = import('./archivoProductosDao.js');
    productosDao = new TmpArchProductos();
    break; 

  case 'memoria':
    const TmpMemProductos = import('./memoriaDao.js');
    productosDao = new TmpMemProductos();
    break;

  case 'firebase':
    const TmpFireProductos = import('./firebaseProductosDao.js');
    productosDao = new TmpFireProductos();
    break;    
    
} */
export {productosDao, carritosDao}