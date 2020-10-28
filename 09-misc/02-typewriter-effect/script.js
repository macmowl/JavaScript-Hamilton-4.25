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

    let text = document.getElementById("target").innerHTML;
    document.getElementById("target").innerHTML = "";

    let randomDelay = Math.round(Math.random()*1000);

    function showText(target, message, index, interval) {   
        if (index < message.length) {
          document.getElementById(target).append(message[index++]);
          setTimeout(function () { showText(target, message, index, interval); }, Math.round(Math.random()*1000));
        }
      }
      
        showText("target", text, 0, randomDelay);   
      


})();
