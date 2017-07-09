const { BasicStrategy } = require('passport-http');
const express = require('express');
const jsonParser = require('body-parser').json();
const passport = require('passport');
const moment = require('moment');
const { User } = require('./models');
const router = express.Router();

router.use(jsonParser);

const basicStrategy = new BasicStrategy((username, password, callback) => {
  let user;
  User.findOne({ username: username })
    .exec()
    .then(_user => {
      user = _user;
      if (!user) {
        return callback(null, false, { message: 'Incorrect username' });
      }
      return user.validatePassword(password);
    })
    .then(isValid => {
      if (!isValid) {
        return callback(null, false, { message: 'Incorrect password' });
      } else {
        return callback(null, user);
      }
    })
    .catch(err => console.log('Invalid username or password'));
});

router.use(
  require('express-session')({
    secret: 'something something',
    resave: false,
    saveUninitialized: false
  })
);

passport.use(basicStrategy);
router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

function loggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.json({ redirect: '/login', message: 'Please sign in' });
  }
}

// GET for user to sign in
router.get(
  '/',
  passport.authenticate('basic', {
    session: true,
    failureRedirect: '/login'
  }),
  (req, res) => {
    res.json({ user: req.user.apiRepr(), message: 'Sign in successful' });
  }
);

// GET for user session (protected, must be signed-in already and have session cookie)
router.get('/', loggedIn, (req, res, next) => {
  res.json({ user: req.user.apiRepr() });
});

// GET for user to sign out
router.get('/', (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

// POST for creating new user account
router.post('/login', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'No request body' });
  }
  if (!('username' in req.body)) {
    return res.status(422).json({ message: 'Missing field: username' });
  }

  let { username, password, firstName, lastName } = req.body;

  if (typeof username !== 'string') {
    return res.status(422).json({ message: 'Incorrect field type: username' });
  }

  username = username.trim();

  if (username === '') {
    return res
      .status(422)
      .json({ message: 'Incorrect field length: username' });
  }

  if (!password) {
    return res.status(422).json({ message: 'Missing field: password' });
  }

  if (typeof password !== 'string') {
    return res.status(422).json({ message: 'Incorrect field type: password' });
  }

  password = password.trim();

  if (password === '') {
    return res
      .status(422)
      .json({ message: 'Incorrect field length: password' });
  }

  User.find({ username })
    .count()
    .exec()
    .then(count => {
      if (count > 0) {
        return res.status(422).json({ message: 'Username already taken' });
      }
      return User.hashPassword(password);
    })
    .then(hash => {
      return User.create({
        username: username,
        password: hash,
        firstName: firstName,
        lastName: lastName,
        savedBreweries: Brewery
      });
    })
    .then(user => {
      return res
        .status(201)
        .json({
          user: user.apiRepr(),
          message: 'New account created! Please sign in'
        });
    })
    .catch(err => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// POST (password protected, must have session cookie) for adding a new adjustment entry

router.get('/test', (req, res)=> {
  res.json({message:'test recived'})
})

module.exports = { router };
