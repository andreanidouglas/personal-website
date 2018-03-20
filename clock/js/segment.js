Segment = function (digitpos){
    this.defaultLenght = 100;
    this.digitpos = digitpos;

    this.dir=1;
    this.xvalue=1;
    this.yvalue=1;


}

Segment.prototype.light = function(model){
    //dir == 1 horizontal || dir == 2 vertical
    //xvalue == 1 left || xvalue 2 == right
    //yvalue == 1 top || yvalue = 2 middle | yvalue = 3 bottom


    switch(model){
        case 1:
            this.dir=1;
            this.xvalue=1;
            this.yvalue=1;
            break;
        case 2:
            this.dir=2;
            this.xvalue=2;
            this.yvalue=1;
            break;
        case 3:
            this.dir=2;
            this.xvalue=2;
            this.yvalue=2;
            break;
        case 4:
            this.dir=1;
            this.xvalue=1;
            this.yvalue=3;
            break;
        case 5:
            this.dir=2;
            this.xvalue=1;
            this.yvalue=2;
            break;
        case 6:
            this.dir=2;
            this.xvalue=1;
            this.yvalue=1;
            break;
        case 7:
            this.dir=1;
            this.xvalue=1;
            this.yvalue=2;
            break;
    }
}

Segment.prototype.draw = function(){


    if (this.xvalue == 1){
        this.posix=this.digitpos - 10;
    } else {
        this.posix=this.digitpos+this.defaultLenght;
    }


    if (this.yvalue == 1){
        this.posiy=190;
    } else if(this.yvalue ==2) {
            this.posiy=300;
    } else {
        this.posiy=400;
    }


    if (this.dir == 1){
        this.posfx = this.posix + this.defaultLenght;
        this.posfy = this.posiy;
    } else {
        this.posfx = this.posix;
        this.posfy = this.posiy + this.defaultLenght;
    }

    stroke(255,0,0);
    strokeWeight(4);
    line(this.posix, this.posiy, this.posfx, this.posfy);
}
