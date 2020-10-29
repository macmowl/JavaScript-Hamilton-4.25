/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let target = document.getElementById('target');
    let letters = target.innerHTML.split("");
    let randomDelay;
    let index = 0;

    target.innerHTML = "";
    

    for (let i = 0; i < letters.length; i++) {

      randomDelay = Math.floor(Math.random()*250 + 50);

      setTimeout(()=>{

        target.innerHTML = target.innerHTML + letters[index];

        index++;

      },i*randomDelay);

    }

      


})();
