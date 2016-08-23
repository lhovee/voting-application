'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Polls = new Schema({
	options: [String],
	id: Schema.Types.ObjectId,
	title: String
});

module.exports = mongoose.model('polls', Polls);