const fs = require("fs");
// sync синхронный и поэтому делает остановку на каждом запросе и не нуждаеться в callBack()=>{}
const readFileSync = fs.readFileSync("index.html", "utf-8");
console.log(readFileSync);
const writeFileSync = fs.writeFileSync("index.html", readFileSync + "\nGGGG", () => {
  console.log(writeFileSync)
});


// async - вне очереди поэтому нужен callBack()=>{} потому что не знает где остановиться
// fs.readFile("index.html", "utf-8", (err, data) => {
//   fs.writeFile("index.html", data + "\nGGGG", (err, data) => {
//     console.log("everythink ok")
//   })
// });
