import fw from './framework.js';


export default class Wall extends fw.EntityWithSprite{
    constructor(x,y){
        super(x,y);
        this.image = Wall.image;
    }
}

Wall.image=fw.image('imgs/wall.png');
