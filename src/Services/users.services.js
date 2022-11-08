//importar el modelo donde estaremos haciendo las consultas

//debemos importar el modelo para realizar consultas al mismo
const Address = require("../models/addresses.models");
const Categories = require("../models/categories.models");
const TaskCategories = require("../models/taskcategories.models");
const Tasks = require("../models/tasks.models");
const Users = require("../models/users.models");

class UserServices {
    static async getAll() {
        try {
            //hacer ejemplo select id, username, email from users;
            const result = await Users.findAll({
                attributes: ["id", "username", "email"],
            });
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getById( id ){
        try {
            const result = await Users.findByPk(id, {
                attributes: ["id", "username", "email"],
            });
            return result
        } catch (error) {
            throw(error);
        }
    }

    static async getUserJoinAddress (id){
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ['id', 'username'],
                include:{
                    model: Address,
                    as: 'home',
                    attributes: {
                        exclude: ['id', 'user_id', 'userId']
                    }
                } 
            });
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getUsersJoinTasks(id) {
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: ['id','username'],
                include:{
                    //anidamos desde donde estamos hasta donde queremos llegar
                    // en el orden de relacion de las tablas
                    // en el modelo entidad relacion
                    model: Tasks,
                    as: "task",
                    attributes: ['title', 'description', 'is_complete'],
                    include: {
                        model: TaskCategories,
                        as: "tasks",
                        attributes: ['category_id'],
                        include: {
                            model: Categories,
                            as: "category"
                        }
                    }
                },
            })
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = UserServices;