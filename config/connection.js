var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "burgers_db"
});

connection.connect(error => {
	if (error) {
		console.error(`Error Connecting: ${error.stack}`);
		return;
	}

	console.log(`Connected as ID ${connection.threadId}.`);
});

module.exports = connection;
