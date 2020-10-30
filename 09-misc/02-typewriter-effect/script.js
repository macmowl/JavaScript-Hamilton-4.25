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


    
    let target = document.getElementById("target");
    let text = target.innerText;
    target.innerHTML = '';
    console.log(text)
    let i = 0;
    let speed = 50;
    
function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      console.log(text.charAt(i))
      i++;
      setTimeout(typeWriter, speed);
    }
  }



    typeWriter();

})();

