// server/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  age: {
    type: Number
  },

  income: {
    type: Number,
    default: 0
  },

  expenses: {
    type: Number,
    default: 0
  },

  savings: {
    type: Number,
    default: 0
  },

  investments: {
    type: Number,
    default: 0
  },

  goals: {
    type: [String],
    default: []
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
