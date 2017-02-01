'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    id: DataTypes.INTEGER,
    issueID: DataTypes.INTEGER,
    comicID: DataTypes.INTEGER,
    content: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comment;
};