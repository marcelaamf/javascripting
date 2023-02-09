const findWaldo = function(names, callback) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      callback(index); // execute callback
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => console.log(`Found Waldo at index ${index}!`));
