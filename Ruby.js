import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Ruby extends fw.Artifact {
   constructor(x, y) {
        super(x, y+32);
        this.isCursed = false;
        this.image = Ruby.image;
     }
}
Ruby.image = fw.image("imgs/ruby.png");
