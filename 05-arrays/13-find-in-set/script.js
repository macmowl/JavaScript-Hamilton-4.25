/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here

    let setSize;

    document.getElementById("run").addEventListener("click", function(){

       setSize = people.size;
       console.log(setSize);

       if(people.has("Alexandre")){
           console.log("Alexandre is part of the set");
       }
       else{
           console.log("Alexandre is not a part of the set");
       }
        

    })
})();
