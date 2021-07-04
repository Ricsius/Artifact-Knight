import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Axe extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = Axe.image;
     }
}
Axe.image = fw.image("imgs/axe.png");
