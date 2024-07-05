const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encargoSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  grupo: { type: Schema.Types.ObjectId, ref: "Grupo", required: true },
});

module.exports = mongoose.model("Encargo", encargoSchema);
