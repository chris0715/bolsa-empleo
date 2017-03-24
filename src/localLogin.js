const PassportLocalStrategy = require('passport-local').Strategy;


const options = {
    usernameField: "email",
    passwordField: "password"
}

export default new PassportLocalStrategy(options, (username, password, done)=>{
   
   done(null, {
       username: 'ediaz',
       token: 'holaholahola'
   })
});


