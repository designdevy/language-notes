const path = require("path")
const fs = require("fs")

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.unlink(path.join(__dirname, "docs"), () => { console.log("deleted docs") })
  }
}