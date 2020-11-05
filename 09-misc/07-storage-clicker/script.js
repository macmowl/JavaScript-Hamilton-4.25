/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let counter = 0;
    let stockage = localStorage;

    //On page load, check if value storage
    window.addEventListener( 'load', () => {
        if ( stockage.length != 0) {
            counter = stockage.getItem('value');
            document.getElementById('target').innerHTML = counter;
        } else {
            counter = 0;
        }
    })
    
    
    // on increment button click, add 1
    document.getElementById('increment').addEventListener( 'click', () => {
        counter++;
        stockage.setItem('value', counter);
        console.log(counter);
        document.getElementById('target').innerHTML = counter;
    })

})();
