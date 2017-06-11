var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NoteSchema = new Schema({

	text: {
		type: String,
		required: true
	},

	article: {
		type: schema.Types.ObjectId,
		ref:"Article"
	}
});

var Note = mongoose.model("Note", NoteSchema);
