let createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect("mongodb://localhost:27017/passengerList")
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log(`Could not connect to the database. Exiting now...${err}`);
    // process.exit();
  });

const PassengerModel = mongoose.model("passenger", {
  name: String,
  gender: String,
  phone: String,
  email: String,
  departure: String
});

app.post("/passengers", async (request, response) => {
  try {
    let passenger = new PassengerModel(request.body);
    let result = await passenger.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/passengers", async (request, response) => {
  try {
    let result = await PassengerModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/passengers/:id", async (request, response) => {
  // Validate Request
  if (!request.body) {
    return response.status(400).send({
      message: "passenger object can not be empty"
    });
  }

  let obj = {};
  if (request.body.name) {
    obj.name = request.body.name;
  }
  if (request.body.gender) {
    obj.gender = request.body.gender;
  }
  if (request.body.phone) {
    obj.phone = request.body.phone;
  }
  if (request.body.email) {
    obj.email = request.body.email;
  }
  if (request.body.departure) {
    obj.departure = request.body.departure;
  }
  // Find passenger and update it with the request body
  PassengerModel.findByIdAndUpdate(
    request.params.id,
    { $set: obj },
    { new: true }
  )
    .then(passenger => {
      if (!passenger) {
        return response.status(404).send({
          message: `passenger not found with id ${request.params.id}`
        });
      }
      response.send(passenger);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return response.status(404).send({
          message: `passenger not found with id ${request.params.id}`
        });
      }
      response.status(500).send({
        message: `Error updating passenger with id ${request.params.id}`
      });
    });
});

app.delete("/passengers/:id", async (request, response) => {
  try {
    let result = await PassengerModel.remove({ _id: request.params.id });
    console.log(request.params.id);
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Setup server port
let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening at :" + port);
});
