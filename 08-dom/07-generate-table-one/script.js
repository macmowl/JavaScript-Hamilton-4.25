/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        let tableau = document.createElement("table");
        let row, column;
        // creating all cells
        for (let i = 0; i < 10; i++) {
            row = document.createElement("tr");
            column = document.createElement("td");
            column.innerText = "okok";
            row.appenChild(column);
            tableau.appenChild(row);
        }

        document.getElementById("target").appendChild(tableau);

})();
