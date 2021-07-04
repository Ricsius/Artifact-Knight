import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Sickle extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = Sickle.image;
     }
}
Sickle.image = fw.image("imgs/sickle.png");
