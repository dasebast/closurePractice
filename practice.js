//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  var inner = outer();

//Once you do that, invoke inner.

  inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  var inner = callFriend();
  inner(435+"-"+215+"-"+9248);



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  var makeCounter = function() {
    var i = 0;
    return function() {
      i++;
      return i;
    }
  };

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's only argument 
  and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  
  Once completed, add a second argument that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

//PART 1
var logger = function() {
  console.log("doug");
};

var outerFn = function(anotherFn) {
    var once = false;
    return function() {
      if (!once) {
        anotherFn(); //logger();
        once = true;
      }
  }
};

var innerFn = outerFn(logger);
innerFn();


///

// var logger = function() {
//   console.log("doug");
// };

// var outerFn = function(anotherFn, n) {
//     var i = n;
//     if (i >= 0) {
//       return function() {
//         anotherFn(); //logger();
//       };
//     i--;  
//     } else {
//         console.log("stop");
//       }
// };

// var innerFn = outerFn(logger, 5);
// innerFn();
/////////////////////

//PART2
var logger = function() {
  console.log("doug");
};

var outerFn = function(anotherFn, n) {
  var i = n;
    return function(){
      if(i > 0){
        anotherFn();
        i--
      }
    }
};

var innerFn = outerFn(logger, 5);
innerFn();






// var outerFn = function(anotherFn, n) {
//     for (var i = n; i >= 0; i--) {          
//       function() {
//         anotherFn(); //logger();
//       } 
//     }
//   console.log("stop");
// }

// var innerFn = outerFn(logger, 5);
// innerFn();
