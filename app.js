var wpi = require('wiring-pi');
var express = require('express')
var app = express()


wpi.setup('gpio');


app.get('/', function (req, res) {
	res.sendFile('index.html', {root: './public'});
});


app.get('/status/:pin', function (req, res){

	var pin = parseInt(req.params.pin);
	
	wpi.pinMode(pin, wpi.modes.OUTPUT);
	
	var status = wpi.digitalRead(pin);

	res.json({
		'message' : 'OK',
		'pin' : pin,
		'status' : status 
	});
	
});

app.get('/toggle/:pin', function (req, res){

	var pin = parseInt(req.params.pin);
	
	wpi.pinMode(pin, wpi.modes.OUTPUT);
	
	var status = wpi.digitalRead(pin);
	
	var new_status = 1;
	
	if (status) {
		
		new_status = 0;
		
	}
	
	wpi.digitalWrite(pin, new_status);
	
	res.json({
		'message' : 'OK',
		'pin' : pin,
		'status' : new_status 
	});
	
});



app.get('/on/:pin', function (req, res){

	var pin = parseInt(req.params.pin);
	
	wpi.pinMode(pin, wpi.modes.OUTPUT);
	
	console.log(wpi.digitalWrite(pin, wpi.HIGH));

	res.send(JSON.stringify({
		'message' : 'OK',
		'pin' : pin
	}));
	
});

app.get('/off/:pin', function (req, res){

	var pin = parseInt(req.params.pin);
	
	wpi.pinMode(pin, wpi.modes.OUTPUT);
	wpi.digitalWrite(pin, wpi.LOW);
	
	res.send(JSON.stringify({
		'pin' : pin,
		'message' : 'OK'
	}));
	
});

var server = app.listen(3000);

