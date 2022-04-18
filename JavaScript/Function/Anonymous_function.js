// This function will not have any name.
// We need to use semicolon after curly braces

// let name1=function(){
//     console.log("Hello World");
// };

// name1();

//Suppose we don't want to store in a variable and waste memory space then we can easily use anonyous function

setTimeout(function(){
    console.log("Hey , I won't store");
    console.log("I am useful for one time execution. I will excute this part after 3 second. Sleep now");
},3000);