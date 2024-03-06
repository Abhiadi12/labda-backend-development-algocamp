function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("started downloading from", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download completed");
      resolve(data);
    }, 7000);
  });
}
console.log("start");
let p = fetchData("url");
p.then(function (value) {
  console.log("value is ", value);
});
console.log("end");
