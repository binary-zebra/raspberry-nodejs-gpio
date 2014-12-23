raspberry-nodejs-gpio
=====================

Control Raspberry GPIO/LED with NodeJS

## Installation

To use this software you need to install Express and wiringPi for Node.

    npm install wiring-pi
    npm install express
    
    
## Startup

When you want to hardware control the GPIOs you need to start the app.js as a super user

    sudo node app.js
    
The server should start on port 3000, like http://localhost:3000/