import fw from '../framework.js';
import gameContext from '../gameContext.js';
import Hero from '../Hero.js';

export default class Level{
   constructor(){
   }
   
   loadLevel(){
      gameContext.mandatoryItem = this.mandatoryItem;
      gameContext.cursedHint = this.cursedHint;
      gameContext.scene = new fw.Scene();

      for (let i = 0; i < this.level.length; i++) {
         const row = this.level[i];
         for (let j = 0; j < row.length; j++) {
            const type = row[j];
            if (!type) {
                  continue;
            }
            
            var entity = new type(j * 64, i * 64)
            gameContext.scene.add(entity);
            
            if(entity instanceof Hero){
               gameContext.hero = entity;
               }
         }

      }
   }
}
