const mongoose = require('mongoose');

const argonauteSchema = new mongoose.Schema({

    name: {
        type : String,
        unique : true,
        required : true
    }
});

const argonauteModel = mongoose.model("Argonaute", argonauteSchema);

module.exports = argonauteModel;