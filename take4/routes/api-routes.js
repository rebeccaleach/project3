var Comic = require("../models")["Comic"];

module.exports = function(app) {
	app.get('/api/', function(req, res) {
		Comic.findAll({})
			.then(function(result) {
				return res.json(result);
			});
	});
}