import fw from './framework.js';
import gameContext from './gameContext.js';

export default class CursedShuriken extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = true;
        this.image = CursedShuriken.image;
     }
}
CursedShuriken.image = fw.image("imgs/shuriken.png");

