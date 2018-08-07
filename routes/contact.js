var express = require('express');
var nodemailer = require("nodemailer");
var account = require('./account.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.post('/send', function(req, res, next){
  var tranporter = nodemailer.createTransport({
    host: account.host,
    port: account.port,
    secure: account.secure,
    service: account.service,
    auth: {
      user: account.name,
      pass: account.password
    },
    logger: true,
    debug: true
  });
  var mailOptions = {
    form: 'Ankit <bumbuzz555.1@gmail.com>',
    to: 'bumbuzz555.1@gmail.com',
    subject: 'Website Submission',
    text: 'You have a new submission with the following details...Name: '+ req.body.name + ' Email: '+ req.body.email + ' Message: '+ req.body.message,
    html: '<p>You have a new submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };
  tranporter.sendMail(mailOptions, function(error,info){
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Sent: '+ info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
