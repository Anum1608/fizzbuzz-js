

// Here, we create our main function.
function fizzbuzz() {
    
    //console.log('Welcome to FizzBuzz!');

    // Print all numbers from 1 to 100 , print fizz instead if the number is a multiple of 3
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0  && i %5 == 0){
            console.log("FizzBuzz");
        } else if (i %3 == 0){
            console.log("Fizz");
        } else if (i %5 == 0){
            console.log("Buzz");
        } 
        else{
            console.log(i);
        }
    }  
}

// Now we run the main function...
fizzbuzz();
