import fw from './framework.js';
import gameContext from './gameContext.js';

export default class BluePotion extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = BluePotion.image;
     }
}
BluePotion.image = fw.image("imgs/bluePotion.png");
