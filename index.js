function bumpCounter(counter) {
  var counter = 0
  function addBump(counter) {
    counter += 1
  }
  function getBumps() {
    console.log(counter)
  }

  return {
    addBump,
    getBumps
  };

}


function  createAnimal(animalType) {


}
