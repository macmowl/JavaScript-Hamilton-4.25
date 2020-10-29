/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let target = document.getElementById('target');

    let buttonOne = document.getElementById('part-one');
    let buttonTwo = document.getElementById('part-two');
    let buttonThree = document.getElementById('part-three');
    let buttonFour = document.getElementById('part-four');

    let numberValue;
    let buttonNumber;
    let newNumber;

    buttonOne.addEventListener("click", function(){

        numberValue = Number(target.innerHTML.slice("+"));
        buttonNumber = Number(buttonOne.innerHTML);

        if(buttonNumber < 499){

            newNumber = numberValue + 1000000;
            target.innerHTML = "+0" + newNumber;

            buttonNumber = buttonNumber+1;
            buttonOne.innerHTML = ""+buttonNumber;
        }
        else{

            newNumber = numberValue - (499000000-460000000);
            target.innerHTML = "+0" + newNumber;

            buttonNumber = "460";
            buttonOne.innerHTML = buttonNumber;

        }

        
    })
    buttonTwo.addEventListener("click", function(){

        numberValue = Number(target.innerHTML.slice("+"));
        buttonNumber = Number(buttonTwo.innerHTML);

        if(buttonNumber < 99){

            newNumber = numberValue + 10000;
            target.innerHTML = "+0" + newNumber;

            buttonNumber = buttonNumber+1;

            if(buttonNumber < 10){
                buttonTwo.innerHTML = "0" + buttonNumber;
                }
            else{
                buttonTwo.innerHTML = ""+buttonNumber;
            }
            
        }
        else{

            newNumber = numberValue - 990000;
            target.innerHTML = "+0" + newNumber;

            buttonTwo.innerHTML = "00";

        }
    })
    buttonThree.addEventListener("click", function(){

        numberValue = Number(target.innerHTML.slice("+"));
        buttonNumber = Number(buttonThree.innerHTML);

        if(buttonNumber < 99){

            newNumber = numberValue + 100;
            target.innerHTML = "+0" + newNumber;

            buttonNumber = buttonNumber+1;

            if(buttonNumber < 10){
                buttonThree.innerHTML = "0" + buttonNumber;
                }
            else{
                buttonThree.innerHTML = ""+buttonNumber;
            }
            
        }
        else{

            newNumber = numberValue - 9900;
            target.innerHTML = "+0" + newNumber;

            buttonThree.innerHTML = "00";

        }
    })
    buttonFour.addEventListener("click", function(){

        numberValue = Number(target.innerHTML.slice("+"));
        buttonNumber = Number(buttonFour.innerHTML);

        if(buttonNumber < 99){

            newNumber = numberValue + 1;
            target.innerHTML = "+0" + newNumber;

            buttonNumber = buttonNumber+1;

            if(buttonNumber < 10){
                buttonFour.innerHTML = "0" + buttonNumber;
                }
            else{
                buttonFour.innerHTML = ""+buttonNumber;
            }
            
        }
        else{

            newNumber = numberValue - 99;
            target.innerHTML = "+0" + newNumber;

            buttonFour.innerHTML = "00";

        }
    })

})();
