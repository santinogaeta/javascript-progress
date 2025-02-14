const add = function() {
  console.log(2 + 3);
}

runTwice(add);


function runTwice(fun){
  fun();
  fun();
}
