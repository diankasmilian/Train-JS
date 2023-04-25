// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// !====================================================

// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   }

//   console.log("Лог до виклику функції multiply");
//   multiply(2, 3, 5); // Результат множення дорівнює 30
//   console.log("Лог після виклику функції multiply");

// !====================================================

// function multiply() {
//     let total = 1;

//     for (const argument of arguments) {
//       total *= argument;
//     }

//     return total;
//   }

//   console.log(multiply(1, 10, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120

// !====================================================

// function getExtremeElements(array) {
//     // Change code below this line
//     return [array[0], array[array.length - 1]];

//     // Change code above this line
//   }

//  console.log(getExtremeElements([1, 2, 3, 4, 5]));

// !====================================================

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//    let words;
//    words = message.split(" ");

//    let wordsIndex = words.length

//    return wordsIndex * pricePerWord;

//     // Change code above this line
//  }

//  console.log(calculateEngravingPrice('JavaScript is in my blood', 20))

// !====================================================

// function slugify(title) {
//     // Change code below this line

// return title.toLowerCase().split(" ").join("-");

//     // return title.toLowerCase(title.join("-"));

//     // Change code above this line

//   }
//   console.log(slugify("Arrays for begginers"));

// !====================================================

// const start = 3;
// const end = 7;

// for (let i = 3; i <= end; i +=1 ) { // Change this line
//   console.log(i);
// }

// !====================================================

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i++) {
//       total += order[i];
//     }
//     return total;
//   }

//   console.log(calculateTotalPrice([12, 85, 37, 4]))

// //   const clients = ["Mango", "Ajax", "Poly"];

// // for (const client of clients) {
// //   console.log(client);
// // }

// !====================================================

// function getCommonElements(array1, array2) {
//   // Change code below this line

//  let commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i]) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;

//  // Change code above this line
// }

// getCommonElements

// !====================================================

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let price of order) {
//     total += price
//   }

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))

// !====================================================

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// !====================================================

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

// !====================================================

// function getEvenNumbers(start, end) {

//   const evenNumbers = [];

// for (let i = start; i <= end; i +=1) {
// if (i % 2 === 0) {
//  evenNumbers.push(i);
// }
// }

// return evenNumbers

//  }

//  console.log(getEvenNumbers(6, 12))

// !====================================================

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// !====================================================

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5));

// !====================================================

// function includes(array, value) {
//   let bool;

//   for (let number of array) {
//     if (number === value) {
//       bool = true;
//       break;
//     } else {
//       bool = false;
//     }
//   }

//   // for (let i = 0; i <= value; i += 1) {
//   //   if (i === value) {
//   //     number = true;
//   //     break;
//   //   }
//   // }
//   return bool;
// }

// console.log(includes([1, 2, 4, 5], 3));

// !====================================================
// const bookShelf = {
//    books: ["The Last Kingdom"],
//    autor: ["John"],
//    getBooks() {
//      console.log(this);
//    },
//  };
 
//  // Перед крапкою знаходиться об'єкт bookShelf,
//  // тому, викликаючи метод, this буде зберігати посилання на нього.
//  bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}
 
// !====================================================

// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//    owner: {
//      name: "Henry",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
 
//  // Change code below this line
//  const ownerName = apartment.owner.name;
//  const ownerPhone = apartment.owner.phone;
//  const ownerEmail = apartment.owner.email;
//  const numberOfTags = apartment.tags.length;
//  const firstTag = apartment.tags[0];
//  const lastTag = apartment.tags[numberOfTags - 1];
//  // Change code above this line

 
//  console.log(lastTag);

// !====================================================

// function countProps(object) {
//    let propCount = 0;
//    // Change code below this line
//    for (const key in object) {
//      if (object.hasOwnProperty(key)) {
//        propCount += 1;
//      }
//    }
 
//    // Change code above this line
//    return propCount;
//  }

//  console.log(countProps({ name: 'Mango', age: 2 }));

// !====================================================
// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  const values = [];
//  // Change code below this line
//  const keys = Object.keys(apartment);
 
//  for (const key of keys) {
//    values.push(keys[key]);
//  }

// !====================================================
// function countProps(object) {
//    // Change code below this line
//    let propCount = 0;

//    let keys = Object.keys(object);

