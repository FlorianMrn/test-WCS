const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const db = require('./models/');
var mongoose = require('mongoose'); //remove it as you might already it
var ObjectId = mongoose.Types.ObjectId;


app.use(bodyParser.json());
app.use(cors());

const success = (res, payload) => {
    return res.status(200).json(payload)
};

app.get("/argonautes", async (req, res, next) => {
    try {
        const argonautes = await db.Argonaute.find({})
        return success(res, argonautes)
    } catch (err) {
        next({ status : 400, message : "failed to get Argonautes / " + err})
    }
});

app.post("/argonautes", async (req, res, next) => {
    try {
        const argonaute = await db.Argonaute.create(req.body)
        return success(res, argonaute)
    } catch (err) {
        next({ status: 400, message : "Failed to create an Argonaute / " + err})
    }
});

app.delete("/argonautes/:id", async (res, req, next) => {
    try {
        await db.Argonaute.findByIdAndRemove({_id : req.params.id})
        return success(res, "Argonaute deleted !" )
    } catch (err) {
        next({ status: 400, message : "Failed to delete an Argonaute / " + err})
    }
});

app.use( (err, req, res, next) => {
    return res.status(err.status || 400 ).json({
        status : err.status || 400,
        message : err.message || "Error processing request"
    })
});

app.listen(PORT, () => {
    console.log(`listenning on ${PORT}`);
});