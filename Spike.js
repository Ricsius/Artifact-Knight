import fw from './framework.js';


export default class Spike extends fw.EntityWithSprite{
    constructor(x,y){
        super(x,y);
        this.image = Spike.image;
    }
}

Spike.image=fw.image('imgs/spike.png');
