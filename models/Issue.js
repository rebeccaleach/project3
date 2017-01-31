'use strict';

module.exports = function(sequelize, DataTypes) {
	var Comic = sequelize.define('Issue', 
	{
		comicID: DataTypes.INTEGER,
		comic: DataTypes.STRING,
		issueNUMBER: DataTypes.INTEGER

	}, {
		classMethods: {
			associate: function(models) {
				// ????????
			}
		}
	});
	return Issue;
};