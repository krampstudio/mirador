// Import the interface to Tessel hardware
var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port.B);

ambient.on('ready', function() {

    ambient.setLightTrigger(0.075);
    ambient.setSoundTrigger(0.075);

    ambient.on('light-trigger', function(lightdata){
        console.log("Light level:", lightdata.toFixed(8));
    });
    ambient.on('sound-trigger', function(sounddata){
        console.log("Sound level:", sounddata.toFixed(8));
    });
});

ambient.on('error', function(err) {
    console.log(err);
});
// Turn one of the LEDs on to start.
//tessel.led[2].on();

//// Blink!
//setInterval(function() {
    //tessel.led[2].toggle();
    //tessel.led[3].toggle();
//}, 500);

//console.log("I'm blinking! (Press CTRL + C to stop)");
