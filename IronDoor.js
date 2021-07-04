import fw from './framework.js';
import Door from './Door.js';
import IronKey from './IronKey.js'

export default class IronDoor extends Door{
    constructor(x,y){
        super(x,y);
        this.image = IronDoor.image;
        this.goodKey = IronKey
    }
}

IronDoor.image=fw.image('imgs/ironDoor.png');
