
import ContenedorMongo from "../contenedores/mongoDbContenedor.js"
import CarrModel from "../models/carritoSchema.js"

class CarritoMongoDao extends ContenedorMongo {
    constructor(){
        super (CarrModel)
    }

    async agregarProducto(idCarrito, producto){

        try {

            const data = await super.listarUno(idCarrito)
            const arrProd = data[0].productos
            arrProd.push(producto)
            data[0].productos=arrProd
            const carroModificado=this.col(data[0])
            await carroModificado.save()            
            return data[0]

        }
        catch (error){
            console.log("Error al conectar a la fuente de datos: " + error)
        }


    }

    async eliminarProducto(idCarrito, idProducto){

        try {

            const data = await super.listarUno(idCarrito)
            if (!data) return ({error: "Carrito no encontrado"})
            const nuevoArr =  data[0].productos.filter(el => el._id != idProducto)
            
            /* const nuevoArr =  arrProd.filter(el => el._id != idProducto) */
            /* const arrProd = data[0].productos */
            /* console.log(nuevoArr) */
            /* const indexProduct = arrProd.findIndex(el => el._id == idProducto) */
            /* if (indexProduct == -1) return ({ error: 'Producto no encontrado' }) */
            /* console.log(indexProduct)
            return indexProduct */
            /* if (indexProduct == -1) return ({ error: 'Producto no encontrado' })*/
            /* arrProd.splice(indexProduct, 1) */
            /* console.log(arrModific) */

            data[0].productos =  nuevoArr //arrProd.splice(indexProduct, 1)  //arrModific
            const carroModificado=this.col(data[0])
            await carroModificado.save()            
            return data[0]

        }
        catch (error){
            console.log("Error al conectar a la fuente de datos: " + error)
        }
/*         if (this.col.length === 0) {return ({"Error" : "No hay Carritos"})}
        const indexCart = this.col.findIndex(el => el.id == idCarrito)
        if (indexCart == -1) {return ({ error: 'Carrito no encontrado' })}

        const productos = this.col[indexCart].productos
        const indexProduct = productos.findIndex(el => el.id == idProducto)
        if (indexProduct == -1) {
            return ({ error: 'Producto no encontrado' })
        }

        this.col[indexCart].productos.splice(indexProduct, 1)
        await this.persiste(this.col)
        return "Producto Eliminado" */

    }
}

export default CarritoMongoDao