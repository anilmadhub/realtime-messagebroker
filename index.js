var Stomp = require('stompjs');

var client  = Stomp.overTCP('127.0.0.1', 61613);

var username = "";
var password = ""; 

client.connect(
    username,
    password,
    function() {
        
        client.subscribe("/queue/REGIE",

            (message) => {

                if (message.body) {
                    // A developper un endpoint API pour le message avant de le consommer
                    console.log("Got message with body: " + message)
                    message.ack();
                } else {
                    console.log("Got empty message");
                }

            },

            { priority: 9 }

        );
        //client.send("/queue/Regie", { priority: 9 }, "Hello, STOMP");
    },
);