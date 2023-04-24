const readline = require('readline');  

const { stdin: input, stdout: output } = require('process'); 

const rl = readline.createInterface({ input, output });

const fs=require("fs");

function foo()
{
   
    rl.question("Hello Enter Anything : \n",(d)=>{
        addData(d);
    })  

  

    
}


function addData(d){
    fs.appendFile("./data.txt",d,(rej,res)=>{
        
        rl.close();
    })
    }

foo();