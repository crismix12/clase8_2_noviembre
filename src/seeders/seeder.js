const db = require('../utils/database');
const initModels = require("../models/initModels");
//los modelos donde bamos a plantar la informacion
const Address = require('../models/addresses.models');
const Categories = require('../models/categories.models');
const Tasks = require('../models/tasks.models');
const Users = require('../models/users.models');

//Resultado son arreglos con la informacion que se va a plantar

initModels();
const users = [
  { username: "Ian Rosas", email: "ian@gmail.com", password: "1234" },
  { username: "Alvis Echeverria", email: "alvis@gmail.com", password: "1234" },
  { username: "Carlos Tineo", email: "carlos@gmail.com", password: "1234" },
];

const addresses = [
//   { street: "Buena Vista", number: 157, userId: 1, userId: 1 },
//   { street: "benito Juarez", number: 57, userId: 2, userId: 2 },
//   { street: "Madero", number: 157, userId: 3, userId: 3 },
  { street: "Buena Vista", number: 157, userId: 1},
  { street: "benito Juarez", number: 57, userId: 2},
  { street: "Madero", number: 157, userId: 3},
];

const tasks = [
  {
    title: "Crear seeders",
    description: "Terminar el archivo para los seeders",
    userId: 1,
  },
  {
    title: "Pasear al perro",
    description: "Darle la vuelta por todo el barrio a firulais",
    userId: 2,
  },
  {
    title: "Tomar dos litros de agua",
    userId: 3,
  },
];

const categories = [
  { name: "personal" },
  { name: "escuela" },
  { name: "salud" },
  { name: "trabajo" },
  { name: "hogar" },
  { name: "deporte" },
  { name: "ocio" },
  { name: "financiero" },
];
// EL ORDEN DE PLANTADO DE DATOS IMPORTA MUCHO AL HACER EL SEEDING
db.sync({ force: true })
  .then(async () => {
    console.log("Iniciando plantación");
    users.forEach((user) => Users.create(user));
  })
  .then(() => {
    categories.forEach((category) => Categories.create(category));
  })
  .then(() => {
    tasks.forEach((task) => Tasks.create(task));
  })
  .then(() => {
    addresses.forEach((address) => Address.create(address));
  });