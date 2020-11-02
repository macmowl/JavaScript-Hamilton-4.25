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

    var y = Math.floor(Math.random() * 100 + 1); 
      console.log("cheat sol "+y)
    
    var guess = 1; 
    
      
 function letsgo (){ 
   // number guessed by user      
   var x = prompt("Please type a number (try: "+guess+")", x);
  
   if(x == y) 
   {     
       alert("that's it! - you have do "
               + guess + " try "); 
   } 
   else if(x > y) 
   {     
       guess++; 
       alert("lower"); 
       letsgo()
   } 
   else
   { 
       guess++; 
       alert("higher") 
       letsgo()
   } 
} 
letsgo()

})();
