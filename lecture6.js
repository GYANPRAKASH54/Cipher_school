// var x = 15;
// {
//     let x = 5;
//     console.log(x); /*let function*/
// }
// console.log(x);
// var y = function(x,y)
// {
//     return x+y;
// };
// console.log(y(5,6));
// const z = (x,y) => {
//     return x+y;
// };
// console.log(z(7,10));/*arrow function*/
// const a1=["a","b","c"];
// const a2=["d","e","f"];
// const a3=["g","h","i"];
// const a4=["j","k","l"];
// const alphabet = [...a1,...a2,...a3,...a4];
// console.log(alphabet);
// const numbers=[100,99,10.59,100.1];
// let maxvalue = Math.max(...numbers);
// console.log(maxvalue);
// const mynumbers=[100,99,10.59,100.1,-50];
// let sum = 0;
// for (num of mynumbers){
//     sum = sum+num;
// }
// console.log(sum)
// const name = "Lovely Professional University";
// let text = "";
// for (ch of name){
//     text += ch+" ";
// }
// console.log(text);
// const fruits =  new Map([
//     ["Apple",500],
//     ["Kela",100],
//     ["Angoor",205]
// ]);
// console.log(fruits);
// console.log(fruits.get("Angoor"));
// const letter = new Set();
// letter.add ("a");
// letter.add ("b");
// letter.add ("a");
// console.log(letter)
//class car{
//    constructor(name,price){
//        this.name=name;
//        this.price=price;
//    }
//}
// const mycar1 = new car("Mercedes",20000);
// const mycar2 = new car("Porsche",50000);
// console.log(mycar1,mycar2);
// const myfunction = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//      1       console.log("This is inside Promise");
//             resolve();
//         },200);
//     });
// };
// myfunction()
// .then(()=>{
//     console.log("resolved");

// })
// .catch(()=>{
//     console.error("Rejected");
// });
// const person = {
//     firstName:"Gyan",
//     secondName:"Prakash",
//     age:19
// };
// let id = Symbol("id");
// person [id]=100020;
// console.log(person);
// const addTwonumbers = (a,b=10)=>{
//     return a+b;
// }
// console.log(addTwonumbers(10,155));
// const addnumber=(...args)=>{
//     let sum = 0;
//     for(arg of args){
//         sum+=arg;
//     }
//     return sum;
// };
// console.log(addnumber(10,20,30,40,50,60));
