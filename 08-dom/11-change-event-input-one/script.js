(function() {
    document.getElementById("pass-one").setAttribute("maxLength",10) ; /*max 10 sur l'élément elements*/
    document.getElementById("pass-one").addEventListener( "input", () => {
        /*Create variable with id HTML et les invoquer*/
    let inputElement = document.getElementById("pass-one");/*element input*/
    let counterElement = document.getElementById("counter"); /*0/10*/
    /*action*/
     counterElement.innerText = `${inputElement.value.length}/10`;

    });

})();


