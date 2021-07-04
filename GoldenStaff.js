import fw from './framework.js';
import gameContext from './gameContext.js';

export default class GoldenStaff extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = GoldenStaff.image;
     }
}
GoldenStaff.image = fw.image("imgs/goldenStaff.png");
