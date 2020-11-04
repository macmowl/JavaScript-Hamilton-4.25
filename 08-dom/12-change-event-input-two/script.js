/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

/*
    let mypwd 

    var myInput = document.getElementById("psw");

    document.getElementById(pass-one).addEventListener("onkeypress",
    mypwd =  document.getElementById(pass-one),
    console.log(mypwd.lenght)
    )
    
    mypwd.onkeyup = function() {
        document.getElementById("validity").node.innerText = '1234';
      }
*/


let valide = document.getElementById("validity");
let myInput = document.getElementById("pass-one");


myInput.onkeyup = function() { 

    let checklong = 0
    let check2num = 0

    let onlyDigits = myInput.value.replace(/[^0-9 ]/g, "");

        if( onlyDigits.length >= 2 ) {
            check2num = 1;
        } 
        else {
            check2num = 0;
        }


        if(myInput.value.length >= 8) {
            checklong = 1;

        } else {
            checklong = 0;
        }


        if (checklong == 1 && check2num == 1) {
            valide.innerHTML = 'OK';
        }
        else {
            valide.innerHTML = 'Not ok';
        }
    }


})();
