'use strict';

module.exports = function(sequelize, DataTypes) {
	var Comic = sequelize.define('Comic', 
	{
		name: DataTypes.STRING,
		link: DataTypes.STRING

	}, {
		classMethods: {
			associate: function(models) {
				// ????????
			}
		}
	});
	return Comic;
};