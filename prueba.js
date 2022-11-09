const Contenedor = require("./index.js")

const products = new Contenedor("products.txt");

const prueba = async () => {
    let save = await products.save({
        title: "Buzo Seleccion Argentina",
        price: 32500,
        thumbnail: "https:argentina32500"
    });
    let getAll = await products.getAll();
    let getById = await products.getById(5);
    let deleteById = await products.deleteById(2);
    let deleteAll = await products.deleteAll();


    console.log(save);
    console.log(getAll);
    console.log(getById);
    console.log(deleteById);
    console.log(deleteAll);
};

prueba();