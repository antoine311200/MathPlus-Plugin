import * as fs from "fs";

SupAPI.registerPlugin("typescript", "Sup.MathPlus", {
  defs: fs.readFileSync(`${__dirname}/Sup.MathPlus.d.ts.txt`, { encoding: "utf8" }),
  code: fs.readFileSync(`${__dirname}/Sup.MathPlus.ts.txt`, { encoding: "utf8" }),
});
