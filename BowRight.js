import fw from './framework.js';
import gameContext from "./gameContext.js";
import Arrow from "./Arrow.js";

export default class BowRight extends fw.EntityWithSprite{
    constructor(x,y){
        super(x,y);
        this.image = BowRight.image;
        this.canShoot = true;
    }
    
    update(){
       if(this.canShoot){
          gameContext.scene.add(new Arrow(this.x, this.y+32, this, 3));
          this.canShoot = false;
       }
    }
}

BowRight.image=fw.image('imgs/bowRight.png');
BowRight.events = ["draw", "update"];
