const fs = require("fs");
const filename = "assets/js/main.min.js";
const script = fs.readFileSync(filename);

if (script.slice(0, 3) != "/**") {
  fs.writeFileSync(filename, script);
}
