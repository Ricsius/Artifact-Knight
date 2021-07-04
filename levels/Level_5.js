import fw from '../framework.js';
import Level from './Level.js';
import gameContext from '../gameContext.js';
import Hero from '../Hero.js';
import Professor from "../Professor.js";
import Wall from '../Wall.js';
import GoldenStaff from '../GoldenStaff.js';
import CursedPurpleStaff from '../CursedPurpleStaff.js';
import Sickle from '../Sickle.js';
import BlueDoor from '../BlueDoor.js';
import RedDoor from '../RedDoor.js';
import BlueKey from '../BlueKey.js';
import RedKey from '../RedKey.js';
import BowRight from '../BowRight.js';
import BowUp from '../BowUp.js';

export default class Level_5 extends Level{
   
   constructor(){
      super();
      this.cursedHint = "Another staff";
      
      const H = Hero;
      const P = Professor;
      const W = Wall;
      const GS =GoldenStaff;
      const CS = CursedPurpleStaff;
      const SI = Sickle;
      const BD = BlueDoor;
      const RD = RedDoor;
      const BK = BlueKey;
      const RK = RedKey;
      const RB = BowRight;
      const UB = BowUp;
      const _ = null;
      
      this.mandatoryItem = GoldenStaff;
      this.bonusItemCount = 1;
      
      this.level = [
         [W , W , W , W , W , W , W , W , W , W , W , W , W],
         [W , GS, BD, RD, _ , _ , _ , _ , _ , _ , _ , SI, W],
         [W , W , W , W , W , _ , _ , _ , _ , _ , _ , W , W],
         [W , RB, _ , _ , _ , _ , _ , RK, _ , _ , _ ,  _, W],
         [W , _ , _ , _ , _ , _ , _ , W , _ , _ , _ , CS, W],
         [W , _ , _ , _ , _ , _ , _ , _ , _ , _ , _ , W , W],
         [W , H , _ , _ , _ , UB, _ , BK, _ , _ , _ , P , W],
         [W , W , W , W , W , W , W , W , W , W , W , W , W],
      ];
   }
}

