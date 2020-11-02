/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target");
    let textar = target.innerText;
    target.innerHTML = '';
    target.style.display = "table-cell";
    //target.style.animation = "jumb 2s infinite";

    toCharArray(textar);
    console.log(charArray)

    let time = 0
    
    for (i=0; i<textar.length ; i++ ) {
        let span = document.createElement('span');
        span.id = 'lt_'+i;
        span.style.display = "table-cell";
        span.style.animation = "jumb 2s infinite "+time/10+"s";
        span.style.width = "40px";
        //span.style.animationDelay = time+"s";
        if (time == 75)
        { time = 0 }
        else
        { time++ }
        
        
        
        span.innerHTML = textar[i];
        target.appendChild(span);
     }


///// ADD STYLE
    function addAnimation(keyframes) {
            
        
        let styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = keyframes
        document.head.appendChild(styleSheet)
        console.log(keyframes)
    }

/* if you whan jumb lettre wave 
addAnimation(`
@keyframes jumb {
    0% { transform:translateY(0px) }
    50% { transform:translateY(25px); }
    100% { transform:translateY(0px) }
`)
*/



addAnimation(`
@keyframes jumb {
    0% { font-size: 100%;}
    10% { font-size: 125%;}
    20% { font-size: 150%;}
    30% { font-size: 175%;}
    40% { font-size: 200%;}
    50% { font-size: 225%;}
    60% { font-size: 200%;}
    70% { font-size: 175%;}
    80% { font-size: 150%;}
    90% { font-size: 125%;}
    100% { font-size: 100%;}
`)


//target.style.animation = "jumb 2s infinite";

////// STYLE ADDED




    

})();


function toCharArray(str){
    charArray =[];
    for(var i=0;i<str.length;i++){
         charArray.push(str[i]);
    }
}

