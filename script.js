let name = prompt("enter your name:")
let age = prompt("enter your age:")

function checkAge (){

if (age >= 18) {
    alert("Hello " + name + " ,You can drive");

} 

else {
    alert("Hello" + name + " ,You're too young to drive");
 
}


}


let result = checkAge(age);