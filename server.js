const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var cors = require('cors');

// const db = 'mongodb+srv://rj123:rj123@habit66-laxik.mongodb.net/test?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3002;
const db = process.env.MONGODB_URI || "mongodb://localhost/habitlist";

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use('/api/habits', require('./routes/api/habits'));


// Connect to Mongo db
const connectDB = async() => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected.')
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
connectDB();

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
