/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var x = document.getElementsByTagName("IMG")[0].getAttribute("src"); 
    var y = document.getElementsByTagName("IMG")[0].getAttribute("data-hover"); 
    //console.log(x);

    document.getElementsByTagName("img")[0].addEventListener("mouseover", () => {
        document.getElementsByTagName("img")[0].src = y;
    });
    document.getElementsByTagName("img")[0].addEventListener("mouseout", () => {
        document.getElementsByTagName("img")[0].src = x;
    });

    //console.log(img2);

    //const himage = document.getElementsByTagName("IMG");
    //console.log(himage)
  //  himage.src = document.getElementsByTagName("IMG").getAttribute("data-hover");
//    [0].currentSrc
    //document.getElementById("target").appendChild(himage);
    //document.getElementById("source").remove();

})();
