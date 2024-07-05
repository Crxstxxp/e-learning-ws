const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  tipo: { type: String, enum: ["profesor", "alumno"], required: true },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
