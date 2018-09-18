const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Crea una tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actuaiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Actuaiza una tarea', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}