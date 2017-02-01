'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comic = sequelize.define('Comic', {
    // id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comic;
};