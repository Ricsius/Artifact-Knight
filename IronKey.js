import fw from './framework.js';
import gameContext from './gameContext.js';

export default class IronKey extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = IronKey.image;
     }
}
IronKey.image = fw.image("imgs/ironKey.png");
