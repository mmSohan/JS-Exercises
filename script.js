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
