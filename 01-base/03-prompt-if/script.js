/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
  let question = prompt("Do you want some cake ?");

  if(question == "yes" || question == "Yes"){
    alert("Congratulations ! But there is no more left, sorry.");
    console.log(question);
  }
  else{
    alert("WHY DON'T YOU WANT TO EAT MY CAKE ???");
    console.log(question);
  }

})();