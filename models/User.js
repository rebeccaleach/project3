'use strict';

module.exports = function(sequelize, DataTypes) {
	var Comic = sequelize.define('User', 
	{
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		avatarLINK: DataTypes.STRING,

	}, {
		classMethods: {
			associate: function(models) {
				// ????????
			}
		}
	});
	return User;
};