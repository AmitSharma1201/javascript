// data types summary //

// primitive and non primitive //

// 1 primitive //

//string , number,boolean,null,undefined,symbol,BigInt

 //const score = 100
//console.log("score")
//console.log(typeof score);

//const isLoggedIn = false;
//console.log("isLoggedIn");
//console.log(typeof isLoggedIn);
 //const outsideTemp = null;
 //console.log(typeof outsideTemp);
 //let useremail;
 //console.log(typeof useremail)
//const bigNumber = 123456n;
//console.log(typeof bigNumber);

// non primitive //

//Array
//const heros = ["ABC","XYZ","EFG"];

//objects

//let myObj = {
   // name:"hitesh",
   // age:21,
//}

// function //

/*const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction);*/

//******************************MEMORY*******************************//

let myYoutubename = "amitsharmadotcom";
let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl",
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)


