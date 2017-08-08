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

// GET for user to login in
router.post(
  '/logon',
  passport.authenticate('basic', {
    session: true,
  }),
  (req, res) => {
    res.json({ user: req.user.apiRepr(), message: 'Sign in successful' });
  }
);

// GET for user session (protected, must be signed-in already and have session cookie)
router.get('/me', loggedIn, (req, res, next) => {
  res.json({ user: req.user.apiRepr() });
  console.log(req.user);
});

// GET for user to sign out
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.send({message:'Sign out successful'});
  });
});

// POST request for adding new user
router.post('/create', (req, res)=> {
  if (!req.body) {
    return res.status(400).json({message: 'no body found'});
  }
  const {username, password, firstName, lastName, savedBrews} = req.body;
  if (typeof username !== 'string') {
  return res.status(422).json({message: 'Please enter a username'});
}
	password = password.trim();

	if (password === '') {
		return res.status(422).json({message: 'Incorrect field length: password'});
	}

	user
		.find({username})
		.count()
		.exec()
		.then(count => {
			if (count > 0) {
				return res.status(422).json({message: 'Username already exists, please choose a new one'});
			}
			return user.hashPassword(password);
		})
		.then(hash => {
			return user
				.create({
					username: username,
					password: hash,
					firstName: firstName,
					lastName: lastName
				});
		})
		.then(user => {
			return res.status(201).json({user: users.apiRepr(), message: 'New account created! Please sign in'});
      res.redirect('/login')
		})
		.catch(err => {
			res.status(500).json({message: 'Internal server error'});
		});
});
// POST for adding brewery to fav list
// router.post('/update', loggedIn, (req, res, next)=> {
//   if (!req.body) {
//       return res.status(400).json({message:'no update found'})
//   }
//   user.findByIdAndUpdate(req.user._id,
//     { "$push": { "beweries": req.body.brewsent } },
//     { "new": true, "upsert": true },
//      (err, user) => {
//         if (err) throw err;
//         console.log(user);
//     }
// );

// Delete for removing brewery fom list.


module.exports = { router };
