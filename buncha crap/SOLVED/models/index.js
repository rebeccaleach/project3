// index.js, brings everything together
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


/* WHY INDEX.JS?
 *
 * Since we define our models in separate places, we need another file to bring them together.
 * By saving them to the same object, we can associate the two. 
 *
 * Thankfully, the Sequelize CLI makes the file for us automatically.
 * 
 * Once all of our models are associated, we can export a model object 
 * to any part of the server that needs it. (our routes and server.js, essentially).
 *
 * While this extra step seems complex, the cli handles most of the heavy lifting.
 * Index.js will make it a cinch to create and associate data between multiple tables. 
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */


'use strict';

// DEPENDENCIES
// ============


var fs        = require('fs'); // Fileseeker: let's us read in the models
var path      = require('path');
var Sequelize = require('sequelize'); // Sequelize gets required here
var basename  = path.basename(module.filename); // this grabs the name of our model



// Determine the project environment 
//    (either set by the server (Heroku), or it's development)
// ===========================================================
var env       = process.env.NODE_ENV || 'development';
// Send the env to our config.json to determine which connection to use
var config    = require(__dirname + '/../config/config.json')[env];



// Our models and Sequelize information get saved here, so we can use them
// when we require index.js
var db = {};


// This sets up the actual connection
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}





// HOW SEQUELIZE HANDLES THE MODELS
// ================================

// This code finds every file in the models directory and uses 
// sequelize's import method to instantiate the models and their class methods.
// Note: It's auto generated by the Sequelize CLI
fs
  // go to our current directory and returns an array of filenames excluding '.' and '..'.
  .readdirSync(__dirname) 

  // filter out everything after .js, 
  // and don't include anything without a . (excludes dirs)
  // as well as the basename file (index.js)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })

  // we now have an array of file names minus the ".js" extension
  // save a model to our db object for each unfiltered file
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });



// make the name of the model in the object the same as the filename (minus the .js)
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// saves the sequelize connection and module to the object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// export it. (note: this gets exported when we run require the models dir)
module.exports = db;
