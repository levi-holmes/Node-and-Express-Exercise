var	express = require('express')
var server = express()
var levi = require('./me.json')


server.use ('/', express.static('./public'))

// "/" invokes home folder
server.get('/', function (request, response) {
	response.send("Go to /Levi to find out more about me")
})

server.get('/about', function (request, response) {
	console.log(request);

	response.send("I built a server!!!")
})

server.get('/contact', function (request, response) {
	response.send("Hit me up son!!!")
})

server.get('/levi', function (request, response) {
	response.json(levi)
})

server.get('/*', function (request, response) {
	response.status(404)
	var character = request.query.character;
	response.send("these are not the droids you are looking for!")
	console.log(request.query.character)
})

server.listen(8675)
