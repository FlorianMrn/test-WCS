const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASS}@cluster0-o5plw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    keepAlive : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("Connected to MongoDB")
})
.catch( (err) => {
    console.error(error);
})

mongoose.set("debug", true);
mongoose.Promise = Promise;

module.exports.Argonaute = require('./argonautes');