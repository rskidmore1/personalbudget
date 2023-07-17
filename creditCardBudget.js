// To do list in bankBudget.js

const fs = require("fs");
const prompts = require("prompts");

const fileName = "1793100124";

const categories = [
  "1. Gas",
  "2. Taylor Gas",
  "3. Rent",
  "4. Utilities",
  "5. Auto insurance",
  "6. Taylor misc",
  "7. Food",
  "8. Entertainment",
  "9. Stuff",
  "10. Business/work",
  "11. Savings",
  "12. Investing",
  "0. Not a category",
];

// CC PARSING
const ccPurchases = [];
const budgetQuestions = [];

var data = fs
  .readFileSync(fileName + ".csv")
  .toString() // convert Buffer to string
  .split("\n"); // split string to lines
data.map((item) => {
  ccPurchases.push(item.split(","));
});

const descriptionsAndCosts = [];

ccPurchases.map((item) => {
  descriptionsAndCosts.push([item[2], item[3]]);
});

let categoriesString = "";

categories.map((item) => {
  categoriesString = `${categoriesString}, ${item}`;
});

descriptionsAndCosts.map((item) => {
  budgetQuestions.push({
    type: "number",
    name: `${item[1]}`,
    message: `${categoriesString}\n\r ${item[0]}: ${item[1]}`,
  });
});

console.log(budgetQuestions);

// //create the categories
// //format the questions object

// // Message is going to be the descr and cost, name is going to be cost
// // Not sure how I will keep the categories if else updated

console.log("Enter Credit Card transactions:\n");
(async () => {
  let arr1 = "";
  let arr2 = "";
  let arr3 = "";
  let arr4 = "";
  let arr5 = "";
  let arr6 = "";
  let arr7 = "";
  let arr8 = "";
  let arr9 = "";
  let arr10 = "";
  let arr11 = "";
  let arr12 = "";

  const onSubmit = (prompt, answer) => {
    console.log(`Thanks I got ${answer} from ${prompt.name}`);
    if (answer === 1) {
      console.log(arr1);
      console.log(prompt.name);
      arr1 = `${arr1}+${prompt.name}`;
    } else if (answer === 2) {
      arr2 = `${arr2}+${prompt.name}`;
    } else if (answer === 3) {
      arr3 = `${arr3}+${prompt.name}`;
    } else if (answer === 4) {
      arr4 = `${arr4}+${prompt.name}`;
    } else if (answer === 5) {
      arr5 = `${arr5}+${prompt.name}`;
    } else if (answer === 6) {
      arr6 = `${arr6}+${prompt.name}`;
    } else if (answer === 7) {
      arr7 = `${arr7}+${prompt.name}`;
    } else if (answer === 8) {
      arr8 = `${arr8}+${prompt.name}`;
    } else if (answer === 9) {
      arr9 = `${arr9}+${prompt.name}`;
    } else if (answer === 10) {
      arr10 = `${arr10}+${prompt.name}`;
    } else if (answer === 11) {
      arr11 = `${arr11}+${prompt.name}`;
    } else if (answer === 12) {
      arr12 = `${arr12}+${prompt.name}`;
    } else if (answer === 0) {
      console.log("Transaction skipped.");
    }
  };

  const ccResponse = await prompts(budgetQuestions, { onSubmit });
  console.log("Gas");
  console.log(arr1);

  console.log("Taylor Gas ");
  console.log(arr2);

  console.log("Rent");
  console.log(arr3);

  console.log("Utilities");
  console.log(arr4);

  console.log("Auto Insurance");
  console.log(arr5);

  console.log("Taylor Misc");
  console.log(arr6);

  console.log("Food");
  console.log(arr7);

  console.log("Entertainment");
  console.log(arr8);

  console.log("Stuff");
  console.log(arr9);

  console.log("Business/work");
  console.log(arr10);

  console.log("Savings");
  console.log(arr11);

  console.log("Investing");
  console.log(arr12);
})();
