const app = "I don't do much."

function bumpCounter() {
  var counter = 0
  function addBump() {
    counter += 1
  }
  function getBumps() {
    console.log counter
  }
}