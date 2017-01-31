var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "comicsDB"
});

connection.connect(function (err) {
	if (err) {
		console.log("Holy smokes, Batman, there's been an error! " + err.stack);
		return;
	}
	console.log("The bat signal is working at id " + connection.threadId);
});

module.exports = connection;