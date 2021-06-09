const iconScale = 0.8;
const paperSize = 297;

let titleString = 'TITLE';
let desString = 'description';

let tempMode = true;
let textMode = false;
let imageMode = false;
let shapeMode = false;

var container;

function setup() {
    container = document.getElementById('canvas');

    var canvasWidth = container.offsetWidth;
    const canvasHeight = 650;

    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas');


    p1 = new Poster(canvasWidth/3, canvasHeight/4, paperSize/2, 1);
    p2 = new Poster(canvasWidth*2/3, canvasHeight/4, paperSize/2, 2);
    p3 = new Poster(canvasWidth/3, canvasHeight*3/4, paperSize/2, 3);
    p4 = new Poster(canvasWidth*2/3, canvasHeight*3/4, paperSize/2, 4);

}

function draw() {
    var canvasWidth = container.offsetWidth;
    var canvasHeight = container.offsetHeight;

    fill('#ddd');
    rectMode(CORNER);
    noStroke();
    rect(30,20,canvasWidth-60,canvasHeight-40);

    if (tempMode) {
        p1.draw();
        p1.drawText();
        p1.drawImage();

        p2.draw();
        p2.drawText();

        p3.draw();
        p3.drawText();

        p4.draw();
        p4.drawText();
    }

    if (textMode) {
        p1.draw();
    }
    
}

function windowResized() {
    var canvasWidth = container.offsetWidth;
    const canvasHeight = 650;

    resizeCanvas(canvasWidth, canvasHeight);
    p1 = new Poster(canvasWidth/3, canvasHeight/4, paperSize/2, 1);
    p2 = new Poster(canvasWidth*2/3, canvasHeight/4, paperSize/2, 2);
    p3 = new Poster(canvasWidth/3, canvasHeight*3/4, paperSize/2, 3);
    p4 = new Poster(canvasWidth*2/3, canvasHeight*3/4, paperSize/2, 4);
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
        this.sizeX = size;
        this.sizeY = size * sqrt(2);
        this.temp = temp;
        this.img = loadImage('../assets/BlackImage.png')
    }

    draw() {
        rectMode(CENTER);
        fill('#FFFCF8');
        stroke(0);
        strokeWeight(1);
        rect(this.loc.x, this.loc.y, this.sizeX, this.sizeY);
    }

    drawText() {
        if (this.temp==1) {
            fill(0);
            textAlign(CENTER);
            textSize(32/297*this.sizeX);
            text(titleString, this.loc.x, this.loc.y*0.6);
            textSize(18/297*this.sizeX);
            text(desString, this.loc.x, this.loc.y*1.4);
        }
        else if (this.temp==2) {
            fill(0);
            textAlign(CENTER);
            textSize(44/297*this.sizeX);
            text(titleString, this.loc.x, this.loc.y*1.2);
            textSize(18/297*this.sizeX);
            text(desString, this.loc.x, this.loc.y*1.4);
        }
        else if (this.temp==3) {
            fill(0);
            textAlign(CENTER);
            textSize(32/297*this.sizeX);
            text(titleString, this.loc.x, this.loc.y*0.85);
            textSize(18/297*this.sizeX);
            text(desString, this.loc.x, this.loc.y*0.89);
        }
        else if (this.temp==4) {
            fill(0);
            textAlign(LEFT);
            textSize(32/297*this.sizeX);
            text(titleString, this.loc.x - this.sizeX*0.9/2, this.loc.y*0.82);
            textSize(18/297*this.sizeX);
            text(desString, this.loc.x - this.sizeX*0.9/2, this.loc.y*0.85);
        }
    }

    drawImage() {
        if (this.temp==1) {
            let imageSize = this.sizeX*0.6;
            image(this.img, this.loc.x-imageSize/2, this.loc.y-imageSize/2, imageSize, imageSize);
        }
    }

    setTitle(string) {

    }
}