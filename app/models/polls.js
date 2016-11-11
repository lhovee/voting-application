'use strict';

var mongoose = require('mongoose');
var pollSchema = mongoose.Schema({
	// Each entry in the database has one github identifier
	github: {
		id: String,
		displayName: String,
		username: String,
		publicRepos: Number
	},
	
	// Each entry also has a single poll
	// If a user adds more than one poll, there will be one entry for each poll
	// You can find all polls belonging to a user by checking the github.id on each poll
	poll: {			
		name: String,
		option1: {
			name: String,
			nrVotes: Number
		},
		option2: {
			name: String,	
			nrVotes:Number
		}
	}

	
});
pollSchema.methods.addPollOption = function (newOptName) {
	// Use "var myPoll = mongoose.findOne()" to select the correct poll based on
	// github ID and poll name.
	
	// Call myPoll.addPollOption() to add a new option to the poll
	
	// Consider adding a check in here to see if the option name already exists
	var nrOptions = this.poll.options.count;
	this.poll.options[nrOptions].name = newOptName;
	this.poll.options[nrOptions].nrVotes = 0;
	
	// Currently always returns true
	// Change later to return false if we fail to add the new option
	return true;
	
	// "this" refers to the current schema instance (probably)
};

var poll = mongoose.model('poll', pollSchema);

module.exports = poll;


/*

		poll: {			
		name: String,
		options: [{		// Variable number of options
			name: String,
			nrVotes: Number
		}]
	}
	
*/