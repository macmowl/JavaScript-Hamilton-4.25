/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

    let index = 0;
    let parent = document.querySelector(".material");
    let image = parent.getElementsByTagName("img")[0];


    document.getElementById("next").addEventListener("click", ()=>{

        index++;
        image.src = gallery[index];

        if (index > gallery.length-2) {
            index = -1;
        }  else {
        }   
        
        console.log(gallery);
        console.log(typeof(gallery));
        console.log(image.src);

    })
})();
