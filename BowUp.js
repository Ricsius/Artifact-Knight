import fw from './framework.js';
import gameContext from "./gameContext.js";
import Arrow from "./Arrow.js";

export default class BowUp extends fw.EntityWithSprite{
    constructor(x,y){
        super(x,y);
        this.image = BowUp.image;
        this.canShoot = true;
    }
    
    update(){
       if(this.canShoot){
          gameContext.scene.add(new Arrow(this.x+32, this.y, this, 2));
          this.canShoot = false;
       }
    }
}

BowUp.image=fw.image('imgs/bowUp.png');
BowUp.events = ["draw", "update"];
