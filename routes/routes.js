let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    res.json({'message': 'Hello there! This is my first Heroku app.'})
});

module.exports = router