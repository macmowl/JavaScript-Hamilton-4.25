/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here

    let birdName;
    let birdAdjective;
    let birdFull;
    
    let adjectivesArray = Array.from(adjectives);

    let randomIndex = 0;
    let randomAdjective = 0;

    document.getElementById("run").addEventListener("click", function(){

        randomIndex = Math.round(Math.random()*11);
        randomAdjective = Math.round(Math.random()*10);

        birdName = birds[randomIndex].name;
        birdAdjective = adjectivesArray[randomAdjective];


        if(birds[randomIndex].fem){

            birdFull = "La " + birdName + " " + birdAdjective + "e";
            

        }else{

            birdFull = "Le " + birdName + " " + birdAdjective;

        }

        document.getElementById('target').innerHTML = birdFull;
    
     })
    
    
    
    



})();
