var nombre="pepe"
let edad=25
let precio=99.90
var seriesFavoritas=["Dark", "Mr. Robot", "Castlevania"]
var peliculasFavoritas=[
    { 
        nombre:"Marilda",
        añoEstreno:1996,
        protagonistas:["Mara Wilson", "Pam Ferris", "Embeth Davidtz"]
    },
    {
        nombre: "The Matrix",
        añoEstreno: 1999,
        protagonistas: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        nombre: "L a Sirenita",
        añoEstreno:2021,
        protagonistas:["Jodi Benson", "Pat Carrol", "Kenneth Mars"]
    }
];

//mostrar los valores por consola 
console.log("nombre: "+nombre)
console.log("edad: "+edad)
console.log("precio: "+precio)
console.log("peliculas favoritas: "+peliculasFavoritas.join(", "))
console.log("Películas Favoritas:");
peliculasFavoritas.forEach(pelicula => {
    console.log(`- ${pelicula.nombre} (${pelicula.añoEstreno})`);
    console.log("  Protagonistas:", pelicula.protagonistas.forEach(", "));
});

//Incrementar la edad en 1 y volver a mostrarla
edad += 1;
console.log("Edad después de incrementar en 1:", edad);

//Agregar una serie a la lista y volver a mostrarla
seriesFavoritas.push("Stranger Things");
console.log("Series Favoritas después de agregar una nueva serie:", seriesFavoritas.forEach(", "));