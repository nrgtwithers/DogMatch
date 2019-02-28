const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose');
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
require('dotenv').config();

const app = express()

// Route requires
const user = require('./routes/user');
const breed = require('./routes/breeds')

var mongoConnectUrl = process.env.MONGODB_URI;

mongoose.connect(mongoConnectUrl, { useNewUrlParser: true, autoIndex: false });

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
		secret: process.env.SESSION_SECRET, //pick a random string to make the hash that is generated secure
		store: new MongoStore({
			url: mongoConnectUrl,
			autoReconnect: true
		}),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user)
app.use('/breed', breed)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Starting Server 
app.listen(process.env.PORT, () => {
	console.log(`App listening on PORT: ${process.env.PORT}`)
})

