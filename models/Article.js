var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

	title: {
		type: String
	},

	date:{
		type: Date
	},

	url:{
		type: String
	},

	note:[{
		type: Schema.Types.ObjectId,
		ref: "Note"
	}]
});

var Article = mongoose.model("Article", articleSchema);
