// console.log("Hello World");
// Simple function creation

/*
function sayHello(){
    console.log("kawser , You should work hard");
}
sayHello();
*/

// Function with parameter


/*
function adder(num1,num2){
    console.log(num1+num2);
}
adder(5,5);
*/

// we can do multiple action with the single line of code this is the power of the function. 

// Note: If we don't pass any argument to it's parameter then the function will not show undefined . so we can set a default value for my parameter if user don't give any argument then our program will show default value.

/*function Hello(user){
    console.log("Hello "+user);
    
}
Hello();//Output will be " Hello Undefined"
*/

/*
function Hello(user="kawser"){
    console.log("Hello "+user);
    
}
Hello();//output will be hello kawser even i don't give any argument
*/
/*
function Hello(user='kawser'){
    console.log("Hello "+user);
    
}
Hello('Arif');
*/

//output will be " Hello Arif" because parameter will take argument first. Default value will work when we won't pass any argument.

// If we want to store something from function the we have to use return function.
/*
function adder(num1,num2){
    return result=num1+num2;
}
adder(5,5);

console.log(result+5);// Here we get 10 from result and we add 5 while consoling so that our output will be 15
*/
