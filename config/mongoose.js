// configuration for creating database connection
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://shreyashwaghmare0501:sS568LhHAgSLPOeD@cluster1.aw56i7y.mongodb.net/test`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
