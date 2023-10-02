to_number = "";
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
draw_apple = "";
x = 0;
y = 0;

function preload() {
    apple = loadImage("apple.jpg");
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    console.log("Why?");
    recognition.start();
}

recognition.onresult = function(event) {
        var content = event.results[0][0].transcript;
        to_number = Number(content);
        if (Number.isInteger(to_number)) {
        console.log("Started drawing apple")
        draw_apple = "set";
        hapy();
        }
        else {
            console.log("Speech not recognised");
            console.log(to_number);
        }
    }


function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width-400,screen_height-200);
    canvas.position(200, 100);
    console.log(canvas.x, canvas.y);
}

function hapy() {
    if (draw_apple == "set") {
    for(var i=1; i <= to_number; i++) {
        x = Math.floor(Math.random() * (screen_width-450));
        y = Math.floor(Math.random() * (screen_height-250));
        console.log(x+200, y+100, i);
        image(apple, x, y, 50, 50);
    }
    draw_apple = "";
    }
}

