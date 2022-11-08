const UserServices = require("../Services/users.services");

//importamos UserServices

//controlador para obtener a todos los usuarios

const getAllUsers = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getUserAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getUserJoinAddress(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getUserWithTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getUsersJoinTasks(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserAddress,
    getUserWithTasks
};