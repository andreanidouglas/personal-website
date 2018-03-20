const zero = [true, true, true, true, true, true, false];
const one = [false, true, true, false, false, false, false];
const two = [true, true, false, true, true, false, true];
const three = [true, true, true, true, false, false, true];
const four = [false, true, true, false, false, true, true];
const five = [true, false, true, true, false, true, true];
const six = [true, false, true, true, true, true, true];
const seven = [true, true, true, false, false, false, false];
const eight = [true, true, true, true, true, true, true];
const nine = [true, true, true, false, false, true, true];


Digit = function(digitValue, pos){

    this.digitValue = digitValue;
    this.pos = pos;
    this.segments = [];

    switch(this.digitValue){
        case 0:
            this.segments = zero;
            break;
        case 1: 
            this.segments = one;
            break;
        case 2:
            this.segments = two;
            break;
        case 3:
            this.segments = three;
            break;
        case 4:
            this.segments = four;
            break;
        case 5:
            this.segments = five;
            break
        case 6:
            this.segments = six;
            break;
        case 7:
            this.segments = seven;
            break;
        case 8:
            this.segments = eight;
            break;
        case 9:
            this.segments = nine;
            break;
    }
}

Digit.prototype.draw = function(){
    for (let i=1;i<this.segments.length+1;i++){
        if (this.segments[i-1]){
            let seg = new Segment(50 + this.pos*200 );
            seg.light(i);
            seg.draw();
        }
    }
}
