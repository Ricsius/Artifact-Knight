import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Emerald extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = Emerald.image;
     }
}
Emerald.image = fw.image("imgs/emerald.png");
