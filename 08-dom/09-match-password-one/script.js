/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let password1;
    let password2;

    document.getElementById("run").addEventListener("click", function(){

        password1 = document.getElementById("pass-one").value;
        password2 = document.getElementById("pass-two").value;


        if(password1 === password2){
            console.log("Passwords match !");
        }
        else{
            document.getElementById("pass-one").style.border = "2px solid red";
            document.getElementById("pass-two").style.border = "2px solid red";
        }
      
    })

})();
