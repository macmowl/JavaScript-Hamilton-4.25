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
    const heroes = [];

    displayHero = id => {
        const hero = this.heroes[id-1];
        let template = document.getElementById('tpl-hero').content;
        let target = document.getElementById('target');
        template.querySelector('.name').textContent = hero.name;
        template.querySelector('.alter-ego').textContent = hero.alterEgo;
        template.querySelector('.powers').textContent = hero.abilities;
        target.appendChild(document.importNode(template, true));
    }

    fetchHero = () => {
        fetch('http://localhost:3000/heroes')
            .then(response => {
                if (response.status !== 200) {
                    console.log(`An error occured : ${response.status}`)
                }

                response.json()
                    .then(data => {
                        this.heroes = data;
                        console.log(this.heroes)
                    })
            })
            .catch(err => console.log(err))
    }
    fetchHero();

    document.getElementById('run').addEventListener('click', () => {
        if (isNaN(heroId.value)) {
            alert('Type only numbers please')
        } else if (+heroId.value <= this.heroes.length) {
            displayHero(+heroId.value)
        } else {
            alert('There are only 5 X-Men')
        }
    })
})();
