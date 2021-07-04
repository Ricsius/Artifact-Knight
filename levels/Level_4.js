import fw from '../framework.js';
import Level from './Level.js';
import gameContext from '../gameContext.js';
import Hero from '../Hero.js';
import Professor from "../Professor.js";
import Wall from '../Wall.js';
import RedDoor from '../RedDoor.js';
import IronDoor from '../IronDoor.js';
import RedKey from '../RedKey.js';
import IronKey from '../IronKey.js';
import BowDown from "../BowDown.js";
import Whistle from "../Whistle.js";
import Spike from "../Spike.js";
import CursedSpear from "../CursedSpear.js";
import BluePotion from '../BluePotion.js';

export default class Level_4 extends Level{
   
   constructor(){
      super();
      this.cursedHint = "I am dripping.";
      
      const H = Hero;
      const P = Professor;
      const W = Wall;
      const RD = RedDoor;
      const ID = IronDoor;
      const RK = RedKey;
      const IK = IronKey;
      const DB = BowDown;
      const WH = Whistle;
      const S = Spike;
      const CS = CursedSpear;
      const BP = BluePotion;
      const _ = null;
      
      this.mandatoryItem = WH;
      this.bonusItemCount = 1;
      
      this.level = [
         [W , W , W , W , W , W , W , W , W , W , W , W , W],
         [W , IK, _ , DB, _ , _ , _ , _ , _ , W , _ ,  _, W],
         [W , CS, _ , _ , _ , _ , _ , _ , _ , RD, WH, _ , W],
         [W , W , _ , _ , _ , _ , RK, _ , W , W , W , ID, W],
         [W , _ , _ , BP, _ , _ , W , _ , _ , _ , _ ,  _, W],
         [W , _ , _ , W , _ , _ , _ , _ , _ , _ , _ ,  _, W],
         [W , H , _ , _ , _ , _ , _ , _ , _ , _ , _ , P , W],
         [W , W , W , S , S , S , S , S , S , S , S , W , W],
      ];
   }
}

