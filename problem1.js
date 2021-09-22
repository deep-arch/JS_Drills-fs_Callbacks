// Problem 1:

// Using callbacks and the fs module's asynchronous functions, do the following:
//     1. Create a directory of random JSON files
//     2. Delete those files simultaneously

const {
  promises: { mkdir, writeFile, unlink, rmdir },
} = require("fs");

function problem1(filename, maxNumberFiles) {
  return new Promise((resolve, reject) => {
    createDir();
    {
      for (let index = 1; index < Math.random() * maxNumberFiles + 2; index++) {
        //console.log(index);
        newFilename = filename + index;
        createAndDeleteFile(newFilename);
        {
          if (newFilename) {
            resolve("");
          } else {
            reject(error);
          }
        }
      }
      //resolve();
      // deleteDir();
    }
  });
}

function createDir() {
  mkdir("directory")
    .then(() => console.log("Directory created successfully!"))
    .catch((error) => console.log(error, "Directory already exists!"));
}

function createAndDeleteFile(filename) {
  writeFile(`./directory/${filename}.json`, "JSONdata")
    .then(() => {
      console.log(`${filename}.json file created successfully!`);
      unlink(`./directory/${filename}.json`)
        .then(() => console.log(`${filename}.json file deleted successfully!`))
        .catch((error) => console.log(error, "File not deleted!"));
    })
    .catch((error) => console.log(error, "File not created!"));
}

// function deleteDir() {
//   rmdir("directory")
//     .then(() => console.log(""))
//     .catch((error) => console.log(error, "Directory not empty!"));
// }

module.exports = problem1;
