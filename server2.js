const express = require("express");
const app = express(); // we have imported the express in app this is like a blueprint
const db = require("./mongodb"); // we are exporting the mongodb file here
const person = require("./models/person");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("hello ashutosh what are you doing right now!!!!");
});

app.get("/paneer", function (req, res) {
  var paneer = {
    name: "kadhai paneer",
    price: 290,
    restaurant: "BIKANER HOTEL",
    size: "full plate",
  };
  res.send(paneer);
});

app.post("./person", function (req, res) {});

app.listen(3000, () => {
  console.log("server is listening on port on 3000"); // this messege actually shows that our server is live......
}); // the port number on which we get the following response.

// there are lot of method by which client and server sends and recieves the data according to their needs :
// 1. GET   2. POST   3. PATCH  4. DELETE

// GET: this methods used generally to request the data from the server
// example suppose you enter a URL on the browser, then this browser sends the GET request to fetch the webpage

// bodyParser changes the format of the in which we want no matter in which format the data is coming it will do some modification and give the data in which we want
// POST method is generally for saving the data on an endpoint or a specific api

// now the post method that we have created using callback function is quite complex and not readable to avoid this we use
// async and await

// app.post("./person", function (req, res) {
//   const data = req.body; // assuming that the request body contains the person data ...
//const newperson = new person();
// newperson.name = data.name;
// newperson.work = data.work;
// newperson.email = data.email;
// newperson.address = data.address;
// newperson.salary = data.salary;
// newperson.age = data.age;  // instead of writing this much we simply do it other way
//   const newperson = new person(data); // data has been filled in this newperson variable
//   newperson.save((error, person) => {
//     if (error) {
//       console.log("error saving person", error);
//       res.status(500).json({ error: "internal server error" });
//     } else {
//       console.log("data saved successfully");
//       res.status(200).json(person);
//     }
//   });
// });

// currently working on this file
