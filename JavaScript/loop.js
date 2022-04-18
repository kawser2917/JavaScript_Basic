// Square star Pattern

// let num= 5;
// str=""
// for (let i=0;i<num;i++){
//     for (let j=0;j<num;j++){
//         str+="*";
//     }
//     str+="\n"  
// }
// console.log((str));

// Hollow square pattern

// let n= 5;
// str=""
// for (let i=0;i<n;i++){
//     for (let j=0;j<n;j++){
//         if (i===0 || i===n-1){
//             str+="*";
//         }
//         else{ 
//             if (j===0 || j===n-1){
//                 str+="*";
//             }
//             else{
//                 str+=" "
//             }
//         }  
//     }
//     str+="\n"  
// }
// console.log((str));

//  Right triangle pattern
// str=""
// let n=5;
// for (let i=0;i<n;i++){
//     for (let j=0;j<n-i;j++){
//         str+=" "
//     }
//     for (let k=0;k<i;k++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str);

// left triangle pattern

// str=""
// let n=5;
// for (let i=0;i<n;i++){
//     for (let j=0;j<n-1;j++){
//         str+=" "
//     }
//     for (let k=0;k<i;k++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str);

// Downward Triangle Star Pattern

str=""
let n=5;
for (let i=0;i<n;i++){
    for (let j=0;j<n-i;j++){
        str+="*"
    }
    str+="\n"
}
console.log(str);



