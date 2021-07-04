import fw from './framework.js';
import gameContext from './gameContext.js';

export default class RedKey extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = RedKey.image;
     }
}
RedKey.image = fw.image("imgs/redKey.png");
