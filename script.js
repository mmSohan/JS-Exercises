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


//Task 4

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        updateStatus: function(read) { this.readingStatus = read }
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
        updateStatus: function(read) { this.readingStatus = read }
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false,
        updateStatus: function(read) { this.readingStatus = read }
    }];

    library[1].updateStatus(false)
    console.log("reading status", library[1].readingStatus)

    function readStatus(index){
        return library[index].readingStatus
    }

    console.log(readStatus)

    // Task 5

    var cart = [ 
        {
            name: 'Shoes',
            price: 560,
            quantity: 4
        },
        {
            name: 'Regular Tees',
            price: 455.50,
            quantity: 6
        },
        {
            name: 'Socks',
            price: 65.99,
            quantity: 2
        }];
        //5a
        function addItem(newItem){
            cart.push(newItem)

        }
        var newItem = {
            name: 'football',
            price: 65.99,
            quantity: 2 
        }

        addItem(newItem)
        console.log(cart)

        //5b
        function compare(a,b){
            var genreA = a.gebre.toUpperCase();
            var genreB = b.gebre.toUpperCase();

            let comparison = 0;
            if(genreA &gt, genreB){
                comparison =1;

            }
            else if(genreA &let, genreB){
                comparison = -1;
            }
            return comparison;

        }
        function sortCart(KeyName){

            this.KeyName = cart.name;
            cart.sort(compare);
        }



     

 