import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Necklace extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = Necklace.image;
     }
}
Necklace.image = fw.image("imgs/necklace.png");
