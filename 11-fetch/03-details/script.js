/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const heroId = document.getElementById('hero-id');
    heroId.setAttribute('type', 'number');

    displayHero = hero => {
        let template = document.getElementById('tpl-hero').content;
        let target = document.getElementById('target');
        template.querySelector('.name').textContent = hero.name;
        template.querySelector('.alter-ego').textContent = hero.alterEgo;
        template.querySelector('.powers').textContent = hero.abilities;
        target.innerHTML = "";
        target.appendChild(document.importNode(template, true));
    }

    fetchHero = id => {
        fetch(`http://localhost:3000/heroes/${id}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log(`An error occured : ${response.status}`)
                }

                response.json()
                    .then(data => displayHero(data))
            })
            .catch(err => console.log(err))
    }

    document.getElementById('run').addEventListener('click', () => {
        fetchHero(heroId.value)
    })
})();
