import fw from '../framework.js';
import Level from './Level.js';
import gameContext from '../gameContext.js';
import Hero from '../Hero.js';
import Professor from "../Professor.js";
import Wall from '../Wall.js';
import Ruby from '../Ruby.js';
import CursedShuriken from '../CursedShuriken.js';
import CursedAxe from "../CursedAxe.js";
import Diamond from "../Diamond.js";
import BowLeft from "../BowLeft.js";
import Spike from "../Spike.js";

export default class Level_3 extends Level{
   
   constructor(){
      super();
      this.cursedHint = "Don't trust the weapons!";
      
      const H = Hero;
      const P = Professor;
      const W = Wall;
      const R = Ruby;
      const CS = CursedShuriken;
      const CA = CursedAxe;
      const D = Diamond;
      const LB = BowLeft;
      const S = Spike;
      const _ = null;
      
      this.mandatoryItem = R;
      this.bonusItemCount = 1;
      
      this.level = [
         [W , W , W , W , W , W , W , W , W , W , W , W , W],
         [W , _ , _ , _ , _ , _ , _ , _ , _ , _ , _ , _ , W],
         [W , _ , _ , _ , CS, _ , D , _ , CA, _ , R , LB, W],
         [W , _ , _ , _ , W , _ , W , _ , W , _ , W , _ , W],
         [W , _ , _ , _ , W , _ , W , _ , W , _ , W , _ , W],
         [W , _ , _ , W , W , _ , W , _ , W , _ , W , _ , W],
         [W , H , P , _ , W , _ , W , _ , W , _ , W , _ , W],
         [W , W , W , W , W , S , W , S , W , S , W , S , W],
      ];
   }
}

