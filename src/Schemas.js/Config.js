const { model, Schema } = require("mongoose");

let ConfigSchema = new Schema({
  Guild: String,
  TicketCategory: Number,
  TicketCommandToggle: Boolean,
  TicketPanelToggle: Boolean,
  TicketPanelTitle: String,
  TicketPanelDescription: String,
  TicketPanelFooter: String,
  TicketPanelImage: String,
  TicketOpenEmoji: String,
});

module.exports = model("ConfigSchema", ConfigSchema);