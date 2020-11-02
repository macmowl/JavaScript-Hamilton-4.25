/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        var number=2
        
        while (number <= 21) {
            result = Math.pow(number, 2);
            document.write('Square of '+number+' : '+result);
            document.write('<br/>');
            number += + 2;
            }

    });

})();
