import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Diamond extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = Diamond.image;
     }
}
Diamond.image = fw.image("imgs/diamond.png");
