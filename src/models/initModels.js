const Users = require("./users.models");
const Tasks = require("./tasks.models");
const Address = require("./addresses.models");
const Categories = require("./categories.models");
const TaskCategories = require("./taskcategories.models");

const initModels = () => {
   //EJEMPLO DE RELACION 1 A 1
      //Users tiene una direccion 
      // Address.belongsTo(Users, { as: "resident", foreignKey: "user_id" });
      // users tiene una dirección
      // Users.hasOne(Address, { as: "home", foreignKey: "user_id" });
      Users.hasOne(Address, { as: "home", foreignKey: "user_id" });
      // //una direccion pertenece a un usuario 
      Address.belongsTo(Users, { as: "user", foreignKey: "user_id" });
   //EJEMPLO DE RELACION UNO A MUCHOS
      // un usuario tiene muchas tareas
      Users.hasMany(Tasks, { as: "task", foreignKey: "user_id" });
      //una tarea pertenece a un usuario
      Tasks.belongsTo(Users, { as: "user", foreignKey: "user_id" });
   //EJEMPLO N-N Muchos a muchos Many to many
      // Tasks.belongsToMany(Categories, {through: 'task_categories'});

      // Categories.belongsToMany(Tasks, {through: 'task_categories'});

   //Manejando la relacion con la tabla pivote!
   //N=N con tabla pivote
   //1-N ===> de tasks ===> categories_tasks
   Tasks.hasMany(TaskCategories, {as: "tasks", foreignKey: "task_id"});
   TaskCategories.belongsTo(Tasks, {as: "task", foreignKey: "task_id" });

   //1-N ===> de categories ===> categories_tasks
   Categories.hasMany(TaskCategories, 
      {
         as: "categories", 
         foreignKey: "category_id"
      });
   TaskCategories.belongsTo(Categories, 
      {
         as:"category", 
         foreignKey:"category_id"
      });

   //TAREA: como cambiar el nombre de las FK en many to many
   // Users;
   // Address;
   // Tasks; 
}

module.exports = initModels;