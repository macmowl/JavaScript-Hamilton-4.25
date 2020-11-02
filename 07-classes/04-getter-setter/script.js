/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here



    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get fname() {
            return this.firstname + ' ' + this.lastname;
        }
        set fname(nameent) {
            //this.firstname = nameent[0];
            //this.lastname = nameent[1];
            [this.firstname, this.lastname] = nameent.split(" ");
        }}

    const instance1 = new Person('Cedric', 'AUDRIT');



    document.getElementById("run").addEventListener("click", function () {

        

        /*const person = {
            firstName: 'Titi',
            lastName: 'Toto',
        } */
        
        
        console.log(instance1.fname);  
        instance1.fname = "Monsieur Sylvestre";
        console.log(instance1.fname)


    })

})();
