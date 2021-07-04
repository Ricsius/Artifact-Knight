import fw from './framework.js';
import gameContext from './gameContext.js';

export default class CursedPurpleStaff extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = true;
        this.image = CursedPurpleStaff.image;
     }
}
CursedPurpleStaff.image = fw.image("imgs/purpleStaff(cursed).png");
