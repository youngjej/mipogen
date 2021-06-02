const iconScale = 0.8;
const paperSize = 297;

let titleString = 'TITLE';
let desString = 'description';

let tempMode = true;
let textMode = false;
let imageMode = false;
let shapeMode = false;

var canvas;

function setup() {
    let canvasWidth = windowWidth*0.7;
    const canvasHeight = 650;
    const tabWidth = 120;


    canvas = createCanvas(canvasWidth, canvasHeight);

    canvas.parent('canvas');

    p = new Poster(canvasWidth/2, canvasHeight/2, paperSize);

    
}

function draw() {
    if (textMode) {
        p.draw();
        p.drawTitle();
        p.drawDescription();
    }
}

function windowResized() {
    canvas = resizeCanvas(windowWidth*0.7, 650);
    canvas.parent('canvas');
}

function tempChange() {
    if (!tempMode) {
        tempMode = true;
        textMode = false;
        imageMode = false;
        shapeMode = false;
    }
}

function textChange() {
    if (!textMode) {
        tempMode = false;
        textMode = true;
        imageMode = false;
        shapeMode = false;
    }
}

//Paper
class Poster {
    x;
    y;
    width;
    height;

    constructor(x, y, size, temp) {
        this.loc = createVector(x, y);
        this.size = size;
        this.temp = temp;
    }

    draw() {
        rectMode(CENTER);
        fill('#FFFCF8');
        stroke(0);
        strokeWeight(1);
        rect(this.loc.x, this.loc.y, this.size, this.size * sqrt(2));
    }

    drawTitle() {
        fill(0);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(32);
        text(titleString, this.loc.x, this.loc.y -150);
    }

    drawDescription() {
        fill(0);
        textAlign(CENTER);
        textStyle(NORMAL);
        textSize(18);
        text(desString, this.loc.x, this.loc.y - 120);
    }

    setTitle(string) {

    }
}