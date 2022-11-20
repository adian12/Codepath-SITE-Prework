//Global Constants
const clueHoldTime = 1000; //how long each clue plays/holds
const cluePauseTime = 333; //the pause in between each clue
const nextClueWaitTime = 500; //wait time before playing back the clue sequence 


//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4]; //the secret pattern to win the game, however, a new pattern is created each game
var progress = 0; //keeps track of the user's progress 
var gamePlaying = false; //flag variable that's holds whether or not the game is being played
var tonePlaying = false;
var volume = 0.5; //must keep the volume above 0.0 and below 1.0
var guessCounter = 0; //keeps track of the users' guesses
var mistakes; //keeps track of the number of mistakes the user makes

//functions to start and stop the game
function startGame(){
  //initializes the game variables
  mistakes = 1; //initializing the mistakes variable to 1 because 0 will allow the user to make 4 mistakes
  progress = 0;
  gamePlaying = true; //since the game has been started
  secretPattern();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame(){
  gamePlaying = false;
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clearButton();
}


//program uses these functions to give hints to the user
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}


//plays a single clue
function playSingleClue(btn){
  if (gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

//plays the clue sequence
function playClueSequence(){
  guessCounter = 0; //resets the guessCounter
  context.resume();
  let delay = nextClueWaitTime; //sets the delay to initial wait time
  
  for (let i = 0; i<=progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); //sets a timeout to play the clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}


//alerts the user once they lost
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

//alerts the user if they won
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

//handles the users' guesses
function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if (pattern[guessCounter] == btn){
    //the guess was correct
    if (guessCounter == progress){
      if (progress == pattern.length - 1){
        winGame(); //calling winGame because it was their last turn and they got it correct
      }else{
        progress++;
        playClueSequence(); //if it wasn't their last turn, then they continue and we start the next clue
      }
    }else{
      guessCounter++; //continue but check on their next guess
    }
  }else{
    mistakes++; //increments mistakes variable because the user made an error
    if (mistakes > 3){
      loseGame(); //they guessed wrong and the game is now over so call the loseGame fucntion
    }
    
  }
  
}


//generates a new secret pattern for each game
function secretPattern(){
  //getRandomNums(4);
  let count = 0; //holds the number of times that getRandomNums(4) gets called
  
  while (count <= 8){
    pattern = getRandomNums(8); //generates a number between 0 and 4
    count++; //increments count each time the function gets called
  }
  for(let i = 0; i < pattern.length; i++){
    if (pattern[i] == 0){
      pattern[i] += 1; //adding 1 to any zeros that are in the array to prevent error
    }
  }
  
  for (let j = 0; j < pattern.length; j++){
    console.log(pattern[j] + " ");
  }
}

//used to fetch new values
function getRandomNums(sizeOfSetMax){
  const setOfVals = new Array(sizeOfSetMax); //making an array that we can return with the randomly generated values
  //Math.floor(Math.random() * sizeOfSetMax);
  
  //adds the randomly generated value at each index
  for (let i = 0; i < sizeOfSetMax; i++){
    setOfVals[i] = Math.floor(Math.random() * sizeOfSetMax);
  }
  return setOfVals; //returns the array with the new values
}




// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 530,
  5: 650,
  6: 800,
  7: 900,
  8: 1000
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


/*resources used on project:
  https://www.w3schools.com/css//css_font_websafe.asp : used to get a better font (trebuchetms)
  https://www.rapidtables.com/web/css/css-color.html#white : used to get the nice green and offwhite colors
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random : used to understand the Math.random() function
  https://www.w3schools.com/js/js_arrays.asp : used to figure out how to use arrays in Javascript
  https://2ality.com/2018/12/creating-arrays.html#:~:text=One%20common%20way%20of%20creating,has%20holes%20in%20it%20assert. : used to figure out how to create an array of a set length
  

*/