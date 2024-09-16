const mongoose = require("mongoose");

// Define the person schema
const personschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "manager", "waiter"], // Mongoose will accept only these values, otherwise it will reject
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String, // Corrected the type here from 'string' to 'String'
  },
  salary: {
    type: Number,
    required: true,
  },
});

// Create and export the person model
const person = mongoose.model("person", personschema);
module.exports = person;
