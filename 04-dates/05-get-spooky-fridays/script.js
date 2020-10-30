/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

  

    document.getElementById("run").addEventListener("click", function () {
        let sel_year = document.getElementById("year").value;
        
        let d = new Date();
        d.setDate(13);
        d.setMonth(0);
        d.setFullYear(sel_year)
        alert("year tested :"+d);
        
        for ( d.setMonth=0; d.setMonth<12; d.setMonth++ ) {
            alert("checked date :"+d);
            if (d.getDay = 5)s
            { alert(d.getDay)}

        }

    })


})();
