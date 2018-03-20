let creatureType = [2];
creatureType[0] = "Pray";
creatureType[1] = "Hunter";

let encounterType = [3];
encounterType[0] = "Kill";
encounterType[1] = "Mate";
encounterType[2] = "Get Killed";

let healFactor = 1;


let default_health = 200;

let Creature = function(type, x, y){
    
    this.type = type;
    this.health = default_health;
    this.dead = false;
    
    
    if (x && y){
        this.x == x;
        this.y == y;
    } else {
        this.x = Math.floor(random(width/10));
        this.y = Math.floor(random(height/10));
    }
    this.posx=0;
    this.posy=0;
    
};

Creature.prototype.moveRandom = function(){
    let dir = [];
    if (this.x < 0 || this.y < 0){
        //console.log("hit top: " + this.x + " " + this.y);
        dir = [0, 1];
    } else if (this.x > (width/10) || this.y >= (height/10)){
        dir = [-1, 0];
        //console.log("hit bottom: " + this.x + " " + this.y);
    } else {
        dir = [-1, 0, 1];
    }
    
    
    let x = random(dir);
    let y = random(dir);
    
    return [x,y];
};

Creature.prototype.update = function(){
    let arrMovement = this.moveRandom();
    this.x += arrMovement[0];
    this.y += arrMovement[1];
    
    if (this.type == creatureType[0]){
        this.health+=1;
    }
    
    if (this.type == creatureType[1]){
        this.health-=1;
    }
    
    if (this.health == 0){
        this.dead = true;
    }
};

Creature.prototype.haveColided = function(creature){
    if(this.x == creature.x && this.y == creature.y){
     
     return true;
    }
     /*  if(this.type == creatureType[1]) { //hunter action
            if (creature.type == creatureType[0]){ //eat pray
                creature.dead = true;
                this.health += (default_health/10);
                return encounterType[0];
            } else { // mate
                console.log("Hunter Mate");
                return encounterType[1];
            }
       } else {
           console.log("Pray Mate");
           return encounterType[1];
       } 
    }*/
};


 Creature.prototype.draw = function() {
    ellipseMode(CENTER); 
    this.posx = ((this.x * 10) + 5);
    
    this.posy = ((this.y * 10) + 5);
    
    
    
    let axis1 = sqWidth - 2;
    let axis2 = sqHeight - 2;
    
    if (this.type == creatureType[0]){
        fill(0,255,0);
        
    } else {
        fill(255,0,0);
    }
    
    ellipse(this.posx, this.posy, axis1, axis2);
 };