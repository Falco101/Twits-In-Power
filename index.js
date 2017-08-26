const http = require('http');
const https = require('https');
const express = require('express');
const fs = require('fs');
const app = express();

const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('certificate.key', 'utf8');
const credentials = {
    key: privateKey,
    cert: certificate
};

const httpPort = 8080;
const httpsPort = 4343;

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
httpServer.listen(httpPort, function(){
    console.log("http server running on port" + httpPort);
});
httpsServer.listen(httpsPort, function(){
    console.log("https server running on port " + httpsPort);
});

app.get('/', function(request, response){
    response.send('index');
});

