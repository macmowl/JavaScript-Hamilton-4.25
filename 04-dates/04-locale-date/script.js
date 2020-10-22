/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let date = new Date();

    let dayName = date.toLocaleString("default", { weekday: "long" });
    let day = date.getDay();
    let month = date.toLocaleString("default", { month: "long" });
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let dateString = dayName + " " + day + " " + month + " " + year + ", " + hours + "h" + minutes;

    document.getElementById("target").innerHTML = dateString;

})();
