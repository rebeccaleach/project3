'use string';

module.exports = function(sequelize, DataTypes) {
	var Comic = sequelize.define('Character', 
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