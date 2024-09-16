// callback is nothing but a function

function callback() {
  console.log("prince is calling a callback function");
}

const add = function (a, b, callback) {
  var result = a + b;
  console.log("result is : " + result);
  callback();
};

add(3, 4, callback);

// the function that gets executed after the main function is being executed ....

// another way to write function is to write inline function ......

add(2, 3, () => console.log("the sum is being calculated"));
