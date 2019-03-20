const express = require('express');
const app = express();
const authRouters = require('./routers/auth-routes');
const passportSetup = require('./config/passport-setup');
//const keys = require//
//set view engine
app.set('view engine','ejs');
app.get('/',(req,res)=>{
  res.render('home');
});
//set up routes
app.use('/auth',authRouters);//http://localhost:8080//auth/

//server call
app.listen(8080,()=>{
  console.log(" server listen on 8080");
})