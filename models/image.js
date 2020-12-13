const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  path: {
    type: String,
    required: true,
    unique: true,
  },
  awsKey: {
    type: String,
    required: true,
    unique: true,
  },
  gallery: {
    type: String,
    required: true,
    unique: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Image", imageSchema);