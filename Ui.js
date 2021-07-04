import gameContext from './gameContext.js';
import nextLevel from "./main.js";
export default class Ui{
}

gameContext.canvas = document.getElementById('canvas');
//gameContext.canvas.style.position = "absolute";
//UI
var ui = document.getElementById("UI");
var buttonWidth = "100px";
var buttonHeight = buttonWidth*2;
var buttonMargin = "25px ";
ui.style.position = "absolute";
ui.style.width = gameContext.canvas.width;
ui.style.height = gameContext.canvas.height;

//MainMenu
var mainMenu = document.getElementById("MainMenu");
mainMenu.style.position = "absolute";
mainMenu.style.display = "none";
mainMenu.style.width = ui.style.width;
mainMenu.style.height = ui.style.height;
mainMenu.style.flexDirection = "column";
mainMenu.style.textAlign = "center";
mainMenu.style.background = "teal";

   //Play button
var playButton = document.getElementById("PlayButton");
playButton.style.width = buttonWidth;
playButton.style.height = buttonHeight;
playButton.style.margin = buttonMargin + "auto";
playButton.onclick = () => {nextLevel(); Ui.setMainMenu(false);};

   //Help button
var helpButton = document.getElementById("HelpButton");
helpButton.style.width = buttonWidth;
helpButton.style.height = buttonHeight;
helpButton.style.margin = buttonMargin + "auto";
helpButton.onclick = () => {Ui.setHelpScreen(true)};

//Help screen
var helpScreen = document.getElementById("HelpScreen");
var helpScreen_a = document.getElementById("HelpScreen_a");
helpScreen_a.style.margin = buttonMargin + "auto";
helpScreen.style.padding = "30px"
helpScreen.style.position = "absolute";
helpScreen.style.display = "none";
helpScreen.style.width = ui.style.width;
helpScreen.style.height = ui.style.height;
helpScreen.style.flexDirection = "column";
helpScreen.style.background = "teal";

   //Back button
var backButton_H = document.getElementById("BackButton_H");
backButton_H.style.width = buttonWidth;
backButton_H.style.height = buttonHeight;
backButton_H.style.margin = buttonMargin + "auto";
backButton_H.onclick = () => {Ui.setHelpScreen(false);};

//Hint Screen
var hintScreen = document.getElementById("HintScreen");
var mandatory_img = document.getElementById("Mandatory_Img");
var cursedHint = document.getElementById("CursedHint");
hintScreen.style.padding = "30px"
hintScreen.style.position = "absolute";
hintScreen.style.display = "none";
hintScreen.style.width = ui.style.width;
hintScreen.style.height = ui.style.height;
hintScreen.style.flexDirection = "column";
hintScreen.style.background = "olive";

   //OKButton
var okButton = document.getElementById("OKButton");
okButton.style.textAlign = "center";
okButton.style.width = buttonWidth;
okButton.style.height = buttonHeight;
okButton.style.margin = buttonMargin + "auto";
okButton.onclick = () => {Ui.setHintScreen(false);};

//Pause screen
var pauseScreen = document.getElementById("PauseScreen");
pauseScreen.style.position = "absolute";
pauseScreen.style.display = "none";
pauseScreen.style.width = ui.style.width;
pauseScreen.style.height = ui.style.height;
pauseScreen.style.flexDirection = "column";
pauseScreen.style.textAlign = "center";
pauseScreen.style.background = "green";

   //Resume button
var resumeButton = document.getElementById("ResumeButton");
resumeButton.style.width = buttonWidth;
resumeButton.style.height = buttonHeight;
resumeButton.style.margin = buttonMargin + "auto";
resumeButton.onclick = () => {Ui.setPauseScreen(false);};

   //Quit button
var quitButton_P = document.getElementById("QuitButton_P");
quitButton_P.style.width = buttonWidth;
quitButton_P.style.height = buttonHeight;
quitButton_P.style.margin = buttonMargin + "auto";
quitButton_P.onclick = () => {gameContext.levelIndex = -1; Ui.setPauseScreen(false); Ui.setMainMenu(true)}

