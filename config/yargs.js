const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('listar', 'contenido lista')
    .command('crear', 'crearas una nueva tarea', opts)
    .command('actualizar', 'actualizaras una tarea', opts)
    .command('borrar', 'borrado', opts)
    .help()
    .argv;

module.exports = {
    argv
}