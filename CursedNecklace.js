import fw from './framework.js';
import gameContext from './gameContext.js';

export default class CursedNecklace extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = true;
        this.image = CursedNecklace.image;
     }
}
CursedNecklace.image = fw.image("imgs/necklace(cursed).png");
