var Stomp = require('stompjs');
var config = require('./config.js');
var client  = Stomp.overTCP(config.host, config.port);

client.connect(
    config.username,
    config.password,
    function() {        
        client.subscribe(config.queue,
            (message) => {

                if (message.body) {
                    // A developper un endpoint API pour le message avant de le consommer
                    console.log("Got message with body: " + message)
                    message.ack();
                } else {
                    console.log("Got empty message");
                }

            }, { 
                priority: 9 
            }

        );
    },
);