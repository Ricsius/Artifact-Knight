import fw from './framework.js';
import gameContext from './gameContext.js';

export default class BlueStaff extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = BlueStaff.image;
     }
}
BlueStaff.image = fw.image("imgs/bluestaff.png");
