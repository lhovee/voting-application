'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Polls = new Schema({
 pollName: String,
 userId: mongoose.Schema.Types.ObjectId,
 options: [{optionName: String, votes: Number}]
});

module.exports = mongoose.model('polls', Polls);