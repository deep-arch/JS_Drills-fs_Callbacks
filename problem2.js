// Problem 2:

// Using callbacks and the fs module's asynchronous functions, do the following:
//     1. Read the given file lipsum.txt
//     2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
//     3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
//     4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
//     5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

const {
  promises: { writeFile, unlink, readFile },
} = require("fs");

function problem2(lipsum) {
let filename;

  readFile(lipsum, "utf8")
    .then((data) => writeFile("../data/upperCase.txt", data.toUpperCase()))
    .then(() => {
      filename = "upperCase.txt";
      return writeFile("../data/filenames.txt", filename);
    })
    .then(() => readFile("../data/upperCase.txt", "utf8"))
    .then((data) => writeFile("../data/lowerCaseAndSplit.txt", data.toLowerCase().split(". ").join("\n")))
    .then(() => {
      filename += "\nlowerCaseAndSplit.txt";
      return writeFile("../data/filenames.txt", filename);
    })
    .then(() => readFile("../data/lowerCaseAndSplit.txt", "utf8"))
    .then((data) => writeFile("../data/sort.txt", data.split("\n").sort().join("\n")))
    .then(() => {
      filename += "\nsort.txt";
      return writeFile("../data/filenames.txt", filename);
    })
    .then(() => readFile("../data/filenames.txt", "utf8"))
    .then((data) => {
      let filenameContents = data.split("\n");
      filenameContents.find((filename) => {
        unlink(`../data/${filename}`);
      });
    })
    .catch((error) => {
      console.log(error);
    })
}

module.exports = { problem2 };
