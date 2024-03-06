///inversion of control and how it fix by using promise
function download(url, cb) {
  console.log("url is", url);
  setTimeout(() => {
    console.log("downloaded");
    let name = "Abhisek";
    cb(name);
    //problem here is the function cb controll is now with downloadd function.
    //he can call the cb function many times which can leads to seviour problem
    //or never call the cb callback: no use code issue or dead code
  }, 1000);
}

download("youtube.com", function cb(value) {
  console.log("downloaded value is", value);
});

function downloadPromiseBase(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise based downloading start");
      resolve("resolved");
    }, 1000);
  });
}

const p = downloadPromiseBase("google.com");
p.then(function fullfilHandler(value) {
  console.log("Content downloaded is", value);
});

//we don't have option to call the CB twice or none
//this way promise will solve the inversion controller issue
