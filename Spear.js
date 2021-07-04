import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Spear extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = Spear.image;
     }
}
Spear.image = fw.image("imgs/spear.png");
