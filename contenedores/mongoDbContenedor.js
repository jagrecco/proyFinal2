import mongoose from "mongoose";
import ProdModel from "../models/productoSchema.js"
import conexion from "../config/config.js"

mongoose.connect(conexion.mongoDbCon.dbURI).then(
    () => { console.log("Conexión exitosa a Mongo")},
    err => { console.log(err)}
);


class ContenedorMongo{
    constructor(coleccion, esquema){

        this.collection=ProdModel
        
    }

    async listarTodos(){
        try {
            return await ProdModel.find();
        }
        catch (error){
            console.log("Error al conectar a la fuente de datos: " + error)
        }
    }

    async listarUno(idProducto){

        try {
            return await ProdModel.find({_id: idProducto});
        }
        catch (error){
            console.log("Error al conectar a la fuente de datos: " + error)
        }

    }

    async guardarUno(objeto) {

        try {
            const productoNuevo=ProdModel(objeto)
            await productoNuevo.save()
            return objeto;
        }
        catch (error){
            console.log("Error al conectar a la fuente de datos: " + error)
        }

    }

    async borrarUno(idProducto){

        try {
            const productos = await ProdModel.deleteOne({_id: idProducto});
            return productos;
        }
        catch (error){
            console.log("Error al conectar a la fuente de datos: " + error)
        }

    }

    async editaUno(idProducto, objeto) {

        try {
            return ProdModel.findOneAndUpdate(idProducto, objeto,{new: true});
        }
        catch (error){
            console.log("Error al conectar a la fuente de datos: " + error)
        }

    }

    async terminaConexion(){

        try {
            await mongoose.connection.close();
        }
        catch (error){
            console.log("Error al conectar a la fuente de datos: " + error)
        }
    }
}

export default ContenedorMongo