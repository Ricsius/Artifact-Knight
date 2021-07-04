import fw from './framework.js';
import gameContext from "./gameContext.js";
import Arrow from "./Arrow.js";

export default class BowLeft extends fw.EntityWithSprite{
    constructor(x,y){
        super(x,y);
        this.image = BowLeft.image;
        this.canShoot = true;
    }
    
    update(){
       if(this.canShoot){
          gameContext.scene.add(new Arrow(this.x, this.y+32, this, 1));
          this.canShoot = false;
       }
    }
}

BowLeft.image=fw.image('imgs/bowLeft.png');
BowLeft.events = ["draw", "update"];
