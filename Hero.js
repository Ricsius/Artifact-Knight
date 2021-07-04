import fw from './framework.js';
import gameContext from './gameContext.js';
import Ui from "./Ui.js";

import Professor from "./Professor.js";
import Wall from './Wall.js';
import Arrow from "./Arrow.js";
import Spike from "./Spike.js";

import Sword from './Sword.js';
import CursedSword from "./CursedSword.js";
import Spear from "./Spear.js";
import Axe from "./Axe.js";
import Necklace from './Necklace.js';
import CursedNecklace from './CursedNecklace.js';
import Emerald from './Emerald.js';
import BlueStaff from './BlueStaff.js';
import Ruby from './Ruby.js';
import CursedShuriken from './CursedShuriken.js';
import Diamond from './Diamond.js';
import CursedAxe from './CursedAxe.js';
import CursedSpear from './CursedSpear.js';
import Whistle from './Whistle.js';
import BluePotion from './BluePotion.js';
import GoldenStaff from './GoldenStaff.js';
import CursedPurpleStaff from './CursedPurpleStaff.js';
import Sickle from './Sickle.js';

import BlueDoor from './BlueDoor.js';
import RedDoor from './RedDoor.js';
import IronDoor from './IronDoor.js';

import BlueKey from './BlueKey.js';
import RedKey from './RedKey.js';
import IronKey from './IronKey.js';

