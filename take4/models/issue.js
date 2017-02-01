'use strict';
module.exports = function(sequelize, DataTypes) {
  var Issue = sequelize.define('Issue', {
    comicID: DataTypes.INTEGER,
    comic: DataTypes.STRING,
    issueNUMBER: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Issue;
};