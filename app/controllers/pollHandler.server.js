'use strict';

var poll = require('../models/polls.js');
var github = require('../models/polls.js');
var mongoose = require('mongoose');

function pollHandler () {

	this.getPolls = function (req, res) {
		// Use Polls.find(cb) to get the polls that match our Github ID
		// Return the raw poll data through res.json() so that the client can display it
		
		poll
			.find({ 'github.id': req.user.github.id }, { 'poll.name': poll.name} )
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.poll.name);
			});
	};

	/* This function creates a new poll */
	this.addPoll = function (req, res) {
		poll	
			.findOneAndUpdate({ 'poll.name': req.body.pollName}, { 'poll.option1.name': req.body.option1}, { $inc: { 'poll.opiton1.nrVotes': 1 } }, { 'poll.option2.name': req.body.option2}, { $inc: { 'poll.option2.nrVotes': 1 } })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.poll.name);
				}
			);
	};
/*		
		console.log("PollName: ", req.body.pollName);
		console.log("Option1: ", req.body.option1);
		console.log("Option2: ", req.body.option2);
		
		
		// Check to see that this user doesn't have a poll with the same name

		// Create a new Poll() using polls.js
		var myPoll = new poll();
		github.id = req.user.github.id;
		myPoll.poll.pollName = req.body.pollName;
		myPoll.poll.option1.name = req.body.option1;
		myPoll.poll.option2.name = req.body.option2;
	
		// Tell MongoDB to add it to the database using mongoose.save(cb)
			myPoll.save();
*/
		// Just to make sure it worked, use Poll.find(cb) to make sure it was added
	


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
		poll
			.findOneAndUpdate({ 'github.id': req.user.github.id, 'poll.name': req.body.pollName }, { 'poll.options[0].nrVotes': 0 })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.nrPolls);
				}
			);
	};
}	


module.exports = pollHandler;
