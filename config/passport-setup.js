const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
//const User = require('../models/user-model');
passport.use( //use middelware
    new GoogleStrategy({    
        callbackURL:'auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        console.log('passport callback funciton');
        console.log(profile); 
        var username= profile.displayName;
        var googleid= profile.id;
        
    })
)
//Strategy diffrent ways to login
//oprations for google strat