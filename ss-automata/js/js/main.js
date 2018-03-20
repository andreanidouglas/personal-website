var sqHeight = 10;
var sqWidth = 10;

var prays = [];
var hunters = [];

let prayCount;
let hunterCount;

let prayHealthAvg;
let hunterHealthAvg;


function setup(){
    
    createCanvas(800,600);
    
    var countPray = random(50,100);
    var countHunter = random(16,50);
    
    for (var i=0;i<countPray;i++){
        prays.push(new Creature(creatureType[0]));
    }
    
    for (var i=0;i<countHunter;i++){
        hunters.push(new Creature(creatureType[1]));
    }
    
    prayCount = createDiv(prays.length);
    hunterCount = createDiv(hunters.length);
    
    prayHealthAvg = createDiv("Pray Health Average: " + calculateAverage(prays));
    hunterHealthAvg = createDiv("Hunter Health Average: " + calculateAverage(hunters));
    
}

function draw(){
    
    prayCount.html(prays.length, false);
    hunterCount.html(hunters.length, false);
    
    prayHealthAvg.html("Pray Health Average: " + calculateAverage(prays));
    hunterHealthAvg.html("Hunter Health Average: " + calculateAverage(hunters));
    
    
    drawBackground();
    
    for (var i=0; i<prays.length;i++){
        
        if (prays[i].dead){
            prays.splice(i,1);
        } else {
            prays[i].update();
            prays[i].draw();
        }
    }
    
    for (var i=0; i<hunters.length;i++){
        
        if (hunters[i].dead){
            hunters.splice(i,1);
        } else {
            hunters[i].update();
            hunters[i].draw();
        }
    }
    
    var encounter = null;
    //hunter pray encounter
    for (var i=0;i<hunters.length;i++){
        for (var j=0;j<prays.length;j++){
            encounter = hunters[i].haveColided(prays[j]); 
            if (encounter){
                prays[j].dead = true;
                hunters[i].health += default_health;
            }
        }
    }
    
    //pray pray encounter
    for (var i=0;i<prays.length;i++){
        for (var j=i+1;j<prays.length;j++){
            encounter = prays[i].haveColided(prays[j]); 
            if (encounter){
                if (prays[i].health > 800 && prays[j].health > 800){
                    let prayNewBorn = new Creature(creatureType[0], prays[i].x+1, prays[j]-1);
                    prayNewBorn.health = default_health;
                    prays.push(prayNewBorn);
                }
            }
        }
    }
    
     //hunter hunter encounter
    for (var i=0;i<hunters.length;i++){
        for (var j=i+1;j<hunters.length;j++){
            encounter = hunters[i].haveColided(hunters[j]); 
            if (encounter){
                console.log(hunters[i].health + " " + hunters[j].health);
                if (hunters[i].health > 50 && hunters[j].health > 50){
                    let hunterNewBorn = new Creature(creatureType[1], hunters[i].x+1, hunters[j]-1);
                    hunterNewBorn.health = default_health;
                    hunters.push(hunterNewBorn);
                }
            }
        }
    }
    
    
    
    /*//hunter hunter encounter
    for (var i=0;i<hunters.length;i++){
        for (var j=i;j<hunters.length;j++){
            encounter = hunters[i].haveColided(hunters[j]); 
        }
    }*/
}

function drawBackground(){
    background(51);
    stroke(255);
    for (var i=0;i<width;i+=10){
        line(i,0,i,height);
        //console.log("w" + i);
    }
    
    for (var i=0;i<height;i+=10){
        line(0,i,width,i);
        //console.log("h" + i);
    }
    
}

function calculateAverage(array){
    let average = 0;
    for(let i=0; i<array.length;i++){
        average+=array[i].health;
    }
    
    average = average/array.length;
    
    return average;
}