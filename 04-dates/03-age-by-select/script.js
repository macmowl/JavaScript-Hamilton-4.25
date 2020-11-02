/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    cdate = new Date();
    cyear = cdate.getFullYear();
    cmonth = cdate.getMonth();
    cmonth = cmonth + 1;
    cday = cdate.getDate();
    /*alert(`current date ${cday}/${cmonth}/${cyear}`);*/

    document.getElementById("run").addEventListener("click", function () {
        bday = parseInt(document.getElementById("dob-day").value)
        bmonth = parseInt(document.getElementById("dob-month").value)
        byear = parseInt(document.getElementById("dob-year").value)

        /*alert("DoB :"+ bday +"/"+ bmonth +"/"+ byear); */

        let older = cyear-byear;
     //   alert("You have +- "+older+" years old")

        if (bmonth > cmonth) {
            alert("You have "+older+" years old");
        }
        else if (bmonth < cmonth)
        {
            older == older-1;
            alert("You have "+older+" years old");
        }
        else if (bmonth == cmonth && bday > cday)
        {
            older = older-1;
            alert("You have "+older+" years old");
        }
        else if (bmonth == cmonth && bday < cday)
        {
            alert("You have "+older+" years old");
        }
        else if (bmonth == cmonth && bday == cday);
        {
            alert("You have "+older+" years old, Happy B-Day");
        }


/*
        var bunixtime = (""+byear+bmonth+bday+'00'+'00'+'00');
        bunixtime = bunixtime/1000;

        var cunixtime = (""+cyear,cmonth,cday+'00'+'00'+'00');
        cunixtime = cunixtime/1000;

        let difunixtime = cunixtime - bunixtime;

        alert(difunixtime)

        let unixolder = 31536000/difunixtime;

        alert(unixolder)
*/

    })






})();
