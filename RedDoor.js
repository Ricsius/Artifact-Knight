import fw from './framework.js';
import Door from './Door.js';
import RedKey from './RedKey.js'

export default class RedDoor extends Door{
    constructor(x,y){
        super(x,y);
        this.image = RedDoor.image;
        this.goodKey = RedKey
    }
}

RedDoor.image=fw.image('imgs/redDoor.png');
