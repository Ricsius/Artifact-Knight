import fw from './framework.js';
import gameContext from './gameContext.js';
import Ui from "./Ui.js";
import Level_1 from "./levels/Level_1.js";
import Level_2 from "./levels/Level_2.js";
import Level_3 from "./levels/Level_3.js";
import Level_4 from "./levels/Level_4.js";
import Level_5 from "./levels/Level_5.js";

var ctx = document.getElementById("canvas").getContext('2d');
var levels = [];
gameContext.levelIndex = -1;

levels.push(new Level_1());
levels.push(new Level_2());
levels.push(new Level_3());
levels.push(new Level_4());
levels.push(new Level_5());
Ui.setMainMenu(true);

requestAnimationFrame(update);

function update() {
   if(gameContext.isPaused)
   {
      requestAnimationFrame(update);
   }
   else
   {
      gameContext.index = fw.createIndex(gameContext.scene);
      gameContext.scene.fire('update');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      gameContext.scene.fire('draw', ctx);
    
      requestAnimationFrame(update);
   }
}

export default function nextLevel(){
   if(gameContext.levelIndex < (levels.length-1)){
      ++gameContext.levelIndex;
      levels[gameContext.levelIndex].loadLevel();
      gameContext.loadedLevel = levels[gameContext.levelIndex];
      gameContext.maxBonus += levels[gameContext.levelIndex].bonusItemCount;
      
      Ui.setHintScreen(true);
   }
   else{
      gameContext.foundBonus -= levels.length;
      Ui.setFinishScreen(true);
      
      gameContext.levelIndex = -1;
   }
}
