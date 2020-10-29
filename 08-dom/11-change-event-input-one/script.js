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

    // your code here

    let passLength;
    let password;

    let passwordInput = document.getElementById("pass-one");
    let passwordCount = document.getElementById("counter");

    

    passwordInput.addEventListener("input", function(){
        
        
        password = passwordInput.value;
        passLength = password.length;

        if(passLength <= 10){
            passwordCount.innerHTML = passLength + "/10";
        }
        else{
            passwordInput.value = passwordInput.value.slice(0, 10);
        }
        
        
    })

})();
