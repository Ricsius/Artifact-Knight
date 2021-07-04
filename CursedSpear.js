import fw from './framework.js';
import gameContext from './gameContext.js';

export default class CursedSpear extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = true;
        this.image = CursedSpear.image;
     }
}
CursedSpear.image = fw.image("imgs/spear(cursed).png");
