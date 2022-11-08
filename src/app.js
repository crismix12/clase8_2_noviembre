const express = require("express");
const db = require("./utils/database");
//importamos la instancia database de database.js
// const database = require("./utils/database");
//importamos  initModels desde la carpeta models
const initModels = require('./models/initModels');

//Importar las rutas del usuario
const userRoutes = require("./Routes/users.routes");
const taskRoutes = require("./Routes/tasks.routes");
//importamos dotenv para las variables de entorno
require("dotenv").config();

const app = express();

// const PORT = 8000;
const PORT = process.env.PORT;

db.authenticate()  //devuelve una promesa
    .then(() => console.log('Autenticacion exitosa'))
    .catch((error) => console.log(error));

db.sync({ force: false }) //devuelve una promesa  //force: true borra toda la informacion y reemplaza las tablas
    .then(() => console.log("BD sincronizada"))
    .catch((error) => console.log(error));    

// ejecutamos init models cuando nuestra base de datos este conectada y sincronizada
initModels()

app.get('/', () => {
    res.status(200).json('Todo bien');
})

//middleware json
app.use(express.json());
// por medio del middleware de rutas accionamos las ejecuciones de las peticiones http
//ej todas las rutas tipo:
// /api/v1/users
// /api/v1/users/:id
//gestionamos todas las rutas de los usuarios desde app.js
app.use('/api/v1', userRoutes);

//gestionamos las rutas de las tareas desde app.js
app.use('/api/v1', taskRoutes);

app.listen(PORT, () => console.log("Servidor corriendo"));