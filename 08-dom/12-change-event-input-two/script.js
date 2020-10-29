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

    let passLength;
    let password;
    let passNumbers;

    let passwordInput = document.getElementById("pass-one");
    let passwordOK = document.getElementById("validity");

    passwordInput.addEventListener("input", function(){
        
        password = passwordInput.value;
        passLength = password.length;
        passNumbers = password.replace(/[^0-9]/g,"").length;

        if(passLength >= 8 && passNumbers >= 2){
            passwordOK.innerHTML = "Ok";
        }
        else{
            passwordOK.innerHTML = "Not ok";
        }
        
        
        

        
    })

})();