//InventoryScreen
var inventoryScreen = document.getElementById("InventoryScreen");
var items = document.getElementById("Items");
items.style.margin = "10px auto";
inventoryScreen.style.position = "absolute";
inventoryScreen.style.display = "none";
inventoryScreen.style.width = ui.style.width;
inventoryScreen.style.height = ui.style.height;
inventoryScreen.style.flexDirection = "column";
inventoryScreen.style.textAlign = "center";
inventoryScreen.style.background = "brown";

   //Back button
var backButton_I = document.getElementById("BackButton_I");
backButton_I.style.width = buttonWidth;
backButton_I.style.height = buttonHeight;
backButton_I.style.margin = buttonMargin + "auto";
backButton_I.onclick = () => {Ui.setInventoryScreen(false);};

//GameOver screen
var gameOverScreen = document.getElementById("GameOverScreen");
var gameOverMessage = document.getElementById("GameOverMessage");
gameOverMessage.style.textAlign = "center";
gameOverScreen.style.textAlign = "center";
gameOverScreen.style.position = "absolute";
gameOverScreen.style.display = "none";
gameOverScreen.style.width = ui.style.width;
gameOverScreen.style.height = ui.style.height;
gameOverScreen.style.flexDirection = "column";
gameOverScreen.style.background = "red";

   //Retry button
var retryButton = document.getElementById("RetryButton");
retryButton.style.width = buttonWidth;
retryButton.style.height = buttonHeight;
retryButton.style.margin = buttonMargin + "auto";
retryButton.onclick = () => {gameContext.loadedLevel.loadLevel(); Ui.setGameOverScreen(false);};
   //Quit button
var quitButton_GO = document.getElementById("QuitButton_GO");
quitButton_GO.style.width = buttonWidth;
quitButton_GO.style.height = buttonHeight;
quitButton_GO.style.margin = buttonMargin + "auto";
quitButton_GO.onclick = () => {gameContext.levelIndex = -1; gameContext.loadedLevel.loadLevel(); Ui.setMainMenu(true); Ui.setGameOverScreen(false);};

//FinishScreen
var finishScreen = document.getElementById("FinishScreen");
var bonus = document.getElementById("Bonus");
finishScreen.style.position = "absolute";
finishScreen.style.display = "none";
finishScreen.style.width = ui.style.width;
finishScreen.style.height = ui.style.height;
finishScreen.style.flexDirection = "column";
finishScreen.style.textAlign = "center";
finishScreen.style.background = "lime";

   //Quit button
var quitButton_F = document.getElementById("QuitButton_F");
quitButton_F.style.width = buttonWidth;
quitButton_F.style.height = buttonHeight;
quitButton_F.style.margin = buttonMargin + "auto";
quitButton_F.onclick = () => {Ui.setFinishScreen(false); Ui.setMainMenu(true)};

//MobileUI //chrome://inspect
var mobileUI = document.getElementById("MobileUI");
mobileUI.style.background = "red";

if(detectmob())
{
   mobileUI.style.display = "block";
}
else
{
   mobileUI.style.display = "none";
}

mobileUI.style.position = "absolute";
mobileUI.style.marginLeft = ui.style.width;

   //JumpButton
var jumpButton = document.getElementById("JumpButton");
jumpButton.ontouchstart = (e) => {e.preventDefault(); jumpButton.style.background = "purple"; gameContext.hero.jump();};
jumpButton.ontouchend = () => {jumpButton.style.background = "white";};

   //MobileMenuButton
var mobileMenuButton = document.getElementById("MobileMenuButton");
mobileMenuButton.ontouchstart = () => {mobileMenuButton.style.background = "purple"; Ui.setPauseScreen(true);};
mobileMenuButton.ontouchend = () => {mobileMenuButton.style.background = "white";};

   //MoveLeftButton
var moveLeftButton = document.getElementById("MoveLeftButton");
moveLeftButton.ontouchstart = (e) => {e.preventDefault(); moveLeftButton.style.background = "purple"; gameContext.hero.setMovesLeft(true);};
moveLeftButton.ontouchend = (e) => {e.preventDefault(); moveLeftButton.style.background = "white"; gameContext.hero.setMovesLeft(false)};

   //MoveRightButton