//    for (const key of keys) {
//       if (object.hasOwnProperty(key)) {
//          propCount += 1;
//       }
//    }
 
//    // for (const key in object) {
//    //   if (object.hasOwnProperty(key)) {
//    //     propCount += 1;
//    //   }
//    // }


 
//    return propCount;
//    // Change code above this line
//  }

 

//  console.log(countProps({ name: "Mango", age: 2 }))
// !====================================================
// const colors = [
//    { hex: "#f44336", rgb: "244,67,54" },
//    { hex: "#2196f3", rgb: "33,150,243" },
//    { hex: "#4caf50", rgb: "76,175,80" },
//    { hex: "#ffeb3b", rgb: "255,235,59" },
//  ];
 
//  const hexColors = [];
//  const rgbColors = [];
//  // Change code below this line

//  const values = Object.values(colors)
 
//  for (const color of values) {
//    hexColors.push(color.hex);
//    rgbColors.push(color.rgb);
//   }
 

//  console.log(hexColors);
//  console.log(rgbColors)

// !====================================================

// const products = [
//    { name: "Radar", price: 1300, quantity: 4 },
//    { name: "Scanner", price: 2700, quantity: 3 },
//    { name: "Droid", price: 400, quantity: 7 },
//    { name: "Grip", price: 1200, quantity: 9 },
//  ];
 
//  function getProductPrice(productName) {
//    // Change code below this line
//   for (const product of products) {
//    if (product.name === productName) {
//       return product.price;
//    }
//   }
//  return null;
 
//    // Change code above this line
//  }

//  console.log(getProductPrice("Scanner"));

// !====================================================

// const products = [
//    { name: "Radar", price: 1300, quantity: 4 },
//    { name: "Scanner", price: 2700, quantity: 3 },
//    { name: "Droid", price: 400, quantity: 7 },
//    { name: "Grip", price: 1200, quantity: 9 },
//  ];
 
//  function getAllPropValues(propName) {
//    // Change code below this line
//   let property = [];

//    for (const product of products) {
//       if (product.hasOwnProperty(propName)) {
//          property.push(product[propName]);
//       }
//    }
//    return property;
 
//    // Change code above this line
//  }
 
//  console.log(getAllPropValues("name"));
 
// !====================================================

// const products = [
//    { name: "Radar", price: 1300, quantity: 4 },
//    { name: "Scanner", price: 2700, quantity: 3 },
//    { name: "Droid", price: 400, quantity: 7 },
//    { name: "Grip", price: 1200, quantity: 9 },
//  ];
 
//  function calculateTotalPrice(productName) {
//    // Change code below this line

//    for (const product of products) {
//    if (product.name === productName) {
//       return product.price * product.quantity;
//    }
//   }
//  return 0;
 
//    // Change code above this line
//  }
 
//  console.log(calculateTotalPrice("Radar"));

// !====================================================

// function makeTask(data) {
//    const completed = false;
//    const category = "General";
//    const priority = "Normal";
//    // Change code below this line
   
//    const newObject = {
//       completed,
//       category,
//       priority,
//    }

//    const allObjects = {...newObject, ...data};

//    return allObjects;
 
//    // Change code above this line
//  }

//  console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))

// !====================================================
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//    console.log(firstNumber); // Значення першого аргументу
//    console.log(secondNumber); // Значення другого аргументу
//    console.log(otherArgs); // Масив інших аргументів
//  }

//  console.log(multiply(1, 2, 3, 4, 5))

// !====================================================
// // Change code below this line
// function addOverNum(firstArgs, ...otherArgs) {
//    let total = 0;
 
//    for (const arg of otherArgs) {
//       if (arg > firstArgs) {
//          total += arg;
//       }
    
//    }
 
//    return total;
//    // Change code above this line
//  }
 
//  console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))

// !====================================================

// function likes(names) {
//    // TODO
//    let message;
//    const newArray = names.slice(2);
//    const lenNewArray = newArray.length;


//    if (names.length === 1) {
//       message = `${names[0]} likes this`;
//    } else if (names.length === 2) {
//       message = `${names[0]} and ${names[1]} like this`;
//    } else if (names.length === 3) {
//       message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//    } else if (names.length > 2) {
//       message = `${names[0]}, ${names[1]} and ${lenNewArray} others like this`;
//    } else if (names.length === 0) {
//       message = "no one likes this";
//    }

