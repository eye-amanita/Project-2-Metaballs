class Field {
    
    constructor() {
        this.blobs = [];
        for (let i = 0; i < random(2,5); i++) this.blobs.push(new Blob(random(0, 100), random(0, 100)));
        
        this.blobSize = random(9,16);

        this.img = createImage(100,100);

        this.deepGreenS = color(146, 99, 51);
        this.fuschiaS = color(325, 84, 94);
        this.lightBlueS = color(194, 100, 77);
        this.orangeS = color(42, 90, 100);
        this.redS = color(357, 99, 76);
        this.deepBlueS = color(231, 80, 52);

        this.teal = color(176, 87, 73);
        this.chartreuse = color(71, 69, 100);
        this.coral = color(1, 61, 100);
        this.magenta = color(315, 82, 100);
        this.skyBlue = color(198, 78, 100);
        this.yellow = color(55, 99, 100);
        this.raspberry = color(340, 86, 85);
        this.fullOrange = color(31, 100, 100);

        
        this.colorArray = [
            this.deepGreenS, 
            this.fuschiaS, 
            this.lightBlueS, 
            this.orangeS, 
            this.redS, 
            this.deepBlueS];

        this.colorArray2 = [
            this.teal,
            this.chartreuse,
            this.coral,
            this.magenta,
            this.skyBlue,
            this.yellow,
            this.raspberry,
            this.orangeS,
            this.fullOrange,];

        this.color = random(this.colorArray);
        this.color2 = random(this.colorArray2);
    }


    reset() {
        this.blobs = [];
        for (let i = 0; i < random(2,5); i++) this.blobs.push(new Blob(random(0, 100), random(0, 100)));
        this.color = random(this.colorArray);
        this.color2 = random(this.colorArray2);
    }

    render(fieldX,fieldY,threshed,palette) {
        this.img.loadPixels();

        for (let x = 0; x < 100; x++) {
            for (let y = 0; y < 100; y++) {
                let sum = 4;
                for (let i = 0; i < this.blobs.length; i++) {
                    let xdif = x - this.blobs[i].x;
                    let ydif = y - this.blobs[i].y;
                    let d = sqrt((xdif * xdif) + (ydif * ydif));
                    sum += this.blobSize * this.blobs[i].r / d;
                }
                this.img.set(x, y, color(sum, 100, 255));
            }
        }
        

        for (let i = 0; i < this.blobs.length; i++) {
            this.blobs[i].update();
        }

        this.img.updatePixels();
        this.img.filter(GRAY);
        
        if (threshed) {
            this.img.filter(THRESHOLD, 0.15);
        }

    
        
        
        
        
        blendMode(MULTIPLY);

        image(this.img,fieldX,fieldY);

        if (palette) {
            fill(this.color2);
        } else {
            fill(this.color);
        }
        
        strokeWeight(0);
        square(fieldX,fieldY,100);
        blendMode(BLEND);


        
    }

    
}