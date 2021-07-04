import fw from './framework.js';
import gameContext from "./gameContext.js";
import Arrow from "./Arrow.js";

export default class BowDown extends fw.EntityWithSprite{
    constructor(x,y){
        super(x,y);
        this.image = BowDown.image;
        this.canShoot = true;
    }
    
    update(){
       if(this.canShoot){
          gameContext.scene.add(new Arrow(this.x+32, this.y-(0), this, 4));
          this.canShoot = false;
       }
    }
}

BowDown.image=fw.image('imgs/bowDown.png');
BowDown.events = ["draw", "update"];
