/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const target = document.getElementById("target");

    let table = document.createElement("table");

    let row;
    let cell;
    let cellText;

    

    for(let i = 1; i <= 10 ; i++){

        row = document.createElement("tr");

        for(let v = 1; v <= 10; v++){
            cell = document.createElement("td");
            cell.innerHTML = (i * v);

            row.appendChild(cell);
        }
        
        table.appendChild(row);

    }

    target.appendChild(table);

})();
