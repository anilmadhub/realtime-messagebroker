# Realtime AMQ via stompjs

Simple Node.js App to listen and process & acknowledge queue messages in real time

Requirement: Node LTS - Version 10.15.5 +

## Setup

Clone and install all the depencencies
```
npm install
```

## Configuration

All the configuration is done in **config.js** ( host, port, username, password, queue )

## Options
The message can be processed directly in **client.subscribe()** or through an API endpoint using Axios.js in **processMessages()**.

## Running the script
```
node index.js
```

An alternate way to run the script is to use the **forever** command

## Using Forever
Installation:
```
npm install -g forever
```

Command:

```
forever start index.js
```