//    return message;
//  }

//  console.log(likes(["Alex", "Jacob", "Mark", "Max", "Alan"] ))
// //  console.log(likes(["Alex"] ))
// // console.log(likes(["Alex", "Jacob"]))
// //  console.log(likes(["Alex", "Jacob", "Mark"] ))

// !====================================================
// const atTheOldToad = {
//    potions: [
//      { name: "Speed potion", price: 460 },
//      { name: "Dragon breath", price: 780 },
//      { name: "Stone skin", price: 520 },
//    ],
//    // Change code below this line
//    getPotions() {
//      return this.potions;
//    },
//    addPotion(newPotion) {
//       for (const potion of this.potions) {
//          if (potion.name === newPotion.name) {
//             return `Error! Potion ${newPotion.name} is already in your inventory!`;
//          }
//       }
 
//     this.potions.push(newPotion);
//    },
//    removePotion(potionName) {
//       for (const potion of this.potions) {
//          const potionIndex = this.potions.indexOf(potion);
//          if (potion.name === potionName) {
//           this.potions.splice(potionIndex, 1);
//           return this.potions;
//          }
//       }
     
//        return `Potion ${potionName} is not in inventory!`;
     
//    },

//    updatePotionName(oldName, newName) {
//       for (const potion of this.potions){
//          const potionIndex = this.potions.indexOf(oldName);
//          if (oldName === potion.name) {
//             potion.name = newName;
//           return this.potions;
//          }
//       }
//        return `Potion ${oldName} is not in inventory!`; 
     
//    },
//    // Change code above this line
//  };

//  console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // console.log(atTheOldToad.removePotion("Dragon breath"));
// // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))

// !====================================================

// function deliverPizza(pizzaName) {
//    return `Delivering ${pizzaName} pizza.`;
//  }
 
//  function makePizza(pizzaName) {
//    return `Pizza ${pizzaName} is being prepared, please wait...`;
//  }
 
//  // Chande code below this line
//  function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
//  }
 
 
//  console.log(makeMessage('Royal Grand', makePizza))

// !====================================================

// const pizzaPalace = {
//    pizzas: ["Ultracheese", "Smoked", "Four meats"],
//    order(pizzaName, onSuccess, onError) {
//      if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
      
//      } else {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//      }
       
     
   
//   },
//  };
//  // Change code above this line
 
//  // Callback for onSuccess
//  function makePizza(pizzaName) {
//    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//  }
 
//  // Callback for onError
//  function onOrderError(error) {
//    return `Error! ${error}`;
//  }
 
//  // Method calls with callbacks
//  pizzaPalace.order("Smoked", makePizza, onOrderError);
//  pizzaPalace.order("Four meats", makePizza, onOrderError);
//  pizzaPalace.order("Big Mike", makePizza, onOrderError);
//  pizzaPalace.order("Vienna", makePizza, onOrderError);

//  console.log(pizzaPalace.order("Smoked", makePizza, onOrderError))

// const pizzaPalace = {
//       pizzas: ["Ultracheese", "Smoked", "Four meats"],
//       order(pizzaName, onSuccess, onError) {
//          for (const pizza of this.pizzas) {
//             if (pizza === pizzaName) {
//                return onSuccess(pizzaName);
//             }
//             onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//          }     
//      },
//     };
//     // Change code above this line
    
//     // Callback for onSuccess
//     function makePizza(pizzaName) {
//       return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//     }
    
//     // Callback for onError
//     function onOrderError(error) {
//       return `Error! ${error}`;
//     }
    
//     // Method calls with callbacks
//     pizzaPalace.order("Smoked", makePizza, onOrderError);
//     pizzaPalace.order("Four meats", makePizza, onOrderError);
//     pizzaPalace.order("Big Mike", makePizza, onOrderError);
//     pizzaPalace.order("Vienna", makePizza, onOrderError);
   
//     console.log(pizzaPalace.order("Smoked", makePizza, onOrderError))

// !====================================================

// function calculateTotalPrice(orderedItems) {
//    let totalPrice = 0;
//    // Change code below this line
//    orderedItems.forEach(function (number) {
//      totalPrice += number;
//    })
 
