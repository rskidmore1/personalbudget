// bankBudget.js;

// Personal budget CLI

// -make category for not applicable d
// -make flow for bank export d
// -make bank payment check use date to check
// -find file for bank and credit card automatically. Maybe choose file from all CSV files in. Choose one for CC and one for bank. NO

// -fix bankBudget not printing to console

// -make these into function

// FUTURE
// TODO make way to select dates for the week dropping a csv in
// Maybe read dates and select range
// Auto suggest category

const fs = require("fs");
const prompts = require("prompts");

const fileName = "Checking - 6781_06-03-2023_07-03-2023";

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

// Bank PARSING
const bankPurchases = [];
const bankBudgetQuestions = [];

var data = fs
  .readFileSync(fileName + ".csv")
  .toString() // convert Buffer to string
  .split("\n"); // split string to lines


data.map((item) => {

  const paymentEntry = item.replace(/"/g, '');
  if (paymentEntry !== ""){
      const paymentSplitStr = paymentEntry.split(",");
      if(paymentSplitStr[1] !== "CREDIT" ){
          bankPurchases.push(paymentSplitStr);
      }
    }
});


const bankDescriptionsAndCosts = [];

bankPurchases.map((item) => {
  bankDescriptionsAndCosts.push([item[2], item[4]]);
});

let bankCategoriesString = "";

categories.map((item) => {
  bankCategoriesString = `${bankCategoriesString}, ${item}`;
});

bankDescriptionsAndCosts.map((item) => {
  const removeMinus = item[1].replace(/-/g, '');
  bankBudgetQuestions.push({
    type: "number",
    name: `${item[1]}`,
    message: `${bankCategoriesString}\n\r ${item[0]}: ${removeMinus}`, // NOTE: shows description and amount
  });
});

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
    if (answer === 1) {
      arr1 = `${arr1}+${prompt.name}`;
      console.log(`Added ${answer} to ${arr1}`);
    } else if (answer === 2) {
      arr2 = `${arr2}+${prompt.name}`;
      console.log(`Added ${answer} to ${arr2}`);
    } else if (answer === 3) {
      arr3 = `${arr3}+${prompt.name}`;
      console.log(arr3);
      console.log(prompt.name);
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
    } else {
      console.log("Transaction skipped.");
    }
  };
  const response = await prompts(bankBudgetQuestions, { onSubmit });

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
