const LocalStrategy = require("passport-local").Strategy;
const { getUserByUsername, getUserById } = require("./users");
const bcrypt = require("bcrypt");

function initializePassport(passport) {
  passport.use(
    new LocalStrategy(function verify(username, password, done) {
      getUserByUsername(username)
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "User not found" });
          }

          bcrypt.compare(password, user[0].password, (err, isMatch) => {
            
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Incorrect password" });
            }
          });
        })
        .catch((err) => done(err));
    })
  );

  passport.serializeUser((user, done) => {
    
    done(null, user[0].id);
  });

  passport.deserializeUser((id, done) => {
    getUserById(id)
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  });
  
}

module.exports = { initializePassport };
