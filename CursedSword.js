import fw from './framework.js';
import gameContext from './gameContext.js';

export default class CursedSword extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = true;
        this.image = CursedSword.image;
     }
}
CursedSword.image = fw.image("imgs/sword(cursed).png");
