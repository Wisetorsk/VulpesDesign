var lastScrollTop = 0;
            var yPosition = 0;
            var amount = 5;
            window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop){
                yPosition -= amount;
                document.getElementsByTagName('body')[0].style.backgroundPositionY = yPosition + "px";
            } else {
                yPosition += amount;
                document.getElementsByTagName('body')[0].style.backgroundPositionY = yPosition+"px";
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

var fireworks = [];
var particles = [];

class Particle {
    constructor(posX, posY, gravity=10, decay=0.8) {
        this.posX = posX;
        this.posY = posY;
        this.velX = 0;
        this.velY = 0;
        this.accX;
        this.accY;
        this.lifespan;
        this.decay = decay;
        this.gravity = gravity;
    }

    update() {
        this.velX += this.accX;
        this.velY += this.accY += this.gravity;
        this.posX += this.velX;
        this.posY += this.velY;
        this.accX *= this.decay;
        this.accY *= this.decay;
    }

    show() { //Update the position of the element

    }
}

class Firework {
    constructor(gravity=10, decay=0.8) {
        this.posX = width.innerWidth / 2;
        this.posY = window.innerHeight;
        this.velX;
        this.velY;
        this.accX;
        this.accY;
        this.lifespan;
        this.timer = 100;
        this.decay = decay;
        this.gravity = gravity;

    }

    update() {
        this.velX += this.accX;
        this.velY += this.accY += this.gravity;
        this.posX += this.velX;
        this.posY += this.velY;
        this.accX *= this.decay;
        this.accY *= this.decay;
    }

    show() { //Update the position of the elemnt
        
    }

    explode() {

    }

}

function setup() {

}

function loop() {

}

function main() {

}