//    // for (let i = 0; i < orderedItems.length; i += 1) {
//    //   totalPrice += orderedItems[i];
//    // }
 
//    // Change code above this line
//    return totalPrice;
//  }

//  console.log(calculateTotalPrice([12, 85, 37, 4]))

// !====================================================


// function filterArray(numbers, value) {
//    const filteredNumbers = [];
//    // Change code below this line
//    numbers.forEach(function (number) {
//       if (number > value) {
//          filteredNumbers.push(number);
//       }
//    })
 
//    // for (let i = 0; i < numbers.length; i += 1) {
//    //   if (numbers[i] > value) {
//    //     filteredNumbers.push(numbers[i]);
//    //   }
//    // }
 
//    // Change code above this line
//    return filteredNumbers;
//  }
 
//  console.log(filterArray([1, 2, 3, 4, 5], 4))

// !====================================================

// function getCommonElements(firstArray, secondArray) {
//    const commonElements = [];
//    // Change code below this line
//    firstArray.forEach(function(number) {
//      if (secondArray.includes(number)) {
//       commonElements.push(number)
//      }
      
//    });
 
//    // for (let i = 0; i < firstArray.length; i += 1) {
//    //   if (secondArray.includes(firstArray[i])) {
//    //     commonElements.push(firstArray[i]);
//    //   }
//    // }
 
//    return commonElements;
//    // Change code above this line
//  }
 
//  console.log(getCommonElements([1, 2, 3], [2, 4]));

// !====================================================


// const changeEven = (numbers, value) => {
//    // Change code below this line
//    let newChangeEven = [];
   
//    numbers.forEach(number => {
//       if (number % 2 === 0) {
//          newChangeEven.push(number + value);
//       } else {
//          newChangeEven.push(number)
//       }
//    });
//    return newChangeEven;
//    }
  
//    // Change code above this line
 
 
//  console.log(changeEven([1, 2, 3, 4, 5], 10));

// !====================================================


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// !====================================================

// // Change code below this line
// const getUserNames = users => {
//   return users.map(user => user.name)

//  };
//  // Change code above this line

//  console.log(getUserNames([
//    {
//      name: "Moore Hensley",
//      email: "moorehensley@indexia.com",
//      eyeColor: "blue",
//      friends: ["Sharron Pace"],
//      isActive: false,
//      balance: 2811,
//      skills: ["ipsum", "lorem"],
//      gender: "male",
//      age: 37,
//    },
//    {
//      name: "Sharlene Bush",
//      email: "sharlenebush@tubesys.com",
//      eyeColor: "blue",
//      friends: ["Briana Decker", "Sharron Pace"],
//      isActive: true,
//      balance: 3821,
//      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//      gender: "female",
//      age: 34,
//    },
//    {
//      name: "Ross Vazquez",
//      email: "rossvazquez@xinware.com",
//      eyeColor: "green",
//      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//      isActive: false,
//      balance: 3793,
//      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//      gender: "male",
//      age: 24,
//    },
//    {
//      name: "Elma Head",
//      email: "elmahead@omatom.com",
//      eyeColor: "green",
//      friends: ["Goldie Gentry", "Aisha Tran"],
//      isActive: true,
//      balance: 2278,
//      skills: ["adipisicing", "irure", "velit"],
//      gender: "female",
//      age: 21,
//    },
//    {
//      name: "Carey Barr",
//      email: "careybarr@nurali.com",
//      eyeColor: "blue",
//      friends: ["Jordan Sampson", "Eddie Strong"],
//      isActive: true,
//      balance: 3951,
//      skills: ["ex", "culpa", "nostrud"],
//      gender: "male",
//      age: 27,
//    },
//    {
//      name: "Blackburn Dotson",
//      email: "blackburndotson@furnigeer.com",
//      eyeColor: "brown",
//      friends: ["Jacklyn Lucas", "Linda Chapman"],
//      isActive: false,
//      balance: 1498,
//      skills: ["non", "amet", "ipsum"],
//      gender: "male",
//      age: 38,
//    },
//    {
//      name: "Sheree Anthony",
//      email: "shereeanthony@kog.com",
//      eyeColor: "brown",
//      friends: ["Goldie Gentry", "Briana Decker"],
//      isActive: true,
//      balance: 2764,
//      skills: ["lorem", "veniam", "culpa"],
//      gender: "female",
//      age: 39,
//    },
//  ]))

