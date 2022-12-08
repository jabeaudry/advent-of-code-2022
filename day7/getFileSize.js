const fs = require("fs");
const readline = require("readline");
const { runInContext } = require("vm");
var file = "day7/input.txt";

function fileSize() {
  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity,
  });

  var stack = [0];
  let maxUnder100000 = 0;

  rl.on("line", (line) => {
    if (line.substring(0, 1) == "$") {
      if (line.substring(2, 7) == "cd ..") {
        let previousHead = Number(stack[stack.length - 1]);
        stack.pop();
        stack[stack.length - 1] += previousHead;
        if (previousHead < 100000) {
          maxUnder100000 += previousHead;
        }
      } else if (line.substring(2, 4) == "cd") {
        stack.push(0);
      }
    } else if (line.substring(0, 3) != "dir") {
      stack[stack.length - 1] += Number(line.substring(0, line.indexOf(" ")));
    }
    console.log(maxUnder100000);
  });
}
fileSize();
