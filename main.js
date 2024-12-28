"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var todoList = [];
var conditions = true;
console.log(chalk_1.default.magenta("\n \t WELCOME TO CODE WITH MUHIBA - Todo-List Application\n"));
while (conditions) {
    var addTask = await inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: chalk_1.default.blue("Enter your New Task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log("".concat(addTask.task, " Task added in Todo-List successfully"));
    var addMoreTask = await inquirer_1.default.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            //@ts-ignore
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your updated Todo-List:", todoList);
