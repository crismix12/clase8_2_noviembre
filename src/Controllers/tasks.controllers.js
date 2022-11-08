const TaskServices = require("../Services/tasks.services");



const getAllTasks = async (req, res) => {
    try {
        const result = await TaskServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createNewTask = async (req, res) => {
    try {
        const {title, description, isComplete, userId} = req.body;
        const newTask = {title, description, isComplete, userId};
        // console.log(newTask);
        // const res = req.body;
        // console.log(req.body);
        const result = await TaskServices.createTask(newTask);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateTaskById = async(req, res) => {
    try {
        const {title, description, is_complete, user_id} = req.body;
        const { id } = req.params;

        const toUpdateTask = {title, description, is_complete, user_id};

        // console.log(id, toUpdateTask);

        // const result = await ();
        // console.log(id, updateTask);
        const result = await TaskServices.updateTask(toUpdateTask, id);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

const deleteTaskById = async (req,res) =>{
    try {
        const { id } = req.params;
        const result = await TaskServices.deleteTask(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllTasks,
    createNewTask,
    updateTaskById,
    deleteTaskById
}