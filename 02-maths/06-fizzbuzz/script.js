/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    /*
        for (var i = 1; i < 101; i++) {
            if (i % 15 == 0) {
                console.log(i + ": FizzBuzz");
            }
            else if (i % 3 == 0) {
                console.log(i + ": Fizz");
            }
            else if (i % 5 == 0) {
            console.log(i + " :Buzz");
            }
            else {
                console.log(i);
                }
        }*/

    var num = 0
    while (num < 100) {
        num = num + 1;
        if (num % 3 == 0 && num % 5 == 0)
            console.log(num + ": FizzBuzz");
        else if (num % 3 == 0)
            console.log(num + ": Fizz");
        else if (num % 5 == 0)
            console.log(num + ": Buzz");
        else
            console.log(num);
    }

})();
