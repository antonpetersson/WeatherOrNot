var express = require('express');
var router = express.Router();
var request = require('request');




/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', {'body':''});
});

router.post('/weather', function(req, res, next){
  let apiKey = '4072d80120414ea70aa7b8fc61bb0b61';
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  request(url, function (error, response, body) {
      body = JSON.parse(body);

      if(error && response.statusCode != 200){
        throw error;
      }

    res.render('index', {body : body});

   });

});

module.exports = router;
