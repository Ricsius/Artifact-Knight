import fw from '../framework.js';
import Level from './Level.js';
import gameContext from '../gameContext.js';
import Hero from '../Hero.js';
import Professor from "../Professor.js";
import Wall from '../Wall.js';
import BowLeft from "../BowLeft.js";
import Spike from "../Spike.js";
import Sword from '../Sword.js';
import CursedSword from '../CursedSword.js';
import Spear from "../Spear.js";
import Axe from "../Axe.js";

export default class Level_1 extends Level{
   
   constructor(){
      super();
      this.cursedHint = "Watch for the red!";
      
      const H = Hero;
      const P = Professor;
      const W = Wall;
      const LB = BowLeft;
      const S = Spike;
      const SW = Sword;
      const SP = Spear
      const AX = Axe;
      const CS = CursedSword;
      const _ = null;
      
      this.mandatoryItem = Sword;
      this.bonusItemCount = 2;
      
      this.level = [
         [W , W , W , W , W , W , W , W , W , W , W , W , W],
         [W , _ , _ , _ , _ , _ , W , _ , _ , _ , _ , _ , W],
         [W , _ , _ , _ , _ , _ , _ , _ , _ , _ , S , AX, W],
         [W , _ , W , W , _ , _ , _ , _ , W , W , W , W , W],
         [W , H , P , W , _ , SW, _ , _ , LB, CS, SP, W , W],
         [W , W , W , W , S , W , W , W , W , W , W , W , W],
      ];
   }
}
