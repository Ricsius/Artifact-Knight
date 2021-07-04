import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Sword extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = Sword.image;
     }
}
Sword.image = fw.image("imgs/sword.png");
