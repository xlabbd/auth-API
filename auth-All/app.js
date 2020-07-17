const express = require('express');
const app = express();
const passport = require('passport');
const flash    = require('connect-flash');
const cookieParser = require('cookie-parser');
const session      = require('express-session');

// Google config
require('./config/googleConfig')(passport);

app.use(cookieParser()); // read cookies (needed for auth)
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(session({ secret: 'morol' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Router
require('./routers/authRouter')(app, passport);

module.exports = app;