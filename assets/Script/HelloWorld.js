cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'hellllllllllo!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        const io = window.io;
        
        console.log('try to connect')
        const ws = new WebSocket("ws://127.0.0.1:5001");
        ws.onopen = function (event) {
            ws.send('-------');
            console.log("Send Text WS was opened.");
        };
        ws.onmessage = function (event) {
            console.log("response text msg: " + event.data);
        };
        ws.onerror = function (event) {
            console.log("Send Text fired an error");
        };
        ws.onclose = function (event) {
            console.log("WebSocket instance closed.");
        };


    },

    // called every frame
    update: function (dt) {

    },
});
