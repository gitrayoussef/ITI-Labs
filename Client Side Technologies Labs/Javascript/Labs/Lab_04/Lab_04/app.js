//  *********************OOP USING CONSTRUCTOR FUNCTION*********************

// function Person(fullName, money, sleepMode, healthRate) {
//   this.fullName = fullName;
//   this.money = money;
//   this.sleepMode = sleepMode;
//   this.healthRate = healthRate;
// }

// Person.prototype.sleep = function () {
//   let hours = this.sleepMode;
//   if (hours === 7) {
//     console.log("Happy");
//   } else if (hours < 7) {
//     console.log("Tired");
//   } else {
//     console.log("Lazy");
//   }
// };

// Person.prototype.eat = function (meals) {
//   if (meals === 3) {
//     console.log(`${100 * this.healthRate} Health Rate`);
//   } else if (meals === 2) {
//     console.log(`${75 * this.healthRate} Health Rate`);
//   } else if (meals === 1) {
//     console.log(`${50 * this.healthRate} Health Rate`);
//   }
// };

// Person.prototype.buy = function (items) {
//   this.money -= items * 10;
//   console.log(` ITEM BUYED = ${items}, Money Left = ${this.money - 10}`);
// };

//  *********************OOP USING CLASS OBJECT*********************

// class Person {
//   constructor(fullName, money, sleepMode, healthRate) {
//     this.fullName = fullName;
//     this.money = money;
//     this.sleepMode = sleepMode;
//     this.healthRate = healthRate;
//   }
//   sleep() {
//     let hours = this.sleepMode;
//     if (hours === 7) {
//       console.log("Happy");
//     } else if (hours < 7) {
//       console.log("Tired");
//     } else {
//       console.log("Lazy");
//     }
//   }
//   eat(meals) {
//     if (meals === 3) {
//       console.log(`${100 * this.healthRate} Health Rate`);
//     } else if (meals === 2) {
//       console.log(`${75 * this.healthRate} Health Rate`);
//     } else if (meals === 1) {
//       console.log(`${50 * this.healthRate} Health Rate`);
//     }
//   }
//   buy(items) {
//     this.money -= items * 10;
//     console.log(` ITEM BUYED = ${items}, Money Left = ${this.money - 10}`);
//   }
// }

//  *********************OOP USING OLOO*********************

// var Person =  {
//   init: function(fullName, money, sleepMode, healthRate) {
//     this.fullName = fullName;
//     this.money = money;
//     this.sleepMode = sleepMode;
//     this.healthRate = healthRate;

//     return this
//   },

//   sleep: function() {
//     let hours = this.sleepMode;
//     if (hours === 7) {
//       console.log("Happy");
//     } else if (hours < 7) {
//       console.log("Tired");
//     } else {
//       console.log("Lazy");
//     }
//   },

//   eat: function(meals) {
//     if (meals === 3) {
//       console.log(`${100 * this.healthRate} Health Rate`);
//     } else if (meals === 2) {
//       console.log(`${75 * this.healthRate} Health Rate`);
//     } else if (meals === 1) {
//       console.log(`${50 * this.healthRate} Health Rate`);
//     }
//   },

//   buy: function(items) {
//     this.money -= items * 10;
//     console.log(` ITEM BUYED = ${items}, Money Left = ${this.money - 10}`);
//   }
// }

//  *********************OOP USING FACTORY FUNCTION*********************

// function Person(fullName, money, sleepMode, healthRate) {
//   return {
//     fullName,
//     money,
//     sleepMode,
//     healthRate,

//     sleep: function () {
//       let hours = this.sleepMode;
//       if (hours === 7) {
//         console.log("Happy");
//       } else if (hours < 7) {
//         console.log("Tired");
//       } else {
//         console.log("Lazy");
//       }
//     },

//     eat: function (meals) {
//       if (meals === 3) {
//         console.log(`${100 * this.healthRate} Health Rate`);
//       } else if (meals === 2) {
//         console.log(`${75 * this.healthRate} Health Rate`);
//       } else if (meals === 1) {
//         console.log(`${50 * this.healthRate} Health Rate`);
//       }
//     },

//     buy: function (items) {
//       this.money -= items * 10;
//       console.log(` ITEM BUYED = ${items}, Money Left = ${this.money - 10}`);
//     },
//   };
// }

