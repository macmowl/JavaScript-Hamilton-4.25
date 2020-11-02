/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();

/*
var answ_age = prompt("how old are you?");
var answ_genre = prompt("That is your genre ?");
var answ_town = prompt("Where are you from ?");
*/


function funct_age() {
    var answ_age = prompt("how old are you?");
    
    var con=confirm("Your age is " +answ_age );
if(con==true)
{
    alert("TY for confirmation");
}  
else
{
    funct_age();
}  
  }


  funct_age();




  function funct_genre() {

var answ_genre = prompt("That is your genre ?");

    
    var con=confirm("Your genre is " +answ_genre );
if(con==true)
{
    alert("TY for confirmation");
}  
else
{
    funct_genre();
}  
  }
  funct_genre();



  function funct_city() {

    
    var answ_town = prompt("Where are you from ?");
        
        var con=confirm("Your town is " +answ_town );
    if(con==true)
    {
        alert("TY for confirmation");
    }  
    else
    {
        funct_city();
    }  
      }
      funct_city();
    