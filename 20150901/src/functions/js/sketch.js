const iconScale = 0.8;
const paperSize = 297;

let titleString = 'TITLE';
let desString = 'description';

let tempMode = true;
let textMode = false;
let imagemode = false;
let shapeMode = false;

var container;
var tempBut;
var textBut;
var imageBut;
var shapeBut;

let titDiv = null;
let desDiv = null;

let tempChose = null;

function setup() {
    container = document.getElementById('canvas');
    tempBut = document.getElementById('tempMode');
    textBut = document.getElementById('textMode');
    imageBut = document.getElementById('imagemode');
    shapeBut = document.getElementById('shapeMode');

    var canvasWidth = container.offsetWidth;
    const canvasHeight = 650;

    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas');

    tempBut.classList.add('active');

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
        fill(0);
        textAlign(CENTER);
        textSize(35);
        text('Choose a template.',canvasWidth/2, canvasHeight/2)

        p1.draw();
        p1.drawText();
        p1.drawImage();

        p2.draw();
        p2.drawText();
        p2.drawImage();

        p3.draw();
        p3.drawText();
        p3.drawImage();

        p4.draw();
        p4.drawText();
        p4.drawImage();
    }

    if (textMode) {
        temp.move();
        temp.draw();
        temp.drawText();
        temp.drawImage();
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

    temp = new Poster(canvasWidth/2, canvasHeight/2, paperSize, tempChose);

    titDiv.position(windowWidth/5, windowHeight/6);
    desDiv.position(windowWidth/5, windowHeight*7/30);
}

function mouseClicked() {
    var canvasWidth = container.offsetWidth;
    const canvasHeight = 650;

    if (tempMode) {
        if ((mouseX > canvasWidth/3 - paperSize/4 && mouseX < canvasWidth/3 + paperSize/4)
        && (mouseY > canvasHeight/4 - paperSize*sqrt(2)/4 && mouseY < canvasHeight/4 + paperSize*sqrt(2)/4)) {
            tempChose = 1;
            temp = p1;
            textChange();
        }else if ((mouseX > canvasWidth*2/3 - paperSize/4 && mouseX < canvasWidth*2/3 + paperSize/4)
        && (mouseY > canvasHeight/4 - paperSize*sqrt(2)/4 && mouseY < canvasHeight/4 + paperSize*sqrt(2)/4)) {
            tempChose = 2;
            temp = p2;
            textChange();
        }else if ((mouseX > canvasWidth/3 - paperSize/4 && mouseX < canvasWidth/3 + paperSize/4)
        && (mouseY > canvasHeight*3/4 - paperSize*sqrt(2)/4 && mouseY < canvasHeight*3/4 + paperSize*sqrt(2)/4)) {
            tempChose = 3;
            temp = p3;
            textChange();
        }else if ((mouseX > canvasWidth*2/3 - paperSize/4 && mouseX < canvasWidth*2/3 + paperSize/4)
        && (mouseY > canvasHeight*3/4 - paperSize*sqrt(2)/4 && mouseY < canvasHeight*3/4 + paperSize*sqrt(2)/4)) {
            tempChose = 4
            temp = p4;
            textChange();
        }

    }
}

function tempChange() {
    if (!tempMode) {
        temp = null;

        tempMode = true;
        textMode = false;
        imagemode = false;
        shapeMode = false;
    }
}

function textChange() {
    if (!textMode) {
        tempMode = false;
        textMode = true;
        imagemode = false;
        shapeMode = false;

        tempBut.classList.remove('active');
        textBut.classList.add('active');
    }

    if (textMode) {
        var canvasWidth = container.offsetWidth;
        const canvasHeight = 650;

        titDiv = createDiv('');
        let div0 = createDiv('');
        let span0 = createSpan('Title');
        let titInp = createInput('');

        desDiv = createDiv('');
        let div1 = createDiv('');
        let span1 = createSpan('Description');
        let desInp = createInput('');

        titDiv.class('input-group mb-3');
        div0.class('input-group-prepend');
        span0.class('input-group-text');
        titInp.class('form-control');
        titInp.input(titleInput);

        div0.child(span0);
        titDiv.child(div0);
        titDiv.child(titInp);

        desDiv.class('input-group mb-3');
        div1.class('input-group-prepend');
        span1.class('input-group-text');
        desInp.class('form-control');
        desInp.input(desInput);

        div1.child(span1);
        desDiv.child(div1);
        desDiv.child(desInp);

        titDiv.position(windowWidth/5, windowHeight/6);
        titDiv.size(300);

        desDiv.position(windowWidth/5, windowHeight*7/30);
        desDiv.size(300);
    }
}

function imageChange() {
    if (!imagemode) {
        tempMode = false;
    }
}

function shapeChange() {

}

function titleInput() {
    titleString = this.value();
}

function desInput() {
    desString = this.value();
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
        this.img = loadImage('../assets/BlackImage.png');
        this.canvasWidth = container.offsetWidth;
        this.canvasHeight = 650;
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
            text(titleString, this.loc.x, this.loc.y - this.sizeX/2);
            textSize(18/297*this.sizeX);
            text(desString, this.loc.x, this.loc.y - this.sizeX/3);
        }
        else if (this.temp==4) {
            fill(0);
            textAlign(LEFT);
            textSize(32/297*this.sizeX);
            text(titleString, this.loc.x - this.sizeX*0.9/2, this.loc.y - this.sizeY*0.85/2);
            textSize(18/297*this.sizeX);
            text(desString, this.loc.x - this.sizeX*0.9/2, this.loc.y - this.sizeY*0.75/2);
        }
    }

    drawImage() {
        if (this.temp==1) {
            let imageSize = this.sizeX*0.6;
            image(this.img, this.loc.x-imageSize/2, this.loc.y-imageSize/2, imageSize, imageSize);
        }
        else if (this.temp==2) {
            let imageSize = this.sizeX*0.6;
            image(this.img, this.loc.x-imageSize/2, this.loc.y-imageSize, imageSize, imageSize);
        }
        else if (this.temp==3) {
            let imageSize = this.sizeX*0.7;
            image(this.img, this.loc.x-imageSize/2, this.loc.y-imageSize/4, imageSize, imageSize);
        }else {
            let imageSize = this.sizeX*0.8;
            image(this.img, this.loc.x-imageSize/2, this.loc.y-imageSize/3, imageSize, imageSize);
        }
    }

    move() {
        if (this.loc.x < this.canvasWidth/2 - 5) this.loc.x = this.loc.x + 6;
        else if (this.loc.x > this.canvasWidth/2 + 5) this.loc.x = this.loc.x - 6;

        if (this.loc.y < this.canvasHeight/2 - 4) this.loc.y = this.loc.y + 4;
        else if (this.loc.y > this.canvasHeight/2 + 4) this.loc.y = this.loc.y - 4;
        if (this.sizeX < paperSize) {
            this.sizeX = this.sizeX + 5;
        }
        if (this.sizeY < paperSize*sqrt(2)) {
            this.sizeY = this.sizeY + 5*sqrt(2);
        }
    }
}