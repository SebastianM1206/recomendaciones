//OPERACIONES CRUD DE LA BASE DE DATOS DESNORMALIZADA

//Se crean todos los inserts de los cursos, en este caso son los mismos ya presentes en la base de datos
db.cursos.insertMany([
  {
    curso_id: "c101",
    titulo: "Introducción a la Programación",
    categoria: "Programación",
    costo: 0,
    tutor: {
      tutor_id: "t201",
      nombre: "María Rodríguez",
      calificacion_promedio_tutor: 4.7,
    },
    calificacion_promedio_curso: 4.5,
    alumnos_matriculados: [
      {
        usuario_id: "u123",
        nombre: "Juan Pérez",
        calificacion_curso: 4.5,
        calificacion_tutor: 4.8,
      },
      {
        usuario_id: "u124",
        nombre: "Ana López",
        calificacion_curso: 4.6,
        calificacion_tutor: 4.9,
      },
    ],
  },
  {
    curso_id: "c102",
    titulo: "Diseño Gráfico Básico",
    categoria: "Diseño",
    costo: 30,
    tutor: {
      tutor_id: "t202",
      nombre: "Carlos Gómez",
      calificacion_promedio_tutor: 4.3,
    },
    calificacion_promedio_curso: 4.2,
    alumnos_matriculados: [
      {
        usuario_id: "u123",
        nombre: "Juan Pérez",
        calificacion_curso: 4.2,
        calificacion_tutor: 4.4,
      },
    ],
  },
  {
    curso_id: "c103",
    titulo: "Marketing Digital",
    categoria: "Marketing",
    costo: 50,
    tutor: {
      tutor_id: "t203",
      nombre: "Lucía Ramírez",
      calificacion_promedio_tutor: 4.6,
    },
    calificacion_promedio_curso: 4.7,
    alumnos_matriculados: [
      {
        usuario_id: "u124",
        nombre: "Ana López",
        calificacion_curso: 4.7,
        calificacion_tutor: 4.8,
      },
    ],
  },
  {
    curso_id: "c104",
    titulo: "Desarrollo Web Avanzado",
    categoria: "Programación",
    costo: 100,
    tutor: {
      tutor_id: "t201",
      nombre: "María Rodríguez",
      calificacion_promedio_tutor: 4.7,
    },
    calificacion_promedio_curso: 4.8,
    alumnos_matriculados: [
      {
        usuario_id: "u125",
        nombre: "Carlos Sánchez",
        calificacion_curso: 4.8,
        calificacion_tutor: 4.9,
      },
    ],
  },
]);

//Leemos todos los cursos
db.cursos.find();

//Leemos un curso en específico
db.cursos.find({ curso_id: "c101" });

//Actualizamos un curso
db.cursos.updateOne(
  { curso_id: "c101" },
  { $set: { titulo: "Nuevo título de Introducción a la Programación" } }
);

//Eliminamos un curso
db.cursos.deleteOne({ curso_id: "c101" }); //(Adios cursito)

//Tenemos el crud para tutores
//Insert de un nuevo tutor
db.tutores.insertOne({
  tutor_id: "t204",
  usuario_id: "u129",
  nombre: "Sofía Martínez",
  calificacion_promedio_tutor: 4.5,
  cursos_dictados: [
    {
      curso_id: "c105",
      titulo: "Introducción a la Inteligencia Artificial",
      categoria: "Inteligencia Artificial",
      costo: 80,
      calificacion_promedio_curso: 4.6,
      alumnos_matriculados: [
        {
          usuario_id: "u130",
          nombre: "David Torres",
          calificacion_curso: 4.7,
          calificacion_tutor: 4.6,
        },
      ],
    },
  ],
});

//Leemos todos los tutores
db.tutores.find();
//Leemos un tutor en específico
db.tutores.find({ tutor_id: "t204" });
//Actualizamos un tutor
db.tutores.updateOne(
  { tutor_id: "t204" },
  { $set: { nombre: "Nuevo nombre de Sofía Martínez" } }
);

//Eliminamos un tutor
db.tutores.deleteOne({ tutor_id: "t204" }); //(Adios sofi)

//A----------------------------------------------------------------------------------------------------------------------

//Insert de un nuevo usuario  (otra sofia martinezjjsj)
db.usuarios.insertOne({
  usuario_id: "u126",
  nombre: "Sofía Martínez",
  correo: "sofia.martinez@mail.com",
  tipo: "estudiante",
  cursos_matriculados: [
    {
      curso_id: "c105",
      titulo: "Introducción a la Inteligencia Artificial",
      categoria: "Inteligencia Artificial",
      costo: 80,
      tutor: {
        tutor_id: "t204",
        nombre: "Fernando López",
        calificacion_promedio_tutor: 4.5,
      },
      calificacion_curso: 4.6,
      calificacion_tutor: 4.6,
    },
  ],
});

//Leemos todos los usuarios
db.usuarios.find();
//Leemos un usuario en específico
db.usuarios.find({ usuario_id: "u126" });
//Actualizamos un usuario
db.usuarios.updateOne(
  { usuario_id: "u126" },
  { $set: { nombre: "Alvaro uribe velez" } }
);

//Eliminamos un usuario
db.usuarios.deleteOne({ usuario_id: "u126" }); //(Adios alvaro)
