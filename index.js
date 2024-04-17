#! /usr/bin/env node
import inquirer from "inquirer";
const object = await inquirer.prompt([{ message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    { message: "Select Operation", type: "list", name: "operator", choices: ["Add", "Subtract", "Multiply", "Division"] }
]);
//console.log(object);
if (object.operator === "Add") {
    console.log(object.FirstNumber + object.SecondNumber);
}
else if (object.operator === "Subtract") {
    console.log(object.FirstNumber - object.SecondNumber);
}
else if (object.operator === "Multiply") {
    console.log(object.FirstNumber * object.SecondNumber);
}
else if (object.operator === "Division") {
    console.log(object.FirstNumber / object.SecondNumber);
}
else
    console.log("Select Operator from List");
