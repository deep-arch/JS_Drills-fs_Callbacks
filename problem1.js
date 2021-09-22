// Problem 1:

// Using callbacks and the fs module's asynchronous functions, do the following:
//     1. Create a directory of random JSON files
//     2. Delete those files simultaneously

const fs = require("fs");

function problem1(filename, maxNumberFiles, callback) {
  createDir((error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(null, data);
      for (let index = 1; index < Math.random() * maxNumberFiles + 2; index++) {
        //console.log(index);
        createFile(filename + index, (error, data) => {
          if (error) {
            callback(error);
          } else {
            callback(null, data);
            deleteFile(filename + index, (error, data) => {
              if (error) {
                callback(error);
              } else {
                callback(null, data);
                deleteDir((error, data) => {
                  if (error) {
                    callback(error);
                  } else {
                    callback(null, data);
                  }
                });
              }
            });
          }
        });
      }
    }
  });
}

function createDir(callback) {
  fs.mkdir("directory", (error) => {
    if (error) {
      callback(new Error("Directory already exists!"));
    } else {
      callback(null, "Directory created successfully!");
    }
  });
}

function createFile(filename, callback) {
  fs.writeFile(`./directory/${filename}.json`, "JSONdata", (error) => {
    if (error) {
      callback(error);
    } else {
      callback(null, `${filename}.json file created successfully!`);
    }
  });
}

function deleteFile(filename, callback) {
  fs.unlink(`./directory/${filename}.json`, (error) => {
    if (error) {
      callback(new Error("File does not exists!"));
    } else {
      callback(null, `${filename}.json file deleted successfully!`);
    }
  });
}

function deleteDir(callback) {
  fs.rmdir("directory", function (error) {
    if (error) {
      return;
    } else {
      callback(null, "");
    }
  });
}

module.exports = problem1;
