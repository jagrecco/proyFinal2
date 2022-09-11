import express, { json, urlencoded } from 'express';
import router from "./routes/index.js"; 
import dotenv from 'dotenv';

dotenv.config()

const app = express();

const port = process.env.PORT || 8080;

/* app.use(express.static(__dirname + "/public")); */
app.use(json())
app.use(urlencoded({ extended: true }))

app.use("/", router);

app.listen(port, ()=>{
    console.log(`Servidor escuchando el puerto: ${port}`)
})

app.on("error", (error) => console.log(`Error en servidor ${error}`));
