const Tasks = require("../models/tasks.models");




class TaskServices {
    static async getAll() {
        try {
            const result = await Tasks.findAll();
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async createTask(task){
        const {title, description, userId} = task; 
        try {
            // console.log(task);  
            await Tasks.create({
                title: title,
                description: description,
                userId: userId
            });
            return [];
        } catch (error) {
            console.log(error);
        }
    }
    
    static async updateTask(toUpdateTask, id){
        try {
            // console.log(toUpdateTask, id);
            const {title, description, is_complete, user_id} = toUpdateTask;
            console.log(is_complete);
            await Tasks.upsert({
                id: id,
                title: title,
                description: description,
                is_complete: is_complete,
                user_id: user_id
            })
            // await Tasks.update({

            // })
            return [];
        } catch (error) {
            throw(error);
        }
    }

    static async deleteTask(id){
        try {
            await Tasks.destroy({
                where: {id}
            });
            return [];
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = TaskServices;