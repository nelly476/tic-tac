// const FactoryFunction = (string) => {
//   const capitalizeString = () => string.toUpperCase();
//   const printString = () => console.log(`${capitalizeString()}`);

//   return { printString };
// };

// const word = FactoryFunction("word");

// word.printString();

// const counterCreator = () => {
//   let count = 0;
//   return () => {
//     console.log(count);
//     count++;
//   };
// };

// const counter = counterCreator();

// counter();
// counter();

// const Player = (name, level) => {
//   let health = level * 2;
//   const getLevel = () => level;
//   const getName = () => name;
//   const die = () => {};

//   const damage = (x) => {
//     health -= x;
//     if (health <= 0) {
//       die();
//     }
//   };

//   const attack = (enemy) => {
//     if (level < enemy.getLevel()) {
//       damage(1);
//       console.log(`${enemy} has damaged ${name}`);
//     }
//     if (level >= enemy.getLevel()) {
//       enemy.damage(1);
//       console.log(`${name} has damaged ${enemy.getName()}`);
//     }
//   };

//   return { attack, damage, getLevel, getName };
// };

// const jimmie = Player("jim", 10);
// const jeff = Player("jeff", 5);

// jimmie.attack(jeff);
// jeff.die();

// const Person = (name) => {
//   const sayName = () => {
//     console.log(`my name is ${name}`);
//   };
//   return { sayName };
// };

// const Nerd = (name) => {
//   const prototype = Person(name);
//   const doNerdyStuff = () => {
//     console.log(`nerd shit`);
//   };
//   return Object.assign({}, prototype, { doNerdyStuff });
// };

// const jack = Nerd("jack");
// jack.sayName();
// jack.doNerdyStuff();

let myModule = (function () {
  return {
    publicMethod: function () {
      console.log("Hello world");
    },
  };
})();

myModule.publicMethod();
