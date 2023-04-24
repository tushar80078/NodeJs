const fs=require("fs");

//Read File

fs.readFile("./data.txt","utf-8",function(err,result){
    console.log(result);
    console.log(err);
});

//Write File
fs.writeFile("./todo.txt","hellow world",function(err,data){
    console.log(data);
    console.log(err);
})

//If we want to append data
fs.appendFile("./todo.txt","hellow world",function(err,data){
    console.log(data);
    console.log(err);
})

//To delete linked file

fs.unlink("./todo.txt",function(err,data){
    console.log(data);
    console.log(err);
})

