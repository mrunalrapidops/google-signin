const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use( //use middelware
    new GoogleStrategy({    
        callbackURL:'auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        console.log('passport callback funciton');
        console.log(profile);  
    })
)
//Strategy diffrent ways to login
//oprations for google strat