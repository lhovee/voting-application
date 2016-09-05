'use strict';

var Poll = require('../models/polls.js');
var mongoose = require('mongoose');

function PollHandler () {
	this.addPoll = function (req, res) {
		Poll
			.findOneAndUpdate({  _id: req.body._id }, {  $set: {
            pollName: req.body.pollName,
            options: req.body.options}})
			.exec(function (err, result) {
				if (err) { throw err; }

				if (result) {
                    res.json(result);
                } else {
                    var newDoc = new Poll({ 'pollHandler': req.body.pollName });
                    newDoc.save(function (err, doc) {
                        if (err) { throw err; }

                        res.json(doc);
			});
	}
});};
}

module.exports = PollHandler;