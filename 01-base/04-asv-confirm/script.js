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
    let age = prompt("What is your age ?");
    let gender = prompt("What is your gender ?");
    let town = prompt("In which town do you live ?");

    if(confirm("Are these informations correct ? Age = " + age + " Gender = " + gender + " Town = " +town)){
        console.log("ok");
    }
    else{
        document.location.reload();
    }

})();
