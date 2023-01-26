// hw-2--------------------------

// let pricePerItem = 2000;
// pricePerItem += 1500;
// let productName = "Droid";
// productName = productName.toLocaleLowerCase();
// productName = "Repair " + productName;
// console.log(productName);



// hv-3----------------------------

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
// console.log(isAdmin);


// hw-4----------------------------

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// hw-5------------------------

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// hw-6-----------------------------

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);


// hw - 7--------------------------

// function sayHi() {
//   console.log("Hello, this is my first function!");
// };
// sayHi();


// hw-8-----------------------------

// function add(a, b, c) {
  
//   console.log(`Addition result equals ${a + b + c}`);
  
// };
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// hw-9-----------------------------

// function add(a, b, c) {
//   return a + b + c;
// };

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


// hw - 10--------------------------

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };
// console.log(makeMessage("Radar", 6150));

// hw-11------------------------

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
  
//   const totalPrice = orderedQuantity * pricePerItem ;
  
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice (3, 400));
// console.log(calculateTotalPrice (1, 3500));
// console.log(calculateTotalPrice (12, 70));


// hw-12---------------------------------



// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// };

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));


// hw-13----------------------------------------


// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// };

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));
    

// hw-14---------------------------------------------

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD ;
//   return isMatch;
// };

// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));


// hw-15---------------------------------------------


// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   };

//   return message;
// };

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));


// hw-16---------------------------------------------


// function checkStorage(available, ordered) {
//   let message;

//   if (available > ordered) {
//     message = 'Order is processed, our manager will contact you.';
//   } else {
//     message = 'Not enough goods in stock!';
//   };

//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));



// hw-17-----------------------------------------------


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// hw-18----------------------------------------------------------

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (customerCredits >= totalPrice) {
//     const customerCreditsAfter = customerCredits - totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCreditsAfter} credits left`
//   } else {
//     message = 'Insufficient funds!'
//   };

//   return message;
// };

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));



// hw-19---------------------------------------------------------



// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"))
// console.log(checkPassword(null))
// console.log(checkPassword("polyhax"))
// console.log(checkPassword("jqueryismyjam"))



// hw-20--------------------------------------------------------



// function checkStorage(available, ordered) {
//   let message;
//   if (ordered <= 0) {
//     message = `There are no products in the order!`;
//   } else if (ordered > available) {
//     message = `Your order is too large, there are not enough items in stock!`;
//   } else {
//     message = `The order is accepted, our manager will contact you`
//   }
//   return message;
// };

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));


// hw-21-------------------------------------------------------


// function isNumberInRange(start, end, number) {
//   const isInRange = number > start && number < end;

//   return isInRange;
// };
// console.log(isNumberInRange(10, 30, 17))
// console.log(isNumberInRange(10, 30, 5))
// console.log(isNumberInRange(20, 50, 24))
// console.log(isNumberInRange(20, 50, 76))

// hw-22--------------------------------------------------------

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip";

//   return canAccessContent;
// };
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// hw-23---------------------------------------------------------


// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange ;

//   return isNotInRange;
// };
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// hw-24------------------------------------------------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else  {
//     discount = GOLD_DISCOUNT;
//   };

  
//   return discount;
// };

// console.log(getDiscount(137000))
// console.log(getDiscount(46900))
// console.log(getDiscount(8250))
// console.log(getDiscount(1300))
// console.log(getDiscount(5000))
// console.log(getDiscount(20000))
// console.log(getDiscount(50000))


// hw-25----------------------------------------------------------


// function checkStorage(available, ordered) {
//   let message;
  

//   message = ordered > available ?  `Not enough goods in stock!` :  `The order is accepted, our manager will contact you`;
    

//   return message;
// }

// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(200, 20))
// console.log(checkStorage(200, 150))
// console.log(checkStorage(150, 180))

// hw-26----------------------------------------------------------




// правктика - я писал код

// const minutes = 35;

// У змінній minutes лежить число
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const minutes = 65;
// if (minutes > 0 && minutes < 15) {
//   console.log(1)
// } else if (minutes >= 15 && minutes < 30) {
//   console.log(2)
// } else if (minutes >= 30 && minutes < 45) {
//   console.log(3)
// } else {
//   console.log(4)
// };
// console.log(minutes)


// hw-26---------------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   let message;
//   message = password === ADMIN_PASSWORD ? `Access is allowed` : `Access denied, wrong password!`;
  
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"))
// console.log(checkPassword("angul4r1sl1f3"))
// console.log(checkPassword("r3actsux"))



// hw-27------------------------------------------

// function getSubscriptionPrice(type) {
//   let price;
  

//   switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }

  
//   return price;
// }

// console.log(getSubscriptionPrice("starter"))
// console.log(getSubscriptionPrice("professional"))
// console.log(getSubscriptionPrice("organization"))



// hw-28------------------------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;


//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
    
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
    
//     default:
//       message = "Access denied, wrong password!";
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
  

// hw-29-----------------------------------------------------

// function getShippingCost(country) {
//   let message;
  
//   switch (country) {
//     case "China":
//       country = "China";
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Chile":
//       country = "Chile";
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
    
