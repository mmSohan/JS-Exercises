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

function validEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

console.log(validEmail("mesbahul.sohan@gmail.com"));


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

    console.log(readStatus(1));

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
            price: 75,
            quantity: 3 
        }

        addItem(newItem)
        console.log(cart)

        //5b
        
        function sortCart(quantity){
            cart.sort(function (a, b) {
                if (a.quantity > b.quantity) {
                    return -1;
                }
                if (b.quantity > a.quantity) {
                    return 1;
                }
                return 0;
            });
        }
        sortCart("quantity");
        console.log(cart);

        //5c

        function findByName(name){
            return cart.find(a => {
                return a.name === name;
            });
        }
        console.log(findByName("Socks"));

        //5d

        function totalCost(){
            var sum = 0;
            cart.forEach(a =>{
                sum += (a.price)*a.quantity;

            });
            return sum;
        }

        console.log("Total Cost: "+totalCost());


     

 