const add = function() {
  console.log(2 + 3);
}

runTwice(add);
runTwice(function(){console.log('12b')})

function runTwice(fun){
  fun();
  fun();
}
