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

//étape 1 : mettre les caractères dans un tableau
/*
    var elt = document.getElementById('target'); //prendre le contenu de target dans elt  <<document.querySelector("#target");>> avec le # pour qu'il sache que c'est une id
    let charsArray = [];
    var monTexte = elt.innerText || elt.textContent; //innerText et textContent pour une compatibilité des navigateurs. Mettre elt dans monTexte
    charsArray = monTexte.split(''); //séparer tous les caractères en les indexant dans un tableau nommé charsArray
*/


    let elt = document.querySelector("#target");//prendre le contenu de l'ID target dans ELT (utilisation de # pour une ID et . pour une classe, comme en css)

    let tempo = elt.innerText; //injecter le texte de TARGET dans TEMPO
    
    tempo = tempo.split("");//dans TEMPO, séparer tous les caractères en les indexant (création d'un ntableau)
    
    elt.innerText = ""; // vide le contenu de TARGET sur la page HTML en y écrivant rien.
    

    // étape 2 : créer la vague

    const newsize = [1.5, 2, 2.5, 3, 3.5, 4, 3.5, 3, 2.5, 2]; //définir les valeurs des prochaines tailles de caractère en vague, on donne la mesure plus loin
    
    tempo.forEach(function(chars, i){ // pour chaque élément (CHARS), selon son index (I), dans la tableau TEMPO... 
      let wave = document.createElement("span"); //...création d'un élément balise SPAN dans le document cible. Le tout placé dans la varibale WAVE
      wave.innerText = chars; // injection de la variable CHARS, en texte, dans WAVE
      wave.style.fontSize = newsize[i % newsize.length] + "rem";//<< wave.style.fontSize >> définit la taille de la police des éléments dans WAVE. Et << newsize[i % newsize.length] + "rem" >> est la valeur de fontSize, donc: dans le tableau newsize, aller chercher la valeur correpondant à l'id modulo la taille du tableau. Par exemple: pour i = 4 (donc le 4ème caractère de la phrase), prendre la valeur 3.5 qui est la 4ème du tableau newsize. Pour i = 53, prendre la valeur 3 (qui se trouve à l'index 3).
      // i % newsize.length est simple ici car on a 10 éléments dans newsize. Donc, dans le tableau wave, l'index 14 sera divisé par 10 (la longeur de newsize) et donnera 1.4. le Modulo ( % ) retient la valeur restante de la division. Donc, pour 1.4, ce sera 4. Il va alors chercher la valeur indexée en 4 dans NEWSIZE et trouver 3.5.
      elt.appendChild(wave); //on place tous les WAVE en enfants de l'ID target via appenChild sur ELT. Cela donnera une suite de SPAN avec, en contenu, un caractère unique et, en valeur, style="font-size: 2rem;" DONC, par exemple: <span style="font-size: 1.5rem;">W</span>.
    });

    console.log(2.5 % 12)
    

/*
************** CE QUI SUIT NE SONT QUE DES RESTES DE MES RECHERCHES **************

//étape 2 : faire la vague


let a = "1.5rem", b = "2.0rem", c = "2.5rem", d = "3.0rem", e = "3.5rem";
let i = 0;

var huit = '<SPAN STYLE="font-size:'+a+'">'+charsArray[i]+'</SPAN>';
var sept = '<SPAN STYLE="font-size:'+b+'">'+charsArray[i]+'</SPAN>';
var quatre = '<SPAN STYLE="font-size:'+c+'">'+charsArray[i]+'</SPAN>';
var trois = '<SPAN STYLE="font-size:'+d+'">'+charsArray[i]+'</SPAN>';
var douze = '<SPAN STYLE="font-size:'+e+'">'+charsArray[i]+'</SPAN>';
let newText = [];
    
charsArray.forEach(function() {
    for (i = 0; i < charsArray.length; i++) {
        
        if (i == 0 || i%8 == 0 ) { // (i%8 == 0 ne fonctionne pas) je ne sais pas si cela signifie bien "à condition que i vale zéro OU BIEN qu'il soit divisible par 8"
                newText.push('<SPAN STYLE="font-size:'+a+'">'+charsArray[i]+'</SPAN>');
                }
        else if (i == 1 || i == 7 || i == 9 || i == 15 || i == 17 || i == 23 || i == 25 || i == 31) { 
                newText.push('<SPAN STYLE="font-size:'+b+'">'+charsArray[i]+'</SPAN>'); 
               }
        else if (i == 2 || i == 6 || i == 10 || i == 14 || i == 18 || i == 22 || i == 26 || i == 30) { //  || (i-2)%4 == 0 je ne sais pas si ce code fonctionne pour dire que (i-2) est divisible par 4?
                newText.push('<SPAN STYLE="font-size:'+c+'">'+charsArray[i]+'</SPAN>'); 
                }
        else if (i == 3 || i == 5 || i == 11 || i == 13 || i == 19 || i == 21 || i == 27 || i == 29 || i == 35) { 
                newText.push('<SPAN STYLE="font-size:'+d+'">'+charsArray[i]+'</SPAN>'); 
                 }
        else if (i == 4 || i == 12 || i == 20 || i == 28 || i == 36 || i == 44) { 
                newText.push('<SPAN STYLE="font-size:'+e+'">'+charsArray[i]+'</SPAN>'); 
                }
        else { 

        }
    }           

})

let final = newText.join('');
document.getElementById("target").innerHTML = final;


console.table(final);
console.table(newText);
console.table(charsArray);
console.log(huit);
console.log(sept);
console.log(quatre);
console.log(trois);
console.log(douze);
console.log(monTexte);
console.log(elt);
console.log(monTexte[2]);
*/


//  document.getElementById("target").innerHTML = monTexte[2] + deux;

/*
for (let i = 0; i < elt.length; i++) {
       if (i == 0){
        charsArray[i].style.fontSize.push= a;
            }
          else if (i == 1)
            {
                charsArray[i].style.fontSize.push = b;
            }    
            else if (i == 2)
            {
                charsArray[i].style.fontSize = c;
            } 
            else if (i == 3)
            {
                charsArray[i].style.fontSize = d;
            } 
            else if (i == 4)
            {
                charsArray[i].style.fontSize = e;
            } 
            else if (i == 5)
            {
                charsArray[i].style.fontSize = d;
            } 
break
        };

*/
//document.getElementById('target').style.fontSize = e;




})();
