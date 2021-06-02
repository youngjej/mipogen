const iconScale = 0.8;
const paperSize = 297;

let titleString = 'TITLE';
let desString = 'description';

function setup() {
    const canvasWidth = 1550;
    const canvasHeight = 650;
    const tabWidth = 120;

    var canvas = createCanvas(canvasWidth, canvasHeight);
    background(0);

    canvas.parent('canvas');

    tab = new Tab(windowWidth/2 - 500, 40, tabWidth, canvasHeight);
    p = new Poster(canvasWidth/2, canvasHeight/2, paperSize);

    
}

function draw() {
    p.draw();
    p.drawTitle();
    p.drawDescription();
}

function titleInput() {
    titleString = this.value();
}

function desInput() {
    desString = this.value();
}

//Tab
class Tab {
    x;
    y;
    width;
    height;

    constructor(x, y, width, height) {
        this.loc = createVector(x, y);
        this.width = width;
        this.height = height;
    }

    setTemplate() {
        
    }

    setText() {

    }

    setImage() {

    }
}

//Paper
class Poster {
    x;
    y;
    width;
    height;

    constructor(x, y, size) {
        this.loc = createVector(x, y);
        this.size = size;
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