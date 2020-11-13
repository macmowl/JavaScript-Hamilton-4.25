/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let heroes = [];
    const name = document.getElementById('hero-name');
    const alter = document.getElementById('hero-alter-ego');
    const power = document.getElementById('hero-powers');

    fetchHero = () => {
        fetch('http://localhost:3000/heroes')
            .then(response => {
                if (response.status !== 200) {
                    console.log(`An error occured : ${response.status}`)
                }

                response.json()
                    .then(data => {
                        this.heroes = data;
                    })
            })
            .catch(err => console.log(err))
    }

    fetchHero();

    addHero = (name, alter, powers) => {
        const abilities = powers.split(', ')
        this.heroes.push({
            id: this.heroes.length,
            name: name,
            alterEgo: alter,
            abilities: abilities
        })
        console.log(this.heroes)
    }

    document.getElementById('run').addEventListener('click', () => {
        addHero(name.value, alter.value, power.value)
    })
})();
