var connection = require("./connection.js");

var orm = {
	selectAll: () => {
		var queryString = "SELECT * FROM burgers_db.burgers";
		console.log(queryString);

		connection.query(queryString, (err, res) => {
			console.log(res);
		});
	},

	insertOne: () => {
		var queryString = `INSERT INTO burgers_db.burgers(burger_name)
		VALUES ?`;
		var value;

		console.log(queryString);

		connection.query(queryString, value, (err, res) => {
			if (err) throw err;

			console.log(res);
		});
	}
};

module.exports = orm;
