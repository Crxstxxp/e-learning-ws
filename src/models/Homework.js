const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaEntrega: { type: Date, required: true },
  encargo: { type: Schema.Types.ObjectId, ref: "Encargo", required: true },
  alumno: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
});

module.exports = mongoose.model("Tarea", tareaSchema);
