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
const sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

function add(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}

add(sub, 20, 10);
