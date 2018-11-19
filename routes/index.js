var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function (req, res, next) {
	let path = req.path.split('/')[1];
	res.render('index', {
		path: path
	});
	// res.sendfile("./views/index.html");
});

router.get('/test', function (req, res, next) {
	res.render('index', {
		title: 'Express'
	});
	// res.sendfile("./views/index.html");
});

router.get('/getData', function (req, res, next) {
	//解析get附带的数据
	var getData = req.query;

	//此处data可以从数据库请求数据
	var data = {
		data: "sqlData"
	};

	//返回请求的数据
	res.send(data);
});

module.exports = router;