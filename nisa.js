#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1122;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        // = , -= , +=
        myBalance -= amountAns.amount;
        console.log("your remaning balance is : " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount to withdraw",
                type: "number",
            }
        ]);
        // Check if the amount to withdraw is greater than the available balance
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Transaction successful: " + myBalance);
        }
    }
}
else {
    console.log("incorrect pin code !!!");
}
