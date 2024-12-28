import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta("\n \t WELCOME TO CODE WITH MUHIBA - Todo-List Application\n"));


while(conditions){
      let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.blue( "Enter your New Task:")
        }
      ]);
      todoList.push(addTask.task);
      console.log(`${addTask.task} Task added in Todo-List successfully`);
       
      let addMoreTask = await inquirer.prompt([
        {
            
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            //@ts-ignore
            default: "false"
        }
      ]);
       conditions = addMoreTask.addmore
}
console.log("Your updated Todo-List:" , todoList);
