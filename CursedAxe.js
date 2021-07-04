import fw from './framework.js';
import gameContext from './gameContext.js';

export default class CursedAxe extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = CursedAxe.image;
     }
}
CursedAxe.image = fw.image("imgs/axe(cursed).png");
