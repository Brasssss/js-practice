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
  

// JS HW_2_1


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


// JS HW_2_2


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



// JS HW_2_3

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


// JS HW_2_4

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);


// JS HW_2_5

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastIndex = fruits.length - 1;
// const lastElement = fruits[lastIndex];


// JS HW_2_6


// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";


// JS HW_2_7

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength)


// JS HW_2_8

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


// JS HW_2_9

// function getExtremeElements(array) {

  
//   const lastIndex = array.length - 1;
//   let message;
//   const arrayPartDel = array.splice(1, lastIndex - 1);
//   return message = array;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// JS HW_2_10