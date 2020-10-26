/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let numbers = [];
    let number;
    let id;
    let max;
    let min;
    let sum = 0;
    let average;

    document.getElementById("run").addEventListener("click", function(){
        
      for(let i=0; i<10; i++){
            number = Math.floor(Math.random() * 100) + 1;
            numbers.push(number);
      }

      numbers.forEach((element, index) => {

            id = index + 1;

            document.getElementById("n-" + id).innerHTML = element;

            sum = sum + element;
      })

      max = Math.max(...numbers);
      min = Math.min(...numbers);
      average = sum / (numbers.length);

      document.getElementById("min").innerHTML = min;
      document.getElementById("max").innerHTML = max;
      document.getElementById("sum").innerHTML = sum;
      document.getElementById("average").innerHTML = average;
      
    })

})();
