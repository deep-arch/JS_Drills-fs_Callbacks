const problem2 = require("../problem2");

const lipsum = "../data/lipsum.txt";

problem2(lipsum, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
