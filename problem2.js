// Problem 2:

// Using callbacks and the fs module's asynchronous functions, do the following:
//     1. Read the given file lipsum.txt
//     2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
//     3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
//     4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
//     5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

const fs = require("fs");

function problem2(lipsum, callback) {
  readFile(lipsum, (error, data) => {
    if (error) {
      callback(error);
    } else {
      let tData = data.toUpperCase();
      writeToFileUpper(tData, (error) => {
        if (error) {
          callback(error);
        } else {
          readFileUpper((error, data) => {
            if (error) {
              callback(error);
            } else {
              let tData = data
                .toLowerCase()
                .replace(/\. /g, ".|")
                // .replace(/\? /g, "?|")
                // .replace(/\! /g, "!|")
                .split("|")
                .join("\n");
              writeFileLowerAndSplit(tData, (error, data) => {
                if (error) {
                  callback(error);
                } else {
                  readFileLowerAndSplit((error, data) => {
                    if (error) {
                      callback(error);
                    } else {
                      let tData = data.split("\n").sort().join("\n");
                      writeFileSort(tData, (error, data) => {
                        if (error) {
                          callback(error);
                        } else {
                          readFilenames((error, data) => {
                            if (error) {
                              callback(error);
                            } else {
                              callback(null, "Contents of filenames.txt: \n" + data);
                              deleteAllNewFiles((error, data) => {
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
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

function readFile(lipsum, callback) {
  setTimeout(() => {
    fs.readFile(lipsum, "utf-8", (error, data) => {
      if (error) {
        callback(new Error("There is no File!"));
      } else {
        callback(null, data);
      }
    });
  }, 2 * 1000);
}

function writeToFilenames(filename, callback) {
  setTimeout(() => {
    fs.writeFile("../data/filenames.txt", filename, (error) => {
      if (error) {
        callback(error);
      } else {
        callback(null, "");
      }
    });
  }, 2 * 1000);
}

function readFilenames(callback) {
  setTimeout(() => {
    fs.readFile("../data/filenames.txt", "utf-8", (error, data) => {
      if (error) {
        callback(error);
      } else {
        callback(null, data);
      }
    });
  }, 2 * 1000);
}

function writeToFileUpper(tData, callback) {
  setTimeout(() => {
    fs.writeFile("../data/upperCase.txt", tData, (error) => {
      filename = "upperCase.txt \n";
      if (error) {
        callback(error);
      } else {
        writeToFilenames(filename, (error) => {
          if (error) {
            callback(error);
          } else {
            callback(
              null,
              console.log(
                "upperCase.txt created successfully!\nfilenames.txt updated successfully!\n"
              )
            );
          }
        });
      }
    });
  }, 2 * 1000);
}

function readFileUpper(callback) {
  setTimeout(() => {
    fs.readFile("../data/upperCase.txt", "utf-8", (error, data) => {
      if (error) {
        callback(error);
      } else {
        callback(null, data);
      }
    });
  }, 2 * 1000);
}

function writeFileLowerAndSplit(tData, callback) {
  setTimeout(() => {
    fs.writeFile("../data/lowerAndSplit.txt", tData, (error) => {
      filename += "lowerAndSplit.txt \n";
      if (error) {
        callback(error);
      } else {
        writeToFilenames(filename, (error) => {
          if (error) {
            callback(error);
          } else {
            callback(
              null,
              console.log(
                "lowerAndSplit.txt created successfully!\nfilenames.txt updated successfully!\n"
              )
            );
          }
        });
      }
    });
  }, 2 * 1000);
}

function readFileLowerAndSplit(callback) {
  setTimeout(() => {
    fs.readFile("../data/lowerAndSplit.txt", "utf-8", (error, data) => {
      if (error) {
        callback(error);
      } else {
        callback(null, data);
      }
    });
  }, 2 * 1000);
}

function writeFileSort(tData, callback) {
  setTimeout(() => {
    fs.writeFile("../data/sort.txt", tData, (error) => {
      filename += "sort.txt \n";
      if (error) {
        callback(error);
      } else {
        writeToFilenames(filename, (error) => {
          if (error) {
            callback(error);
          } else {
            callback(
              null,
              console.log(
                "sort.txt created successfully!\nfilenames.txt updated successfully!\n"
              )
            );
          }
        });
      }
    });
  }, 2 * 1000);
}

function deleteAllNewFiles(callback) {
  setTimeout(() => {
    fs.unlink("../data/upperCase.txt", (error) => {
      if (error) {
        callback(new Error("File not exists!"));
      } else {
        callback(null, "upperCase.txt deleted successfully! \n");
      }
    });

    fs.unlink("../data/lowerAndSplit.txt", (error) => {
      if (error) {
        callback(new Error("File not exists!"));
      } else {
        callback(null, "lowerAndSplit.txt deleted successfully! \n");
      }
    });

    fs.unlink("../data/sort.txt", (error) => {
      if (error) {
        callback(new Error("File not exists!"));
      } else {
        callback(null, "sort.txt deleted successfully! \n");
      }
    });
  }, 2 * 1000);
}

module.exports = { problem2 };
