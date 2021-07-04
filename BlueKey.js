import fw from './framework.js';
import gameContext from './gameContext.js';

export default class BlueKey extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = BlueKey.image;
     }
}
BlueKey.image = fw.image("imgs/blueKey.png");
