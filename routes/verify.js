//the code below has to do the following
/**
 * recieve lat and lon of user from signin
 * recieve phone number from signin
 * query database to see if there is a user like that
 * if yes, send back user details
 * if no send back no details
 * send phone number to neutrino api for verification
 * 
 * parameters to send back are:
 * username
 * lat lon
 * date of joining tho I have to read about date first
 * alias
 * phone
 */

//list and configure dependencies
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var db = mongoose.connection;

//define the schema to be used
var userSchema = mongoose.Schema({
    lat: Number,
    lon: Number,
    phone: Number
});

var user = mongoose.model('user', userSchema);

//router call goes here for post
router.post('/', function(req, res) {

    //get all the variables from the request body
   var phone = req.body.phone;
   var lat = req.body.lat;
   var lon = req.body.lon;


   //create the data model to check if use exists
   var newUser = new user({
       phone: phone
   });

   //query database to find user
   user.findOne({ phone: phone }, function(err, response) {
       if(response == null) {
           res.render('verify', { title: "Verify Phone Number" });
       } else {
           //res.render('verify', { title: "Verify Phone Number", phone: phone });
       }
   });

});

module.exports = router;