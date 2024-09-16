const express = require("express");
const app = express(); // Importing express
const db = require("./mongodb"); // MongoDB connection

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("welcome to our hotel");
});

// Importing person routes
const personRoutes = require("./routes/personRoutes");
const menuitemroutes = require("./routes/menuitemroutes");
app.use("/menu", menuitemroutes);
app.use("/person", personRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000"); // Message shows the server is live
});

// lets understand the CRUD operation:

// C = CREATE --->  POST METHOD
// R = READ   ---> GET METHOD
// U = UPDATE ---> PUT/PATCH METHOD
// D = DELETE ---> DELETE METHOD

// now one thing we can clearly see there are lot of get and post req and also parameterised apis which veery hectic to handle
// which reduces the code readablity for this we use express router
// express router is a way to modularise and organise your route handling code in an express.js application....
