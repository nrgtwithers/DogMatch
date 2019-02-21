const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const models = require('./models')
const user = require('./user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'cacao', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: models }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// routes
app.use('/user', user)

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/dogBreeds",
  {
    useMongoClient: true
  }
);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 3001;
app.listen(PORT);