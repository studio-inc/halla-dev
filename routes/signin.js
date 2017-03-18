var express = require('express');
router = express.Router();
var mongoose = require('mongoose');

var db = mongoose.connection;


router.get('/', function(req, res) {

    res.render('signin', { title: "Sign In" });

    db.once('open', function() {
        console.log("we're connected");
    })

});

module.exports = router;