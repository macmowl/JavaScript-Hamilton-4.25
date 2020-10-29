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

    //add a click listener to the run button
    document.getElementById("run").addEventListener("click", function(){

      //loop to push random 10 numbers in the array numbers  
      for(let i=0; i<10; i++){
            number = Math.floor(Math.random() * 100) + 1;
            numbers.push(number);
      }

      //for every element of the numbers array -> modify innerHTML of correspongin ID
      numbers.forEach((element, index) => {

            id = index + 1;

            document.getElementById("n-" + id).innerHTML = element;

            //Sum of the numbers
            sum = sum + element;
      })

      //Get max and min values of the array numbers
      max = Math.max(...numbers);
      min = Math.min(...numbers);

      //Calculate average of all the numbers in the array numbers
      average = sum / (numbers.length);

      //Put the values in the HTML
      document.getElementById("min").innerHTML = min;
      document.getElementById("max").innerHTML = max;
      document.getElementById("sum").innerHTML = sum;
      document.getElementById("average").innerHTML = average;
      
    })

})();
