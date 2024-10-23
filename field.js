class Field {
    
    constructor() {
        this.blobs = [];
        for (let i = 0; i < random(2,5); i++) this.blobs.push(new Blob(random(0, 100), random(0, 100)));
        this.img = createImage(100,100);

        this.deepGreenS = color(146, 99, 51);
        this.fuschiaS = color(325, 84, 94);
        this.lightBlueS = color(194, 100, 77);
        this.orangeS = color(31, 93, 100);
        this.redS = color(357, 99, 76);
        this.deepBlueS = color(231, 80, 52);

        
        this.colorArray = [this.deepGreenS, this.fuschiaS, this.lightBlueS, this.orangeS, this.redS, this.deepBlueS];
        this.color = random(this.colorArray);
    }


    reset() {
        this.blobs = [];
        for (let i = 0; i < random(2,5); i++) this.blobs.push(new Blob(random(0, 100), random(0, 100)));
        this.color = random(this.colorArray);
    }

    render(fieldX,fieldY) {
        this.img.loadPixels();

        for (let x = 0; x < 100; x++) {
            for (let y = 0; y < 100; y++) {
                let sum = 4;
                for (let i = 0; i < this.blobs.length; i++) {
                    let xdif = x - this.blobs[i].x;
                    let ydif = y - this.blobs[i].y;
                    let d = sqrt((xdif * xdif) + (ydif * ydif));
                    sum += 15 * this.blobs[i].r / d;
                }
                this.img.set(x, y, color(sum, 255, 255));
            }
        }
        

        for (let i = 0; i < this.blobs.length; i++) {
            this.blobs[i].update();
        }

        this.img.updatePixels();
        this.img.filter(GRAY);
        // this.img.filter(THRESHOLD, thresh)
        
        
        

        image(this.img,fieldX,fieldY);

        blendMode(MULTIPLY);
        fill(this.color,);
        strokeWeight(0);
        square(fieldX,fieldY,100);
        blendMode(BLEND);

        
    }

    
}