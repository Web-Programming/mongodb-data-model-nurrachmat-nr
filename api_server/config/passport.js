const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, (username, password, done) => {
    User.findOne({
        email: username
    }, (err, user) => {
        if (err) {
            return done(err);
        }
        //jika user tidak ditemukan
        if (!user) {
            return done(null, false, {
                message: 'Incorrect username'
            })
        }
        //jika password salah
        if (!user.validPassword(password)) {
            return done(null, false, {
                message: 'Incorrect password'
            })
        }
        return done(null, user);
    })
}))