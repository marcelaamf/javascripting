const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let waldoName = names[i];
    if (waldoName === "Waldo") {
      found(names.indexOf(waldoName))   // execute callback
    }
  }
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "john", "Waldo", "Winston"], actionWhenFound);
