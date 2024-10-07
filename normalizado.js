//Aqui se encuentran las operaciones crud que hemos trabajado durante las clases
//En este caso de la propuesta de la base de datos normalizada

//Insert de nuevos usuarios
db.usuarios.insertMany([
  {
    usuario_id: 11,
    nombre_usuario: "Albertito",
    carrera: "Ingeniería Industrial",
    semestre: 3,
    cursos: [{ curso_id: 1 }, { curso_id: 2 }],
  },
  {
    usuario_id: 12,
    nombre_usuario: "Shaw Mendez",
    carrera: "Ingeniería Informática",
    semestre: 5,
    cursos: [{ curso_id: 3 }],
  },
  {
    usuario_id: 13,
    nombre_usuario: "Julian Montero",
    carrera: "Ingeniería Aeroespacial",
    semestre: 4,
    cursos: [{ curso_id: 1 }, { curso_id: 2 }],
  },
]);

//Leemos todos los usuarios
db.usuarios.find();

//Leemos un usuario en específico
db.usuarios.find({ usuario_id: 11 });

//Actualizamos un usuario
db.usuarios.updateOne(
  { usuario_id: 11 },
  { $set: { nombre_usuario: "Nuevo nombre de albertito" } }
);

//eliminamos un usuario
db.usuarios.deleteOne({ usuario_id: 11 }); //(Adios albertito)

//Tenemos el crud para cursos- - - -- - - -- - - - - - -- - - - - - - -- - - -- - - - - -- --
//Insert de nuevos cursos
db.cursos.insertMany([
  {
    curso_id: 11,
    nombre_curso: "BD NoSQL for dummies",
    modalidad: "Presencial",
    ratings: [{ rating: 5, usuario_id: 11 }],
  },
  {
    curso_id: 12,
    nombre_curso: "Matematica indiscreta",
    modalidad: "Presencial",
    ratings: [
      { rating: 3, usuario_id: 11 },
      { rating: 4.5, usuario_id: 13 },
    ],
  },
  {
    curso_id: 13,
    nombre_curso: "Ingeniería de alimentos",
    modalidad: "Virtual",
    ratings: [
      { rating: 4, usuario_id: 11 },
      { rating: 3, usuario_id: 12 },
    ],
  },
]);
//Leemos todos los cursos
db.cursos.find();
//leemos un curso en específico
db.cursos.find({ curso_id: 11 });

//Actualizamos un curso
db.cursos.updateOne(
  { curso_id: 11 },
  { $set: { nombre_curso: "Nuevo nombre SQL INCREIBLE" } }
);

//Eliminamos un curso
db.cursos.deleteOne({ curso_id: 11 }); //(Adios curso 11)

//Tenemos el crud para tutores - -- - - -- - - -- -- - - -- - - -- - - -- - - - -- - - -- - - -
//Insert de un nuevo tutor
db.tutores.insertOne({
  nombre_tutor: "Julian Trujillo",
  cursos: [{ curso_id: 2 }, { curso_id: 3 }],
  ratings: [{ rating: 4.5, usuario_id: 13 }],
});

//Leemos todos los tutores
db.tutores.find();
//Leemos un tutor en específico
db.tutores.find({ nombre_tutor: "Julian Trujillo" });

//Actualizamos un tutor
db.tutores.updateOne(
  { nombre_tutor: "Julian Trujillo" },
  { $set: { nombre_tutor: "Nuevo nombre de Julian Trujillo" } }
);

//Eliminamos un tutor
db.tutores.deleteOne({ nombre_tutor: "Julian Trujillo" }); //(Adios Juliancito)
