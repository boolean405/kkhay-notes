const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    title: { type: String },
    text: { type: String },
    user: { type: Schema.Types.ObjectId, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("note", noteSchema);