var moveRightButton = document.getElementById("MoveRightButton");
moveRightButton.ontouchstart = () => {moveRightButton.style.background = "purple"; gameContext.hero.setMovesRight(true)};
moveRightButton.ontouchend = () => {moveRightButton.style.background = "white"; gameContext.hero.setMovesRight(false)};

   //InteractionButton
var interactionButton = document.getElementById("InteractionButton");
interactionButton.ontouchstart = () => {interactionButton.style.background = "purple"; gameContext.hero.interaction();};
interactionButton.ontouchend = () => {interactionButton.style.background = "white";};
   
   //InventoryButton
var inventoryButton = document.getElementById("InventoryButton");
inventoryButton.ontouchstart = () => {inventoryButton.style.background = "purple"; gameContext.hero.openInventory()};
inventoryButton.ontouchend = () => {inventoryButton.style.background = "white";};

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

//Static functions

   //Main Menu
Ui.setMainMenu = (b) => {
   if(b){
      gameContext.foundBonus = 0;
      gameContext.maxBonus = 0;
      MainMenu.style.display = "flex";
      gameContext.isPaused = true;
   }
   else{
      MainMenu.style.display = "none";
      gameContext.isPaused = false;
   }
}

   //Help Screen
Ui.setHelpScreen = (b) => {
   if(b){
      Ui.setMainMenu(false);
      helpScreen.style.display = "flex";
   }
   else{
      helpScreen.style.display = "none";
      Ui.setMainMenu(true);
   }
}

   //Hint Screen
Ui.setHintScreen = (b) => {
   if(b){
      mandatory_img.src = gameContext.mandatoryItem.image.src;
      cursedHint.innerHTML = gameContext.cursedHint;
      hintScreen.style.display = "flex";
   }
   else{
      hintScreen.style.display = "none";
      gameContext.isPaused = false;
      
   }
}

   //Pause Screen
Ui.setPauseScreen = (b) => {
   if(b){
      pauseScreen.style.display = "flex";
      gameContext.isPaused = true;
   }
   else{
      pauseScreen.style.display = "none";
      gameContext.isPaused = false;
   }
}

   //Inventory Screen
Ui.setInventoryScreen = (b, artifacts = []) => {
   if(b){
      
      var i;
      var table_items =  items.getElementsByTagName("td");
      for(i = 0; i < table_items.length; ++i){
         table_items[i].style.display = "none";
      }
      
      
      for(i = 0; i < artifacts.length; ++i){
         var td = document.getElementById(i.toString() + "_Item");
         var img = document.getElementById(i.toString() + "_Item_Image");
         
         td.style.display = "table-cell";
         img.src = artifacts[i].image.src;
         img.style.border = "3px solid black";
         img.onmouseover = (e) => {e.target.style.border = "3px solid yellow"};
         img.onmouseout = (e) => {e.target.style.border = "3px solid black"};
         img.onclick = (e) => {
            var ind = e.target.id[0];
            
            artifacts[ind].drop();
            artifacts.splice(ind, 1);
            
            Ui.setInventoryScreen(false);
            };
            
      }
      
      inventoryScreen.style.display = "flex";
      gameContext.isPaused = true;
   }
   else{
      inventoryScreen.style.display = "none";
      gameContext.isPaused = false;
   }
}

      //GameOver Screen
   Ui.setGameOverScreen = (b, msg = "MESSAGE HERE") => {
   if(b){
      gameOverMessage.innerHTML = msg;
      gameOverScreen.style.display = "flex";
      gameContext.isPaused = true;
   }
   else{
      gameOverScreen.style.display = "none";
      gameContext.isPaused = false;
   }
}

   //Finish Screen
Ui.setFinishScreen = (b) => {
   if(b){
      bonus.innerHTML = "You found " + gameContext.foundBonus.toString() + "/" + gameContext.maxBonus.toString() + " bonus items";
      finishScreen.style.display = "flex";
      gameContext.isPaused = true;
   }
   else{
      finishScreen.style.display = "none";
      gameContext.isPaused = false;
   }
}
