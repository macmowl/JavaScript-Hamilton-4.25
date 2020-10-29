/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    const randomNumber = Math.floor((Math.random())*100 + 1);
    console.log(randomNumber);

    let numberFound = false;
    let numberGiven;
    let counter = 0;

    while(numberFound != true){
        numberGiven = prompt("Guess a number between 1 and 100");
        counter++;

        if(numberGiven == randomNumber){
            numberFound = true;
        }
        if(numberGiven < randomNumber){
            alert("Higher !");
        }
        if(numberGiven > randomNumber){
            alert("Lower !");
        }
    }

    alert("That's it ! You found the answer in " + counter + " guesses");

})();
