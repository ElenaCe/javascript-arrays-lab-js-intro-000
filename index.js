var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(kittens) {
  extracat =["Ralph"]

  var new_kittens = kittens.concat(extracat)
  return new_kittens
}
destructivelyAppendKitten(kittens)
