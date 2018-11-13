var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});

router.get('/getData', function(req, res, next) {
  //解析get附带的数据
  var getData = req.query;

  //此处data可以从数据库请求数据
  var data = {data:"sqlData"};
  
  //返回请求的数据
  res.send(data);
});

module.exports = router;
