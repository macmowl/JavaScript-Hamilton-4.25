/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const heroId = document.getElementById('hero-id');
    heroId.setAttribute('type', 'number');
    
    deleteHero = id => {
        fetch(`http://localhost:3000/heroes${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => console.log(data))
                } else {
                    console.log(`An error occured : ${response.status}`)
                }  
            })
    }

    document.getElementById('run').addEventListener('click', () => {
        deleteHero(heroId.value)
    })
})();
