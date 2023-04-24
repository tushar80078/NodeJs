const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;


let a=Number(argv.first);
let b=Number(argv.second);


if(argv.add== "true")
{
    console.log(a+b);
    
}
else if(argv.multi== "true")
{
    console.log(a*b);
}
