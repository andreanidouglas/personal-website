function setup(){
    createCanvas(800,600);

}


function draw(){
    background(0);

    let valueHour = hour() % 12;
    let valueMinute = minute();
    let valueSecond = second();

    if (valueHour < 10){
        new Digit(0,0).draw();
        new Digit(valueHour, 1).draw();
    } else {
        new Digit(floor(valueHour/10),0).draw();
        new Digit( (valueHour%10),1).draw();
    }

    if (valueMinute < 10){
        new Digit(0,2).draw();
        new Digit(valueMinute, 3).draw();
    } else {
        new Digit(floor(valueMinute/10),2).draw();
        new Digit( (valueMinute%10),3).draw();
    }

}
