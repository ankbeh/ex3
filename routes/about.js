var express = require('express');
var router = express.Router();

/* GET About page. */
router.get('/', (req, res, next) => {
  res.render('about.pug', {title: 'About Us'})
});

module.exports = router;
