const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grupoSchema = new Schema({
    nombre: { type: String, required: true },
    profesor: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    alumnos: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }]
});

module.exports = mongoose.model('Grupo', grupoSchema);
