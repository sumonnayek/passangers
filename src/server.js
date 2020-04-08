const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const cors = require('cors');

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

Mongoose.connect("mongodb://localhost:27017/passengerList", { useNewUrlParser: true, useUnifiedTopology: true });

const PassengerModel = Mongoose.model("passenger", {
    id: String,
    name: String,
    gender: String,
    phone: Number,
    email: String,
    departure: String
});

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.post("/addPassenger", cors(corsOptions), async (request, response) => {
    try {
        var passenger = new PassengerModel(request.body);
        var result = await passenger.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/passengers", cors(corsOptions), async (request, response) => {
    try {
        var result = await PassengerModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/passenger/:id", async (request, response) => {
    try {
        var passenger = await PassengerModel.find({id: request.params.id});
        console.log(request.body);
        response.send(passenger);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.put("/updatePasenger/:id", async (request, response) => {
    try {
        var passenger = await PassengerModel.find({id: request.params.id}).exec();
        if(!passenger) response.status(404).send('no such passenger');
        // console.log(request.params.id);
        console.log(request.body)
        passenger.set(request.body);
        var result = await passenger.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.delete("/deletePassenger/:id", async (request, response) => {
    try {
        var result = await PassengerModel.remove({ id: request.params.id });
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Setup server port
var port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening at :" + port);
});