/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Dog extends Animal {
        constructor(name){
            super();
            this.name = name;
        }

        static greeting = "Waf";
        
    }

    class Cat extends Animal {
        constructor(name){
            super();
            this.name = name;
        }

        static greeting = "Meow";
        
    }

    document.getElementById("run").addEventListener("click", function(){
        
        const Dogy = new Dog("Dogy");
        const Felix = new Cat("Felix");

        console.log(Dogy.sayHello());
        console.log(Felix.sayHello());
      
    })





    

})();
