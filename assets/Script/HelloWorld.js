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
        const socket = io('ws://localhost:5001');
        socket.on('connected', function() {
            console.log('connected --- ');
        });
    },

    // called every frame
    update: function (dt) {

    },
});
