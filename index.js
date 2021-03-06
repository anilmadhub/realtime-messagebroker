const Stomp = require('stompjs');
const config = require('./config.js');
const client  = Stomp.overTCP(config.host, config.port);
const axios = require('axios');

client.connect(
    config.username,
    config.password,
    () => {      
        client.subscribe(config.queue,
            (message) => {

                if (message.body) {
                    processMessages(config.url, message);
                } else {
                    console.log("Got empty message");
                }
            }, 
            { priority: 9  }
        );
    },
);


function processMessages(url, message) {

    axios.post(url, {
        message: message
    }).then(response => {
        console.log("Ajax reponse:", response.data );
        message.ack();

    }).catch(error => {
        console.log(error)
    })
}