// Question _____________ 76


function addNumbers(a, b) {
    return a + b;
  }
  
  // Calling the function and logging the result
  let num1 = 10;
  let num2 = 5;
  let result = addNumbers(num1, num2);
  console.log("The result of adding", num1, "and", num2, "is", result);

  
  // Question ____________ 77


  function greetUser(name = "Anonymous") {
    console.log("Hello, " + name + "!");
  }
  
  // Calling the function with a name
  greetUser("Alice"); // Output: Hello, Alice!
  
  // Calling the function without a name (default parameter will be used)
  greetUser(); // Output: Hello, Anonymous!

  

  // Question _____________ 78



  // Function expression using the const keyword
const square = function(num) {
    return num * num;
  };
  
  // Calling the function expression
  let result1 = square(5);
  console.log("Using function expression:", result1); // Output: 25

  // Function declaration
function square(num) {
    return num * num;
  }
  
  // Calling the function declaration
  let result2 = square(5);
  console.log("Using function declaration:", result2); // Output: 25
  