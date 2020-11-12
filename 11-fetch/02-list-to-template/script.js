/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    displayHeroes = heroes => {
        let template = document.getElementById('tpl-hero').content;
        let target = document.getElementById('target');
        heroes.forEach(hero => {
            template.querySelector('.name').textContent = hero.name;
            template.querySelector('.alter-ego').textContent = hero.alterEgo;
            template.querySelector('.powers').textContent = hero.abilities;
            target.appendChild(document.importNode(template, true));
        });
        
        
    }
    
    document.getElementById('run').addEventListener('click', () => {
        fetch('http://localhost:3000/heroes')
            .then(response => {
                if (response.status !== 200) {
                    console.log(`An error occured : ${response.status}`)
                }

                response.json()
                    .then(data => {
                        displayHeroes(data)
                    })
            })
            .catch(err => console.log(err))
    })

})();
