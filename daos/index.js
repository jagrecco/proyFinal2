import dotenv from 'dotenv';
dotenv.config();

let productosDao;
let carritosDao;

const PERS = process.env.PERS || "memoria";

switch (PERS) {
  case 'mongoDB':
    import ("./mongoProductosDao.js")
      .then (module => productosDao = new module.default)

    break;

  case 'archivo':
    import ("./archivoProductosDao.js")
        .then (module => productosDao = new module.default)
    break; 

  case 'memoria':
    case 'mongoDB':
      import ("./memoriaProductosDao.js")
        .then (module => productosDao = new module.default)
    break;

  case 'firebase':
    import ("./firebaseProductosDao.js")
        .then (module => productosDao = new module.default)
    break;    
    
}
export {productosDao, carritosDao}