export default class Hero extends fw.Entity {
    constructor(x, y) {
        super(x, y)
        this.srcRow = 3;
        this.srcCol = 0;
        
        this.artifacts = [];
        this.artifactCount = 0;
        
        this.speed = 4;
        this.isFalling = false;
        this.fallForce = 3;
        
        this.isJumping = false;
        this.jumpForce = 4;
        this.jumpHeight = 180;
        this.currentJumpHeight = 0;
        
        this.movesLeft = false;
        this.movesRight = false;
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

    setMovesLeft(b){
       this.movesLeft = b;
    }

    setMovesRight(b){
       this.movesRight = b;
    }

    update() {
       this.fall();
       this.detectHazards();
       
       if (fw.isDown(27)) {
          gameContext.isPaused = true;
          Ui.setPauseScreen(true);
             }
         //Left
        else if (fw.isDown(37) || this.movesLeft) {
            this.moveLeft();
         }
         //Right
        else if (fw.isDown(39) || this.movesRight) {
           this.moveRight();
         }
        
        //Jump
        else if (fw.isDown(38)) {
           this.jump();
        } 
        
        //Interaction
        else if (fw.isDown(40)) {
           this.interaction();
        }
         else{
           this.srcCol = 0;
        }
        
        //Inventory
        if(fw.isDown(73)){
           this.openInventory();
        }
         
        if(this.currentJumpHeight > 0){
           this.srcCol = 1;
            this.currentJumpHeight -= this.jumpForce;
            this.tryMove(0, -this.jumpForce);
           }
           else{
              this.isJumping = false;
           }        
   }
   
   jump(){
      if(!this.isJumping && !this.isFalling){
         this.isJumping = true;
         this.currentJumpHeight = this.jumpHeight;

      }
   }
   
   moveLeft(){
      this.tryMove(-this.speed, 0);
      this.srcRow = 1;
            
      if(this.isFalling || this.isJumping){
         this.srcCol = 1;
      }
      else{
         if(this.srcCol < 8){
            ++this.srcCol;
         }
         else{
            this.srcCol = 0;
         }
      } 
   }
   
   moveRight(){
      this.tryMove(this.speed, 0);
      this.srcRow = 3;
            
      if(this.isFalling || this.isJumping){
         this.srcCol = 1;
      }
      else
         if(this.srcCol < 8){
            ++this.srcCol;
         }
         else{
            if(this.isFalling || this.isJumping){
               this.srcCol = 1;
            }
            this.srcCol = 0;
         }
   }
   
   interaction(){
      this.detectArtifact();
      this.detectProfessor();
      this.detectKey();
      this.detectDoor();
   }
   
   openInventory(){
      var i;
      for(i = 0; i < this.artifacts.length; ++i){
         this.artifacts[i].x = this.x;
         this.artifacts[i].y = this.y + 32;
      }
           
      Ui.setInventoryScreen(true, this.artifacts);
   }
   
    tryMove(x, y) {
        const entities = gameContext.index.query(
            this.getLeft() + x,
            this.getTop() + y,
            this.getWidth(),
            this.getHeight()
        );

        for (let entity of entities) {
            if (entity instanceof Wall
               || entity instanceof BlueDoor
               || entity instanceof RedDoor
               || entity instanceof IronDoor) {
                return false;
            }
        }

        this.x += x;
        this.y += y;
        
        return true;
    }
   
   fall(){
      if(!this.isJumping){
         this.isFalling = this.tryMove(0, this.fallForce);
         
         if(this.isFalling){
            this.srcCol = 1;
         }
      }
   }
   
   detectProfessor(){
      const entities = gameContext.index.query(
            this.getLeft(),
            this.getTop(),
            this.getWidth(),
            this.getHeight()
        );

        for (let entity of entities) {
            if (entity instanceof Professor) {
                entity.checkArtifacts(this.artifacts);
                return;
            }
        }
   }
   
   detectArtifact(){
      const entities = gameContext.index.query(
            this.getLeft(),
            this.getTop(),
            this.getWidth(),
            this.getHeight()
        );

        for (let entity of entities) {
            if (entity instanceof Sword
            || entity instanceof CursedSword
            || entity instanceof Spear
            || entity instanceof Axe
            || entity instanceof Necklace
            || entity instanceof CursedNecklace
            || entity instanceof Emerald
            || entity instanceof BlueStaff
            || entity instanceof Ruby
            || entity instanceof CursedShuriken
            || entity instanceof Diamond
            || entity instanceof CursedAxe
            || entity instanceof CursedSpear
            || entity instanceof Whistle
            || entity instanceof BluePotion
            || entity instanceof GoldenStaff
            || entity instanceof Sickle
            || entity instanceof CursedPurpleStaff) {
                this.artifacts.push(entity);                
                gameContext.scene.remove(entity);
                ++gameContext.foundBonus;
                return;
            }
        }
   }
   
   detectDoor(){
      const entitiesLeft = gameContext.index.query(
            this.getLeft() + this.speed,
            this.getTop() + this.speed,
            this.getWidth(),
            this.getHeight()
        );
        
        const entitiesRight = gameContext.index.query(
            this.getLeft() - this.speed,
            this.getTop() - this.speed,
            this.getWidth(),
            this.getHeight()
        );

        for (let entity of entitiesLeft) {
            if (entity instanceof BlueDoor
            || entity instanceof RedDoor
            || entity instanceof IronDoor) {
                entity.checkKey(this.artifacts)
                return;
            }
        }
        
        for (let entity of entitiesRight) {
            if (entity instanceof BlueDoor
            || entity instanceof RedDoor
            || entity instanceof IronDoor) {
                entity.checkKey(this.artifacts)
                return;
            }
        }
   }
   
   detectKey(){
      const entities = gameContext.index.query(
            this.getLeft(),
            this.getTop(),
            this.getWidth(),
            this.getHeight()
        );

        for (let entity of entities) {
            if (entity instanceof BlueKey
            || entity instanceof RedKey
            || entity instanceof IronKey) {
                this.artifacts.push(entity);                
                gameContext.scene.remove(entity);
                return;
            }
        }
   }
   
   detectHazards(){
      const entities = gameContext.index.query(
            this.getLeft(),
            this.getTop(),
            this.getWidth(),
            this.getHeight()
        );

        for (let entity of entities) {
            if (entity instanceof Arrow
                || entity instanceof Spike){
                   var gameOverMessage = "You died.";
                   gameContext.foundBonus -= this.artifacts.length;
                  Ui.setGameOverScreen(true, gameOverMessage);
                  return;
               }
            }
        }
   
    draw(ctx) {

       ctx.drawImage(Hero.image, this.srcCol*64, this.srcRow*64, 64, 64, this.x, this.y, 64, 64);
    }
}

Hero.events = ['update', 'draw'];
Hero.image = fw.image('imgs/knight.png');
