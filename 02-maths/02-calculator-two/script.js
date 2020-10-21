/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        
        
        let firstOp;
        let secondOp;
        let result;


        switch(operation){
            case 'addition':
                firstOp = document.getElementById("op-one").value;
                secondOp = document.getElementById("op-two").value;

                result = Number(firstOp) + Number(secondOp);

                alert(result);
                break;
            case 'substraction':
                firstOp = document.getElementById("op-one").value;
                secondOp = document.getElementById("op-two").value;

                result = Number(firstOp) - Number(secondOp);

                alert(result);
                break;
            case 'multiplication':
                firstOp = document.getElementById("op-one").value;
                secondOp = document.getElementById("op-two").value;

                result = Number(firstOp) * Number(secondOp);

                alert(result);
                break;
            case 'division':
                firstOp = document.getElementById("op-one").value;
                secondOp = document.getElementById("op-two").value;

                result = Number(firstOp) / Number(secondOp);

                alert(result);
                break;
            default:
                alert("error");
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
