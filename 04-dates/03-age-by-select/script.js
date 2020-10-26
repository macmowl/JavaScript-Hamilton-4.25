/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let birthDay;
    let birthMonth;
    let birthYear;

    let currentDate = new Date();
    let birthDate = new Date();

    let age_ms;
    let ageDate;

    let age;

    // your code here
    document.getElementById("run").addEventListener("click", function() {

        birthDay = document.getElementById("dob-day").value;
        birthMonth = document.getElementById("dob-month").value;
        birthYear = document.getElementById("dob-year").value;

        

        birthDate.setFullYear(birthYear, (birthMonth - 1), birthDay);
        
        age_ms = currentDate - birthDate.getTime();

        ageDate = new Date(age_ms);

        age = ageDate.getUTCFullYear() - 1970;

        alert("You are " + age + " years old.");
        


    });

})();
