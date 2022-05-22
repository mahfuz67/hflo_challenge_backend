const fs = require("fs-extra");
const { exec } = require("child_process");
fs.removeSync("./dist/");

exec("npm run build:cont", (error, stdout, stderr) => {
  if (error) console.error(error.message);
  console.error(stderr);
  console.error(stdout);
});
