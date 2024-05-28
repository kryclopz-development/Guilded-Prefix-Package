const { model, Schema } = require("mongoose");

let TicketSchema = new Schema({
  Guild: String,
  Active: Boolean,
  TicketNumber: Number,
  UserObj: Object
});

module.exports = model("TicketSchema", TicketSchema);