//     case "Australia":
//       country = "Australia";
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
    
//     case "Jamaica":
//       country = "Jamaica";
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
    
//     default:
//       message = "Sorry, there is no delivery to your country";
    

//   }
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));


// hw-30------------------------------------------------


// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));



// задача из конспекта на перебор числа больше чем значение

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


// ----------------------------------------------------------------------------
// задача из конспекта

// Выносим варианты в массив

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
//
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// hw-31

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;

// const firstElement = courseTopic[0];

// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(firstElement);
// console.log(courseTopicLength);
// console.log(lastElement);


// hw-32-----------------------------------------------------------------------

// function getSubstring(string, length) {
  

//   const substring = string.slice(string, length);
  

//   return substring;
// }


// console.log(getSubstring("Hello world", 3))
// console.log(getSubstring("Hello world", 5))
// console.log(getSubstring("Hello world", 8))
// console.log(getSubstring("Hello world", 11))
// console.log(getSubstring("Hello world", 0))



// hw-33-----------------------------------------------------------------------


// function formatMessage(message, maxLength) {
//   let result;
//   const lastElementIndex = message.length - 1;
//   if (lastElementIndex < maxLength) {
//     result = message;
//   } else {
//     if (message.length < maxLength) {
//     result = message;
//   } else {
//     message = message.slice(0, maxLength);
//     message = `${message}...`;
//     result = message;
//   };

//   return result;
//   };

//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30))
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15))
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41))




// hw-34-------------------------------------------------------------------

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase() ;

//   return normalizedInput;
// };
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));


// hw-35--------------------------------------------------------------------------

// function checkForName(fullName, name) {
//   const result = fullName.includes(name) ;
//   return result;
// };
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));



// hw-36--------------------------------------------------------------------

// function checkForSpam(message) {
//   let result;
//   let lowTextMessage;
  
//   lowTextMessage = message.toLowerCase();
//   if (lowTextMessage.includes("spam")) {
//   result = true;
// } else if (lowTextMessage.includes("sale")) {
//   result = true;
// } else {
//   result = false;
//   }
  
//   // result = lowTextMessage.includes("spam" || "sale"); - не работает - не воспринимает 2ю часть с "sale"
//   // result = lowTextMessage;
//   return result;
// }
// console.log(checkForSpam("Latest technology news"))
// console.log(checkForSpam("JavaScript weekly newsletter"))
// console.log(checkForSpam("Get best sale offers now!"))
// console.log(checkForSpam("Amazing SalE, only tonight!"))
// console.log(checkForSpam("Trust me, this is not a spam message"))
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"))
// console.log(checkForSpam("[SPAM] How to earn fast money?"))
  

// JS HW_2_1_______________________________________________________


// function checkAge(age) {
//   if (age >= 18) {
//     let message;
//     return message = "You are an adult";
//   }

//   return message = "You are a minor";
// }
// console.log(checkAge(20))
// console.log(checkAge(8))
// console.log(checkAge(14))
// console.log(checkAge(38))


// JS HW_2_2_______________________________________________________


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
    
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"))
// console.log(checkPassword("polyhax"))
// console.log(checkPassword("jqueryismyjam"))



// JS HW_2_3_______________________________________________________

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//     return "The order is accepted, our manager will contact you";
// }
  
// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(70, 0))
// console.log(checkStorage(200, 20))
// console.log(checkStorage(200, 250))
// console.log(checkStorage(150, 0))


// JS HW_2_4_________________________________________________________

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);


// JS HW_2_5_________________________________________________________

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastIndex = fruits.length - 1;
// const lastElement = fruits[lastIndex];


// JS HW_2_6_______________________________________________________


// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";


// JS HW_2_7__________________________________________________________

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength)


// JS HW_2_8_______________________________________________________

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


// JS HW_2_9________________________________________________________

// function getExtremeElements(array) {

  
//   const lastIndex = array.length - 1;
//   let message;
//   const arrayPartDel = array.splice(1, lastIndex - 1);
//   return message = array;
// };
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// JS HW_2_10_______________________________________________________


// function splitMessage(message, delimiter) {
//   let words;
//   result = message.split(delimiter);
//   words = result;
//   return words;
// };
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));


// JS HW_2_11_____________________________________________________

// function calculateEngravingPrice(message, pricePerWord) {

//   let price;
//   const result = message.split(" ");
//   const resultLength = result.length;
//   price = resultLength * pricePerWord;
//   return price;

// };
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));



// JS HW_2_12_____________________________________________________

// function makeStringFromArray(array, delimiter) {

//   let string;
//   string = array.join(delimiter);
//   return string;

// };

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// JS HW_2_13____________________________________________________

// function slugify(title) {
  
//   const array = title.split(" ");
//   const newArray = array.join("-");
//   const slug = newArray.toLowerCase();
  
//   return slug;
// };
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));







// JS HW_2_14______________________________________________

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);






// JS HW_2_15_______________________________________


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);






// JS HW_2_16_______создай из 2х массивов один , длинна нового масива ограничена числом в переменной  ( функция + массив )________________________________


// function makeArray(firstArray, secondArray, maxLength) {

