var express = require('express');
var Server = require('dnode');
var nQuery = require('../');

var example = function (client, conn) {

    conn.on('$', function () {
    
        setInterval( function() {
            $('body').html(new Date());
        }, 100 );
        
        ready();
    });
    
};

var app = express.createServer();
app.use(nQuery.bundle);
app.use(express.static(__dirname + '/public'));
app.listen(3000);

Server()
    .use(example)
    .use(nQuery)
    .listen(app);
    
