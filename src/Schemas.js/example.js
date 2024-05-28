const { model, Schema } = require('mongoose')

let exampleSchema = new Schema({
		StringName: String,
		ArrayName: Array,
		NumberName: Number
})

module.exports = model('exampleSchema', exampleSchema)