import fw from './framework.js';
import gameContext from "./gameContext.js";
import BowLeft from "./BowLeft.js";
import BowUp from "./BowUp.js";
import BowRight from "./BowRight.js";
import BowDown from "./BowDown.js";
import Wall from "./Wall.js";

export default class Arrow extends fw.EntityWithSprite{
    constructor(x,y, parentBow, direction){
        super(x,y);
        this.parentBow = parentBow;
        this.speed = 4;
        this.direction = direction;
        
        switch(this.direction){
            case 1:
            this.image = Arrow.image1;
            break;
            
            case 2:
            this.image = Arrow.image2;
            break;
            
            case 3:
            this.image = Arrow.image3;
            break;
            
            case 4:
            this.image = Arrow.image4;
            break;
        }
    }
    
    update(){
       switch(this.direction){
            case 1:
            this.x -= this.speed;
            break;
            
            case 2:
            this.y -= this.speed;
            break;
            
            case 3:
            this.x += this.speed;
            break;
            
            case 4:
            this.y += this.speed;
            break;
        }
        
       const entities = gameContext.index.query(
       this.getLeft(),
       this.getTop(),
       this.getWidth(),
       this.getHeight()
        );

      for (let entity of entities) {
         if (entity instanceof Wall) {
            gameContext.scene.remove(this);
            this.parentBow.canShoot = true;
            return;
         }
      }
   }
}

Arrow.image1=fw.image('imgs/arrowLeft.png');
Arrow.image2=fw.image('imgs/arrowUp.png');
Arrow.image3=fw.image('imgs/arrowRight.png');
Arrow.image4=fw.image('imgs/arrowDown.png');
Arrow.events = ["draw", "update"];
