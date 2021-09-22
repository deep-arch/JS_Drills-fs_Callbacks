const problem1 = require("../problem1");

function fileNameGen() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (let index = 1; index < 5; index++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

let maxNumberFiles = 10;

problem1(fileNameGen(), maxNumberFiles, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
