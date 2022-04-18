// Syncronous function


console.log("Hello world");
console.log("This is kawser");
console.log("A broken Heart");
console.log("Trying to be strong");

// This all line will execute one by one this is known as syncronus 

// Asyncronous function

const taskone=()=>console.log("Hello World");
const dataloading=()=>console.log("Data Loading");
const tasktwo=()=>setTimeout(dataloading,3000);
const taskthree=()=>console.log("task 3");
const taskfour=()=>console.log("task4");

taskone();
tasktwo();
taskthree();
taskfour();

