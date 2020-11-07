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

        let tableau = document.createElement("table");  //crée une table.
        let row, data;                                  //crée les variables "row" et "data".

        for (let i = 0; i < 10; i++) {                  //crée une boucle for pour créer 10 lignes.
            row = document.createElement("tr");         //crée le html <tr>.
            data = document.createElement("td");        //crée le html <td>.
            data.innerText = "Bastien";                 //crée la chaine de caractère "Bastien".
            row.appendChild(data);                      //pousse l'enfant "data" dans le parent "row".
            tableau.appendChild(row);                   //pousse l'enfant "row" dans le parent "tableau".
        }

        document.getElementById("target").appendChild(tableau); //pousse l'enfant "tableau" dans le parent "target".

})();
