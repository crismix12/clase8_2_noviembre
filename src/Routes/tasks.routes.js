const { getAllTasks, createNewTask, updateTaskById, deleteTaskById } = require("../Controllers/tasks.controllers");

const { Router } = require("express");

const router = Router();

//obtener todas las tareas
router.get('/tasks', getAllTasks);

//crear una tarea nueva
router.post('/tasks', createNewTask);

//actualizar una tarea por ID

router.put ('/tasks/:id', updateTaskById);

//borar una tarea por ID

router.delete('/tasks/:id', deleteTaskById);

module.exports = router;