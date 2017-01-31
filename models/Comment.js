'use strict';

module.exports = function(sequelize, DataTypes) {
	var Comic = sequelize.define('Comment', 
	{
		issueID: DataTypes.INTEGER,
		comicID: DataTypes.INTEGER,
		content: DataTypes.STRING,
		username: DataTypes.STRING

	}, {
		classMethods: {
			associate: function(models) {
				// ????????
			}
		}
	});
	return Comment;
};