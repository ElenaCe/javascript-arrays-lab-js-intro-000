var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name) {
  it('', function() {

    destructivelyAppendKitten('Ralph')
    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
  })
})
