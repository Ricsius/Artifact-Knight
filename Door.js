import fw from './framework.js';
import gameContext from './gameContext.js';

export default class Door extends fw.EntityWithSprite{
   constructor (x, y){
      super(x, y);
   }
   
   checkKey(artifacts){
       var i = 0;
       var found = false;
       while(i < artifacts.length && !found){
          if(artifacts[i] instanceof this.goodKey){
             found = true;
          }
          
          ++i;
       }
       
       if(found){
         gameContext.scene.remove(this);
       }
    }
}
