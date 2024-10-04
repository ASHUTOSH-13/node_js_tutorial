// mongoDB driver is essential for nodejs with mongoDb, it act as a bridge between nodejs application and mongoDB server....
// what this driver does is that it converts the javascript language of the nodejs into the language the mongoDB can understand...
// for this we use npm install mongodb, but we are not going to use this instead we are going to mongoose that is a ODM library
// ODM means object data modelling library.. it is a lot more easier... for this we simply do npm install mongoose...

const mongoose = require("mongoose");

// define the mongoDB url
//const mongodbURL = "mongodb://localhost:27017/mydatabase"; // mydatabase is the name of the database that we want to create
const mongodbURL =
  "mongodb://ashutoshkalash03:123Ashu890@cluster0-shard-00-00.no0om.mongodb.net:27017,myDatabase?retryWrites=true&w=majority";
// establishing connection..

mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// get the default connection
// mongoose maintains a default connection objects representing the mongoDB connetions ....

const db = mongoose.connection;

db.on("connected", () => {
  console.log("the database is connected");
});

db.on("error", (err) => {
  console.log("the error has occured");
});

db.on("disconnected", () => {
  console.log("the database is disconnected");
});

//export the database connection

module.exports = db;

// model is the blueprint of the database
// once you created the database you can do the CRUD operation

// dotenv is a module in nodejs that is used to manage configuration variable and sensitive information in your application ,
// it is particularly useful in keeping sensitive data like apis, database connection strings and other environment specific configurations seperate from your code
// npm install dotenv
