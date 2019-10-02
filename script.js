/* JavaScript code here */
console.log("External js");

//Task2

function arraySum(arr){
    let sum=0;
    arr.forEach(element => {

        sum +=element;

        
    });

    return (multiplier) =>{
        return sum*multiplier;
    }

}
let sum = arraySum([1,2,3]);
console.log(sum(2));

// Task 3

function ValidEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}

var email = "mesbahul.sohan@gmail.com";
ValidEmail(email);

