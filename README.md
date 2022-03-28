# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Adian Alvarado**

Time spent: **6-7** hours spent in total

Link to project: https://abundant-caramel-chauffeur.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [ x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ x] Game buttons each light up and play a sound when clicked. 
* [ x] Computer plays back sequence of clues including sound and visual cue for each button
* [ x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ x] User wins the game after guessing a complete pattern
* [ x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ x] Computer picks a different pattern each time the game is played
* [x ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)
If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/j5Ab1Tt.gif)

New pattern each game:

![](https://i.imgur.com/MLR94r9.gif)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    - w3Schools.com: To get a better font (trebuchetms) and to learn how to use arrays in Javascript.
    - rapidtables.com: To get the nice green and off white colors for background and text.
    - developer.Mozilla.org: To understand how to use the Math.random() function in Javascript (to get a new secretpattern everytime).
    - 2ality.com: Also used to understand arrays in Javascript.


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One challenge I kept running into was not being familiar with Javascript. When I got stuck, I decided to look up the documentation for certain things like arrays. It helped a lot because I could then go ahead and add the extra feature of creating a new pattern for each game. I decided to use the Math.random() function and a while loop so it would generate 8 new numbers before every new game. I believe it added a lot to the game because it truly made the game addicting. I also ran into an issue where the buttons weren't changing back to the lighter version. So after the hints were given to the user, the buttons stayed as the darker version, making the game more confusing. I knew the tips and guidance you gave us would've accounted for that change, so I just re-read every line of code dealing with the buttons. I ended up finding the bug later on. What had happened was my clearButton() function was exactly the same as my lightButton() function. So when my program tried to clear the button and change it back to the lighter version, my clearButton() function lit up the button again. It reminded me of how much impact such a minor error could cause.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
A few questions I have are how to interact between different files? For example, I was thinking of adding a line of code that would change the background of the webpage to red if the user lost the game. However, I was uncertain how I would interact between the background in my CSS file and the Javascript file. I was also wondering how I could add some text that would update whenever the user made a mistake. For example, I could have a spot above the buttons with some text saying "Mistakes: " and it would update as soon as the user made a mistake. I feel like this would be pretty helpful for the user because once I focused on the pattern, I often forgot how many mistakes I had left before I ultimately lost. All in all, I enjoyed the process because it was more visual than the programs I would make for my programming assignments.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time to spend on this game, I would like to add multiple players & two different game modes. For example, I could start the menu by asking the user if it's solo or 1v1. If it was 1v1, I could take in each player's name and keep track of their progress until either person made a mistake. The other game mode would be similar to HORSE in basketball or SKATE. Both games are all about one-upping each other. For example, in basketball, you would need to shoot a shot from a certain distance, and if the second player doesn't make it, they lose the H from horse. You could do a tough trick in SKATE, and you keep going until someone loses all the letters of skate (5 tries). The way I thought of implementing this game mode was to limit the max steps each player can make to previous steps + 2. This limit is to stop the first player from making too large of a pattern that the second player wouldn't have a chance of remembering. For example, if you were the first player, you won because you could just spam each button for 2 minutes. These additions would add a lot of depth to the game because if someone gets bored from the light & sound game, they could play against their friends.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1_qoREHnpWiToHkWtiVZghcuy6pnYPeEL/view?usp=sharing)


## License

    Copyright [Adian Alvarado]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
