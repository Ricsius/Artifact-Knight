import fw from '../framework.js';
import Level from './Level.js';
import gameContext from '../gameContext.js';
import Hero from '../Hero.js';
import Professor from "../Professor.js";
import Wall from '../Wall.js';
import Necklace from '../Necklace.js';
import CursedNecklace from '../CursedNecklace.js';
import Emerald from '../Emerald.js';
import BlueStaff from '../BlueStaff.js';
import BowLeft from "../BowLeft.js";
import Spike from "../Spike.js";

export default class Level_2 extends Level{
   
   constructor(){
      super();
      this.cursedHint = "Blue is fake!";
      
      const H = Hero;
      const P = Professor;
      const W = Wall;
      const N = Necklace;
      const CN = CursedNecklace;
      const E = Emerald;
      const BS = BlueStaff;
      const LB = BowLeft;
      const S = Spike;
      const _ = null;
      
      this.mandatoryItem = N;
      this.bonusItemCount = 2;
      
      this.level = [
         [W , W , W , W , W , W , W , W , W , W , W , W , W],
         [W , _ , _ , _ , _ , _ , _ , N , _ , LB, _ , _ , W],
         [W , _ , _ , _ , _ , _ , _ , _ , CN, _ , _ , _ , W],
         [W , _ , _ , _ , _ , _ , W , _ , W , _ , _ , _ , W],
         [W , _ , _ , _ , _ , _ , W , _ , _ , _ , BS, _ , W],
         [W , _ , _ , W , _ , _ , W , W , S , _ , W , _ , W],
         [W , H , P , _ , _ , _ , W , _ , W , S , E , _ , W],
         [W , W , W , W , W , W , W , W , W , W , W , W , W],
      ];
   }
}