//   arrayConcat = firstArray.concat(secondArray);
//   const arrayConcatLength = arrayConcat.length;

//   if (arrayConcatLength > maxLength) {
//     const diference = arrayConcatLength - maxLength;
//     const arraySlice = arrayConcatLength - diference;
//     let copyArray = arrayConcat.slice(0, arraySlice);
//     return copyArray;
//   }
//   return arrayConcat;
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) )
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3))
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2))
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4))
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0))






// JS HW_2_16___________вывод значений от и до ( функция)____________________________

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) {
//   console.log(i);
// }






// JS HW_2_17_______общая сумма  всех чисед до числа указанного(функция)________________________________

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
  
//     total += i;
//   };
//   return total;
// };
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));






// JS HW_2_19______________перебор по очереди значений массива_________________________

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }







// JS HW_2_20________________посчитай общую цену заказов с данными из массива_______________________


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
    
//     total += order[i];
//   };
//   return total;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));









// JS HW_2_21________найди самое длинное слово в значении переменной_______________________________



// function findLongestWord (string) {
// const stringSplit = string.split(' ');
// let longestWord = "";

//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//     longestWord = word;
// }
// }
//   return longestWord;
// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));








// JS HW_2_22_______функция создания массива с числами от min до max (включая max)________________________________


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i < max + 1; i += 1) {
    
//     numbers.push(i);
//   }
//   return numbers;
// };
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));



// JS HW_2_23___ проверка массива (numbers) на присутствие и вывоз в новый массив  чисел более чем значение (value)


// function filterArray(numbers, value) {
  
//   const array = [];

//   for (let i = 0 ; i < numbers.length ; i += 1) {
    
//     let number = 0;
//     number = numbers[i];

//     if (number > value){
//       array.push(number);
      
//     }
//   };
//   return array;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));







// JS HW_2_24___ функция проверки включает ли в себя массив(fruits) значение переменной(fruit) с ответом true/false__________________


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return  fruits.includes(fruit);
// }
// console.log(checkFruit("plum"))
// console.log(checkFruit("mandarin"))
// console.log(checkFruit("pear"))
// console.log(checkFruit("Pear"))
// console.log(checkFruit("apple"))








// JS HW_2_25__ сравнение значений в двух массивах значений находящихся на одинаково индексируеміх местах и  вывод совпадений в новый массив_______________


// function getCommonElements(array1, array2) {

//   const newArr = [];
//   let numberArr1 = 0;
//   let numberArr2 = 0;
  
//   for (let i = 0; i < array1.length; i += 1) {
//     numberArr1 = array1[i];
//   };

//   for (let k = 0; k < array2.length; k += 1) {
    
//     numberArr2 = array2[k];
//   };

//   if (numberArr2 === numberArr1) {

//     newArr.push(numberArr2);
//   };
//   return newArr;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));









// JS HW_2_25_  функция сравнивает значения двух массивов  на совпадения и если значения совпали выводит в новый массив_________________________

// function getCommonElements(array1, array2) {

//   const newArr = [];
//   let numberArr1 = 0;
  
//   for (let i = 0; i < array1.length; i += 1) {
//     numberArr1 = array1[i];

//     if (array2.includes(numberArr1)) {

//       newArr.push(numberArr1);
//     };
//   };
//   return newArr;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));






// JS HW_2_26_______ функция подсчета  суммсуммы чисел внутри массива через (for of)____________

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (ord of order) {
//     total += ord;
//     continue;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))








// JS HW_2_27__  функция перебора массива (numbers)  и вывода чисел из него больше указанного (value) ,через  "for... of""____________


// function filterArray(numbers, value) {

//   const filteredNumbers = [];
  
//   for (number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
  
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))
// console.log(filterArray([12, 24, 8, 41, 76], 38))
// console.log(filterArray([12, 24, 8, 41, 76], 20))











// JS HW_2_28_______________








// JS HW_2_29_______________функция перебирает числа от (start) и до (end)  и ввыбирая только четные пушит их в новый массив (filteredNumbers)


// function getEvenNumbers(start, end) {

//   const filteredNumbers = [];
  
//   for (let i = start; i <= end ; i += 1){
//     if (i % 2 !== 0) {
//     continue;
//   } else
//     filteredNumbers.push(i)
    
//   }
//   return filteredNumbers;
// }
// console.log(getEvenNumbers(2, 5))
// console.log(getEvenNumbers(3, 11))
// console.log(getEvenNumbers(6, 12))
// console.log(getEvenNumbers(8, 8))
// console.log(getEvenNumbers(7, 7))
  





// JS HW_2_31____функция выводит первое число от(start) и до (end) без остатка делящееся на (divisor)____

// function findNumber(start, end, divisor) {

//   let number;
  

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
  
// }
// console.log(findNumber(2, 6, 5))
// console.log(findNumber(8, 17, 3))
// console.log(findNumber(6, 9, 4))
// console.log(findNumber(16, 35, 7))








// JS HW_2_32___функция перебора массива (array) на наличие переменной (value)с итоговм ответом true/false_____






// function includes(array, value) {

//   for (const arr of array) {
  
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
// }



// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));


