//1.- Crea un **objeto** de nombre **Coche** que tenga las propiedades: **marca, modelo, matricula**

let coche = {
    marca: "Toyota",
    modelo: "rav4",
    matricula: "ABC4563"
}

//2.- Crea un **objeto** de nombre **Casa** que tenga las propiedades: **codPostal, calle, portal, piso**

let Casa = {
    codPostal:,
    calle:,
    piso:
}

//3.- Crea un **objeto** de nombre **FullStackDeveloper** que tenga las propiedades: **array lenguajes, array proyectos**

let fullStackDeveloper = {
    arrayLenguajes: [],
    arrayProyectos: []
}

//4.- Crea un **objeto** de nombre **Perro** que tenga las propiedades: **nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)**

let Perro = {
    nombre: 'NombrePerro',
    raza: 'RazaPerro',
    color: 'ColorPerro',
    edad: 3,
    ladrar: function() {
        console.log('¡Guau guau!');
    },
    popo: function() {
        return Math.random() * 3;
    }
}

//5.- Dado un **objeto** de nombre **Portatil** obtén el valor de la propiedad **marca con .marca** guardándolo en la variable **marcaPortatil**

let Portatil = {
    marca: "HP"
    modelo: "1000"
}
let marcaPortatil = Portatil.marca;

//6.- Dado un **objeto** de nombre **Portatil** obtén el valor de la propiedad **marca con ["marca"]** guardándolo en la variable **marcaPortatil2**



let marcaPortatil2 = Portatil['marca']

//7.- Dado un **objeto** de nombre **Concierto** obtén el valor de la propiedad **array grupos** guardándolo en la variable **grupos**

let Concierto = {
    grupos: ['Greta Van Fleet', 'Rival Sons', 'Jacob Banks']
    cartelera: ['Metallica', 'AC/DC', 'Iron Maiden']
    fecha: '07/12/2023'
};


let grupos = Concierto.grupos;

//8.- Dado un **objeto** de nombre **Led** obtén el valor de las propiedades **rojo, verde y azul** guardándolo en la variable **array RGB[Rojo, Verde, Azul]**

let Led = {
    rojo: 1,
    verde: 2,
    azul: 3
}

let arrayRGB = [Led.rojo, Led.verde, Led.azul]

//9.- Dado un **objeto** de nombre **Portatil** modifica el valor de la propiedad **modelo** por el valor **P345**

Portatil.modelo = "P345"

//10.- Dado un **objeto** de nombre **Concierto** añade el valor **Guns N' Roses** a la propiedad **cartelera**

Concierto.cartelera.push("Guns N' Roses");

//11.- Dado un **objeto** de nombre **Concierto** modifica el valor de la propiedad **fecha** por el valor **new Date() (fecha de hoy)**

Concierto.fecha = new Date();

//12.- Dado un **objeto** de nombre **Impresora** modifica el valor de la propiedad **imprimiendo** por el valor **objeto con propiedades: nombreArchivo, copias, numPaginas**

let Impresora = {
    modelo: 'HP',
    velocidad: 'rápida',
    imprimiendo: false
};

Impresora.imprimiendo = {
    nombreArchivo: '',
    copias: 3,
    numPaginas: 17
};

//13.- Crea un **objeto** de nombre **Noticia** que tenga las propiedades: **titular, cuerpo**

let Noticia = {
    titular: 't1',
    cuerpo: 'body'
};

//14.- Crea un **objeto** de nombre **Persona** que tenga las propiedades: **nombre, apellidos, edad**

let Persona = {
    nombre: 'Nombre',
    apellidos: 'Apellidos',
    edad: 30
};

//15.- Crea un **objeto** de nombre **Avion** que tenga las propiedades: **numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando'**

let Avion = {
    numPasajeros: 0,
    despegar: function() {
        console.log('Despegando');
    },
    volar: function() {
        console.log('Llegando al destino');
    },
    aterrizar: function() {
        console.log('Aterrizando');
    }
};

//16.- Crea un **objeto** de nombre **Paquete** que tenga las propiedades: **array contenido con todos los objetos que contenga el paquete**

let Paquete = {
    contenido: ['libro', 'cazuela', 'botella']
};

//17.- Crea un **objeto** de nombre **Pais** que tenga las propiedades: **numHabitantes, continente, gentilicio**

let Pais = {
    numHabitantes: 0,
    continente: '',
    gentilicio: ''
};

//18.- Dado un **objeto** de nombre **O_Error** obtén el valor de la propiedad **codigo** guardándolo en la variable **codError**

let O_Error = {
    codigo: '404',
    mensaje: 'Error'
};

let codError = O_Error.codigo;

//19.- Dado un **objeto** de nombre **Grupo** obtén el valor de la propiedad **array integrantes** guardándolo en la variable **integrantes**

let Grupo = {
    integrantes: ['Persona1', 'Persona2', 'Persona3'],
    nombre: 'Grupo Musical'
};

let integrantes = Grupo.integrantes;

//20.- Dado un **objeto** de nombre **Impresora** obtén el valor de la propiedad **objeto tinta{rojo, verde, azul}** guardándolo en la variable **nivelesTinta**

let Impresora = {
    tinta: {
        rojo: '20%',
        verde: '75%',
        azul: '30%'
    },
    modelo: 'HP'
};

let nivelesTinta = Impresora['tinta'];

//21.- Dado un **objeto** de nombre **Pantalla** obtén el valor de la propiedad **array bidimensional pixeles** guardándolo en la variable **pixeles**

let Pantalla = {
    bidimensionalPixeles: ['1', '0', '1', '0']
    marca: 'LG'
}

let pixeles = Pantalla.bidimensionalPixeles

//22.- Dado un **objeto** de nombre **Movil** obtén el valor de la propiedad **especificaciones con ["especificaciones"]** guardándolo en la variable **especificaciones**

let Movil = {
    especificaciones: ["Pantalla", "Cámara", "Botones"],
    marca: 'OnePlus'
};

let especificaciones = Movil["especificaciones"];

//23.- Dado un **objeto** de nombre **Grupo** modifica el valor de la propiedad **numIntegrantes** por el valor **5**

let Grupo = {
    nombre: "Vegan Wolves",
    genero: "Rock",
    numIntegrantes: 4
};

Grupo.numIntegrantes = 5

//24.- Dado un **objeto** de nombre **Pantalla** modifica el valor de la propiedad **dimensiones** por el valor **1920x1080**

let Pantalla = {
    marca: "LG",
    tipo: "Oled",
    dimensiones: "1280x720"
};

Pantalla.dimensiones = "1920x1080";

//25.- Dado un **objeto** de nombre **Led** modifica el valor de la propiedad **encendido** por el valor **false si vale true y true si vale false**

let Led = {
    color: "rojo",
    brillo: 80,
    encendido: true
};

Led.encendido = false;

//26.- Dado un **objeto** de nombre **Movil** modifica el valor de la propiedad **temperatura** por el valor **20º**

let Movil = {
    especificaciones: ["Pantalla", "Cámara", "Botones"],
    marca: 'OnePlus'
    temperatura: 90
};

Movil.temperatura = 20;
