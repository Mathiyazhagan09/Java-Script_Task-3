            //Functions and Parameters
//1.
/*function name() {
 console.log("Welcome to Java Script");
}
name();*/

//2.
/*function studentdetails(name,age,cgpa){
    console.log("Name:",name);
    console.log("age:",age);
    console.log("cgpa:",cgpa);
}
studentdetails("mathi",25,6.7);
studentdetails("elango",23,5.7)*/

//3.
/*function calculatefee(fee){
    return fee;
}
let studentfee=calculatefee(50000);
console.log(studentfee);*/

//4.
/*function discount(percent){
    let fee =200000;
    let discountamount=fee*percent/100;
    let finalfee=fee-discountamount;

    console.log("Orginalfee;",fee);
    console.log("Discountamount;",discountamount);
    console.log("finalamount;",finalfee);

}
discount(10);*/

//5.
/*function studentForm(name,age,disability="no"){
    console.log("name:",name);
    console.log("age:",age);
    console.log("Disablity:",disability);
}
studentForm("Mathi",25,"no");
studentForm("Elango",23,"no");*/

        //Function Types and Scope
//6.
/*function displaymessage(message){
    console.log(message);
}        
displaymessage("Welcome to Java Script")*/

//7.
/*let student=function(name){
    console.log(name);

}
student("Mathi");*/

//8.
/*let printnumber=number =>{
    console.log(number);
}
printnumber(100);*/

//9.
/*function checkScope(){
    if (true){
        var a=10;
        let b=20;
        const c=30;

        console.log("Inside;",a);
        console.log("inside;",b);
        console.log("Inside;",c);
    }
        console.log("inside;",a);
    
    }

checkScope();*/

//10.
//console.log(value);
//var value=10

             ///Callback and Higher-Order Functions
//11.
/*function first (callback){
    console.log("First funtion");
    callback();
}             
function second(){
    console.log("second function");
}
function third(){
    console.log("third function");
    callback();
}
first(third);*/

//12.
/*function add(callback,a,b){
    console.log("Sum;",a+b)
    callback(a,b);
}
function result(num1,num2){
    console.log("callback value;",num1,num2)

}
add(result,10,20);*/

//13.
/*const sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

function add(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}

add(sub, 20, 10);*/

//14.
/*function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}

function message() {
    console.log("Multiplication completed!");
}

multiply(message, 5, 3);*/

//15.
/*function divide(num1, num2) {
    console.log("Division:", num1 / num2);
}

function calculate(callback) {
    callback(20, 4);
}

calculate(divide);*/

//16.
/*function student(callback) {
    callback("Mathi");
}

function displayName(name) {
    console.log("Student Name:", name);
}

student(displayName);*/

                   //Generator Functions 
//17.                   
/*function* cashback() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result = cashback();

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);      */

//18.
/*function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());*/

//19.
/*function* discounts() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "50% Discount";
    yield "Special Offer";
}

for (let message of discounts()) {
    console.log(message);
}*/

//20.
/*function* students() {
    yield "Mathi";
    yield "Arun";
    yield "Kumar";
}

for (let name of students()) {
    console.log(name);
}*/

//21.
/*function* fruits() {
    yield "Apple";
    yield "Banana";
    yield "Orange";
    yield "Mango";
}

let gen = fruits();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());*/

                      //Currying and Uncurrying 
//22.
/*function add(a, b, c) {
    console.log("Sum:", a + b + c);
}

add(5, 10, 15);*/

//23.
/*function add(a) {
    return function (b) {
        return function (c) {
            console.log("Sum:", a + b + c);
        };
    };
}

add(5)(10)(15);*/

//24.
/*function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(multiply(5)(10)(15));*/

//25.
/*function calculatePrice(price) {
    return function (discount) {
        return function (quantity) {
            let discountedPrice = price - (price * discount / 100);
            let total = discountedPrice * quantity;

            console.log("Total Price:", total);
        };
    };
}

calculatePrice(1000)(20)(3);*/

//26.
/*// Normal function
function add(a, b, c) {
    return a + b + c;
}

console.log("Normal Result:", add(5, 10, 15));

// Curried function
function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log("Curried Result:", curriedAdd(5)(10)(15));*/


               // : IIFE, Return, and Mixed Practice 
//27.
/*(function (productName, discount) {
    console.log(`${productName} is on sale! Get ${discount}% discount.`);
})("Laptop", 20);*/

//28.
/*function getNumber() {
    return 100;
}

let result = getNumber();

console.log(result);*/

//29.
/*function getMarks(marks) {
    return marks;
}

let studentMarks = getMarks(85);

console.log("Student Marks", studentMarks);*/

//30.
/*function calculateFee(fee = 10000, callback) {
    let discount = callback(fee);
    let finalFee = fee - discount;

    return finalFee;
}

function calculateDiscount(fee) {
    return fee * 10 / 100;
}

let result = calculateFee(10000, calculateDiscount);

console.log("Final Student Fee ₹" + result);
