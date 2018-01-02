const passport = require('passport');

passport.serializeUser(function(user, done) {
    // console.log('serializeUser');
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    // console.log('deserializeUser');
    User.findById(id, function(err, user) {
        done(null, user);
    });
});