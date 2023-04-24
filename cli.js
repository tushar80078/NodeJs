//Global Objects - window object

//console.log(process); //prints all the objects under process globalObject

//console.log(process.argv[2]);

function sum(a,b)
{
    return a+b;
}
let a=Number(process.argv[2]);
let b=Number(process.argv[3]);

let result=sum(a,b)

console.log(result);