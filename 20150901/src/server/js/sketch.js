const iconScale = 0.8;
const paperSize = 297;

let titleString = 'TITLE';
let desString = 'description';

function setup() {
    const canvasWidth = 1000;
    const canvasHeight = windowHeight - 80;
    const tabWidth = 120;

    createCanvas(windowWidth, windowHeight);
    background('#353743');

    let titleInp = createInput('');
    titleInp.position(windowWidth/2 + 180, 200);
    titleInp.input(titleInput);

    let desInp = createInput('');
    desInp.position(windowWidth/2 + 180, 250);
    desInp.input(desInput);

    fill('#FFFEFD');
    stroke('#8EC2FF');
    strokeWeight(5)
    rectMode(CENTER);
    rect(windowWidth/2, windowHeight/2, canvasWidth, canvasHeight, 20);

    tab = new Tab(windowWidth/2 - 500, 40, tabWidth, canvasHeight);
    p = new Poster(windowWidth/2, windowHeight/2, paperSize);

    
}

function draw() {
    tab.draw();
    tab.drawIcons();
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
        
        this.template = loadImage("assets/TemplateIcon.png");
        this.text = loadImage("assets/TextIcon.png");
        this.img = loadImage("assets/ImageIcon.png");
        this.shape = loadImage("assets/ShapeIcon.png");
    }

    draw() {
        rectMode(CORNER);
        fill('#8EC2FF');
        stroke('#8EC2FF');
        rect(this.loc.x, this.loc.y, this.width, this.height, 20, 0, 0, 20);
        stroke(255);
        strokeWeight(1);
        for (let i=1; i<4; i++) line(this.loc.x+this.width/4, this.loc.y + this.height/4*i, this.loc.x+this.width*3/4, this.loc.y+this.height/4*i);
    }

    drawIcons() {
        image(this.template, this.loc.x+this.width/4, this.loc.y+this.width/5 , 76*iconScale, 94*iconScale);
        image(this.text, this.loc.x+this.width/9, this.loc.y + this.height/4+this.width/5, 113*iconScale, 113*iconScale);
        image(this.img, this.loc.x+this.width/4, this.loc.y+this.height/2+this.width/4, 77*iconScale, 77*iconScale);
        image(this.shape, this.loc.x+this.width/5, this.loc.y+this.height*3/4+this.width/3, 88.63*iconScale, 78*iconScale);
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