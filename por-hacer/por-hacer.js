const fs = require('fs')

let listadoPorHacer = []

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    })
}

const cargarDB = () => {
    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer)

    guardarDB();

    return porHacer
}
const getListado = () => {
    cargarDB()
    return listadoPorHacer
}
const actualizar = (descripcion, completado = true) => {
    cargarDB()

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}

borrar = (desc) => {
    cargarDB()
    let listado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== desc
    })

    if (listado.length === listadoPorHacer.length) {
        return false
    } else {
        listadoPorHacer = listado
        guardarDB()
        return true
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}