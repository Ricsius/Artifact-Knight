import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Whistle extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = Whistle.image;
     }
}
Whistle.image = fw.image("imgs/whistle.png");
