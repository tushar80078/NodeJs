/* 
Coffie Shop CLI Shop
 // you have to build a coffee shop cli app

// you have to present the user with the coffee and the price

// then take the user input for the coffee

// then just show coffee is preparing

// then after that print your coffee is ready and yoou have to pay this much amount
*/
var clc = require("cli-color");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const { log } = require("console");
const rl = readline.createInterface({ input, output });

const menus = [
    {
        intemName: "Coffee",
        itemPrice: "30"
    },
    {
        intemName: "VadaPav",
        itemPrice: "15"
    }
]


function menuCard() {
    console.log(`\n-x------x------x------x------x-\n\n ${clc.green("WelCome To TummyFull Snack Center")} \n\n-x------x------x------x------x-`);

    console.log(clc.red(`   \n Menu`));
    console.table(menus);
    getInput();
}

const cart=[];

function cartItems(itemNo)
{
    console.log(`You Selected ${clc.green(menus[itemNo].intemName)}`);
    cart.push(menus[itemNo]);

    rl.question(`Do you want to add some more : (Y/N)\n`,(input)=>{
        if(input=='y' || input=='Y')
        {
            console.table(menus);
            getInput();
        }
        else{
           bill();
        }
    })

}

function bill()
{
    console.log(`Bill`);
    console.table(cart);
    console.log("Your Order Is Preparing Please Wait....")

    setTimeout(() => {
        
    console.log("\nYour Order Is Ready!\nThank You!!! \n Visit again !!!");
    rl.close();
        
    }, 3000);
}

function getInput()
{
    rl.question(`\nEnter ${clc.yellow(`Item No`)} To Add \nPress  ${clc.red.bold('D')} For Exit \n`,(userInput)=>{
        if(userInput=='d' || userInput=='D')
        {
            console.log("\nThank You!!! \n Visit again !!!");
            rl.close();
        }
        else{
            if(Number(userInput)<menus.length && Number(userInput)>-1)
            {
               cartItems(Number(userInput));
                
            }
            else{
                console.log("\nYou Entered Wrong Input Please Enter Again!!")
                console.log(clc.red(`   \n Menu`));
                console.table(menus);
                getInput();
            }
        }
    })
}


menuCard();