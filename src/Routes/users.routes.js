const { Router } = require("express");
const { getAllUsers, getUserById, getUserAddress, getUserWithTasks } = require("../Controllers/users.controllers");


const router = Router();

//para obtener a todos los usuarios

router.get('/users', getAllUsers);

//Obtener un usuario por su ID

router.get('/users/:id', getUserById);

//Obtener un usuario por medio de un join entre dos tablas

router.get('/users/:id/address', getUserAddress);

//obtener una tarea y sus categorias por medio de un id

router.get("/users/:id/tasks", getUserWithTasks);

//exportamos todas las rutas para utilizarlas en App.js
module.exports = router;
