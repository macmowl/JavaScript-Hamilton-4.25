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
    document.getElementById("run").addEventListener("click", function () { 
        
        let pass1 = document.getElementById("pass-one").value;
        let pass2 = document.getElementById("pass-two").value;
        console.log(pass1, pass2);

        if (pass1 === pass2) {
            console.log('passwords entered in the input fields are exactly the same');
            document.getElementById("pass-two").style.borderColor = "green";
            }
        else {
            console.log('passwords entered in the input are NOT the same');
            document.getElementById("pass-two").style.borderColor = "red";
        }
                
            
        



    })

})();
