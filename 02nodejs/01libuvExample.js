const crypto = require("node:crypto");

// //sync version
const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log("total time taken", Date.now() - start);

// // this is blocking the main thread at executed in sync mode

const MAX = 4;

for (let i = 0; i < MAX; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
  console.log("end of loop", i + 1);
}
