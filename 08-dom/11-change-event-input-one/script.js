/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("pass-one").setAttribute("maxLength",10) ; /*max 10 sur l'élément elements*/
    document.getElementById("pass-one").addEventListener( "input", () => {
        /*Create variable with id HTML et les invoquer*/
    let inputElement = document.getElementById("pass-one");/*element input*/
    let counterElement = document.getElementById("counter"); /*0/10*/
    /*action*/
     counterElement.innerText = `${inputElement.value.length}/10`;

    });

})();


