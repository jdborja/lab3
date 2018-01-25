
/*
 * GET home page.
 */

exports.view = function(req, res){
	var theWorld = req.params.userName;
	if(theWorld === undefined){
		theWorld = 'World';
	}
	console.log('Name is ' + theWorld);
  res.render('index', {
  	'name': theWorld,
  });
};
