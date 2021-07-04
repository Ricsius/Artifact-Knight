import fw from './framework.js';
import Door from './Door.js';
import BlueKey from './BlueKey.js'

export default class BlueDoor extends Door{
    constructor(x,y){
        super(x,y);
        this.image = BlueDoor.image;
        this.goodKey = BlueKey
    }
}

BlueDoor.image=fw.image('imgs/blueDoor.png');
