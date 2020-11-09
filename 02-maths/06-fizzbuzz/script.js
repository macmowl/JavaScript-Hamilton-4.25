/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let alltable = []; // on déclare un tableau nommé ALLTABLE (nom choisi)

    for(let n=1 ; n<= 100 ; n++) // pour une valeur numérique n plus petite ou égale à 100 (en commençant par 1),...
    {
        if (n % 15 == 0) { // SI la valeur de n est divisible par 15 sans avoir de reste (reste = 0)... (NOTE quelle formule correcte pour noter n % (3*5) == 0 ? Parce que même 3*5, c'est au script de la calculer)
            alltable.push("flizzbuzz, ");// alors on "pousse" la valeur texte FIZZBUZZ dans le tableau ALLTABLE et on quitte les IF pour retourner au FOR (parce que ça veut dire que ce IF a donner un TRUE), où on applique seulement son action n++. SINON (alors IF a donné un FALSE), on va voir la ligne de condition suivante:
        }
        else if (n % 3 == 0) { // SI la valeur n divisée par 3 a un reste équivalnt à 0, alors il est multiple de 3...
            alltable.push("flizz, ");// ...et on pousse FLIZZ dans le tableau ALLTABLE . 
        }
        else if (n % 5 == 0) { // IDEM si pas multiple de 15 puis pas multiple de 3, multiple de 5? 
            alltable.push("buzz, ");  // si oui, alors pousse BUZZ dans le tableau 
        }
        else //pour finir la boucle IF, ELSE donne la dernière possibilité, si AUCUNE des conditions IF précédente n'a été remplie (jamais de TRUE),...
        {
            alltable.push(n); //...alors on pousse simplement la valeur qu'a n. Ensuite, on sort des IF et on retourne à FOR pour appliquer l'action n++ (ajoute 1 à la dernière valeur de n obtenue).
        }
    }

    console.table(alltable); // affiche le resultat dans la console sou forme de tableau (cosole.log affiche une ligne de résultats)



})();
