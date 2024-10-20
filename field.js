class Field {
    
    constructor() {
        this.blobs = [];
        for (i = 0; i < random(2,5); i++) this.blobs.push(new Blob(random(0, 100), random(0, 100)));
        this.img = createImage(100,100);
    }


    reset() {
        this.blobs = [];
        for (i = 0; i < random(2,5); i++) this.blobs.push(new Blob(random(0, 100), random(0, 100)));
    }

    render(fieldX,fieldY) {
        this.img.loadPixels();

        for (x = 0; x < 100; x++) {
            for (y = 0; y < 100; y++) {
            let sum = 4;
            for (i = 0; i < this.blobs.length; i++) {
                let xdif = x - this.blobs[i].x;
                let ydif = y - this.blobs[i].y;
                let d = sqrt((xdif * xdif) + (ydif * ydif));
                sum += 15 * this.blobs[i].r / d;
            }
            this.img.set(x, y, color(sum, 255, 255));
            }
        }
        

        for (i = 0; i < blobs.length; i++) {
            this.blobs[i].update();
        }

        this.img.updatePixels();

        image(this.img,fieldX,fieldY);
    }
}