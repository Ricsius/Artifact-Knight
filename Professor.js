import fw from './framework.js';
import gameContext from './gameContext.js';
import Hero from "./Hero.js";
import Ui from "./Ui.js";
import nextLevel from "./main.js";

export default class Professor extends fw.Entity{
    constructor(x, y) {
        super(x, y);
        this.srcRow = 2;
        this.srcCol = 0;
     }
     
    getLeft() {
        return this.x + 16;
    }
    getTop() {
        return this.y + 32;
    }

    getWidth() {
        return 32;
    }

    getHeight() {
        return 32;
    }
    
    update(){
    }
    
    draw(ctx) {
        ctx.drawImage(Professor.image, this.srcCol*64, this.srcRow*64, 64, 64, this.x, this.y, 64, 64);
    }
    
    checkArtifacts(artifacts){
       var i = 0;
       var hasCursed = false;
       var hasMandatory = false;
       while(i < artifacts.length && !hasCursed){
          if(artifacts[i] instanceof gameContext.mandatoryItem){
             hasMandatory = true;
          }
          if(artifacts[i].isCursed){
             hasCursed = true;
          }
          
          ++i;
       }
       
       if(hasCursed){
         var gameOverMessage = "A cursed artifact killed the professor.";
         gameContext.foundBonus -= artifacts.length;
         Ui.setGameOverScreen(true, gameOverMessage);
       }
       else if(hasMandatory){
          nextLevel();
       }
    }
    
 }
    
    Professor.events = ['update', 'draw'];
    Professor.image = fw.image("imgs/professor.png");
