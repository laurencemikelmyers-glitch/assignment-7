// Personal Taste Tracker

// 1. Create an array of your favorite foods
let myFoods = ["Pizza", "Burgers", "Tacos", "Ice Cream", "Sushi"];

// 2. Create an array of 50 popular foods
let popularFoods = [
  "Pizza", "Burgers", "Tacos", "Sushi", "Ice Cream", "Pasta", "Salad", "Steak", "Hot Dogs", "Fried Chicken",
  "French Fries", "Ramen", "Dumplings", "Chocolate", "Cake", "Cookies", "Sandwiches", "Bacon", "Eggs", "Cheese",
  "Donuts", "Pancakes", "Waffles", "Smoothies", "Soup", "Bagels", "Nachos", "Curry", "Rice", "Noodles",
  "Sausage", "Shrimp", "Fish", "Meatballs", "Avocado Toast", "Omelette", "Chili", "BBQ Ribs", "Quesadilla", "Falafel",
  "Samosa", "Hummus", "Lasagna", "Tiramisu", "Brownies", "Mac and Cheese", "Gnocchi", "Spring Rolls", "Muffins", "Pita"
];

// 3. Loop through myFoods and log each one
console.log("My favorite foods:");
for (let i = 0; i < myFoods.length; i++) {
  console.log(myFoods[i]);
}

// 4. Loop through popularFoods and log foods that are also in myFoods
console.log("\nFoods that are popular AND in my favorites:");
for (let i = 0; i < popularFoods.length; i++) {
  if (myFoods.includes(popularFoods[i])) {
    console.log(popularFoods[i]);
  }
}

// 5. Function that takes a food and says if you like it
function checkFood(food) {
  if (myFoods.includes(food)) {
    return `Yes! I like ${food}.`;
  } else {
    return `No, I don't really like ${food}.`;
  }
}

// Test the function
console.log("\nFood check:");
console.log(checkFood("Pizza")); // Yes
console.log(checkFood("Salad")); // No

// 6. Count how many of your favorite foods are in popularFoods
let count = 0;
for (let i = 0; i < myFoods.length; i++) {
  if (popularFoods.includes(myFoods[i])) {
    count++;
  }
}
console.log(`\nI have ${count} favorite foods that are also popular.`);

// 7. Find the first popular food that is NOT in your favorites
let firstNotFavorite = popularFoods.find(food => !myFoods.includes(food));
console.log(`\nThe first popular food I don't like is: ${firstNotFavorite}`);

// 8. Add a new favorite food to myFoods array
myFoods.push("Chocolate");
console.log("\nUpdated favorite foods:", myFoods);

// 9. Remove a food you no longer like from myFoods array
let removedFood = myFoods.splice(myFoods.indexOf("Burgers"), 1);
console.log(`\nRemoved food: ${removedFood}`);
console.log("Updated favorite foods:", myFoods);

// 10. Compare lengths of arrays and log a message
if (myFoods.length > popularFoods.length) {
  console.log("\nI have more favorite foods than popular foods!");
} else {
  console.log("\nThere are more popular foods than my favorites.");
}