// !====================================================

// // Change code below this line
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a, b) => b.friends.length - a.friends.lendth)
// };
// // Change code above this line

// console.log(sortByDescendingFriendCount([
//    {
//      name: "Moore Hensley",
//      email: "moorehensley@indexia.com",
//      eyeColor: "blue",
//      friends: ["Sharron Pace"],
//      isActive: false,
//      balance: 2811,
//      gender: "male"
//    },
//    {
//      name: "Sharlene Bush",
//      email: "sharlenebush@tubesys.com",
//      eyeColor: "blue",
//      friends: ["Briana Decker", "Sharron Pace"],
//      isActive: true,
//      balance: 3821,
//      gender: "female"
//    },
//    {
//      name: "Ross Vazquez",
//      email: "rossvazquez@xinware.com",
//      eyeColor: "green",
//      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//      isActive: false,
//      balance: 3793,
//      gender: "male"
//    },
//    {
//      name: "Elma Head",
//      email: "elmahead@omatom.com",
//      eyeColor: "green",
//      friends: ["Goldie Gentry", "Aisha Tran"],
//      isActive: true,
//      balance: 2278,
//      gender: "female"
//    },
//    {
//      name: "Carey Barr",
//      email: "careybarr@nurali.com",
//      eyeColor: "blue",
//      friends: ["Jordan Sampson", "Eddie Strong"],
//      isActive: true,
//      balance: 3951,
//      gender: "male"
//    },
//    {
//      name: "Blackburn Dotson",
//      email: "blackburndotson@furnigeer.com",
//      eyeColor: "brown",
//      friends: ["Jacklyn Lucas", "Linda Chapman"],
//      isActive: false,
//      balance: 1498,
//      gender: "male"
//    },
//    {
//      name: "Sheree Anthony",
//      email: "shereeanthony@kog.com",
//      eyeColor: "brown",
//      friends: ["Goldie Gentry", "Briana Decker"],
//      isActive: true,
//      balance: 2764,
//      gender: "female"
//    }
//  ]))

// !====================================================

// console.log(('b'+'a'+ +'a'+'a').toLowerCase());

// !====================================================
// class Car {
//    // Change code below this line
//  constructor(brand, model, price) {
//    this.brand = brand;
//    this.model = model;
//    this.price = price;
//  }
 
 
//    // Change code above this line
//  }
 
//  console.log(new Car("BMW", "X5", 58900));

// !====================================================

// class Storage {
//    constructor(item) {
//      this.item = item;
//    }
 
//    getItems() {
//      return this.item;
//    }
 
//    addItem(newItem) {
//      return this.item.push(newItem);
//    }
 
//    removeItem(itemToRemove) {
//      return this.item = this.item.filter(item => item !== itemToRemove);
//    }
//  }
 
 
//  // Change code above this line
//  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//  storage.addItem("Droid");
//  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//  storage.removeItem("Prolonger");
//  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// !====================================================


class User {
   email;
 
   constructor(email) {
     this.email = email;
   }
 
   get email() {
     return this.email;
   }
 
   set email(newEmail) {
     this.email = newEmail;
   }
 }
 class Admin extends User {
   // Change code below this line
 
   static AccessLevel = {
     BASIC: "basic",
     SUPERUSER: "superuser",
   };
 
   constructor({ email, accessLevel, blacklistedEmails}) {
     super(email);
     this.accessLevel = accessLevel;
     this.blacklistedEmails =blacklistedEmails;
   }

   
   blacklistedEmails = [];
 
   blacklist(email) {
   this.blacklistedEmails.push(email);
   }
 
   isBlacklisted(email) {
   return this.blacklistedEmails.includes(email);
   }
 
   // Change code above this line
 }
 
 const mango = new Admin({
   email: "mango@mail.com",
   accessLevel: Admin.AccessLevel.SUPERUSER,
 });
 
 console.log(mango.email); // "mango@mail.com"
 console.log(mango.accessLevel); // "superuser"
 
 mango.blacklist("poly@mail.com");
 console.log(mango.blacklistedEmails); // ["poly@mail.com"]
 console.log(mango.isBlacklisted("mango@mail.com")); // false
 console.log(mango.isBlacklisted("poly@mail.com")); // true