function Pixel (r, g, b) {

  this.red = r;
  this.green = g;
  this.blue = b;

  let rgb = [];
  rgb.push(this.red);

  this.addRed = function(n){
    this.red = this.red + n;

    if (this.red < 0){
        this.red = 0;
    }

    else if (this.red > 255){
        this.red = 255;
    }
  }

  this.addGreen = function(n){
    this.green = this.green + n;

    if (this.green < 0){
        this.green = 0;
    }

    else if (this.green > 255){
         this.green = 255;
    }
  }

  this.addBlue = function(n){
    this.blue = this.blue + b;

    if (this.blue < 0){
        this.blue = 0;
    }

    else if (this.blue > 255){
        this.blue = 255;
    }
  }

  this.brightness = function(n){
     this.red = this.red + (this.red * n);
     this.green = this.green + (this.green * n);
     this.blue = this.blue + (this.blue * n);
  }

  this.outputPixel = function(){
     return rgb;
  }

  this.grayScale = function(){
      return (this.red + this.green + this.blue) / 3;
  }
}

function main(){
    let thingy = new Pixel(50, 100, 150);
    console.log(thingy.grayScale());
}

main();
