'use strict';

var Poll = require('../models/polls.js');
var mongoose = require('mongoose');

function pollHandler () {

	this.getPolls = function (req, res) {
		// Use Polls.find(cb) to get the polls that match our Github ID
		// Return the raw poll data through res.json() so that the client can display it
		
		Poll
			.findOne({ 'github.id': req.user.github.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.poll);
			});
	};

	/* This function creates a new poll */
	this.addPoll = function (req, res) {
		console.log("PollName: ", req.body.pollName);
		console.log("Option1: ", req.body.option1);
		console.log("Option2: ", req.body.option2);
		
		var myPoll = new Poll();
		myPoll.save();
		
		
		// Check to see that this user doesn't have a poll with the same name
		// Create a new Poll() using polls.js
		// Tell MongoDB to add it to the database using mongoose.save(cb)
		// Just to make sure it worked, use Poll.find(cb) to make sure it was added
	};
	
	/* This function logs a vote to an existing poll */
	this.logVote = function (req, res) {
		console.log("Logging a vote to poll: ", req.body.pollName);
		console.log("The vote is for option: ", req.body.voteOption);
		
		// Find a poll with the matching Github ID and poll name
		// Find an option with the matching vote option name
		// Increment the number of votes for that option
		// Use mongoose.save(cb) to commit the change to MongoDB
		// Optional: use Poll.find(cb) to make sure the vote count went up by one
	};

	this.resetPoll = function (req, res) {
		// This will only reset the first option's vote count
		// Change it later to reset all options' vote counts
		Poll
			.findOneAndUpdate({ 'github.id': req.user.github.id, 'poll.name': req.body.pollName }, { 'poll.options[0].nrVotes': 0 })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.nrPolls);
				}
			);
	};

}

module.exports = pollHandler;
