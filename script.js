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
