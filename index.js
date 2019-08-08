var kittens = ["Milo", "Otis", "Garfield"] //define your array here
var name =["Ralph"]
var name1 =["Bob"]
var name2=["Broom"]
// Add your functions and code here
//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name) {
  return kittens.push(name) //creates new array and adds the element to the end
}

function destructivelyPrependKitten(name1){
  return kittens.unshift(name1)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name2){
  return concat.kittens(name2)
}
