const fs = require("fs");
const path = require("path");
const axios = require("axios");
const http = require("http");

//homework 2.2
const getUsers = (async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  fs.writeFile(
    path.resolve(__dirname, "users.json"),
    JSON.stringify(data),
    "utf-8",
    (err) => {
      if (err) {
        throw err;
      }
      console.log("done");
    }
  );
})

http
  .createServer((request, response) => {
    if (request.url === "/user") {
      getUsers();
      response.write("users list");
    }

    response.end();
  })
  .listen(3000);

//записать файл
// fs.writeFile('1.txt', 'Hello!', 'utf-8', (err) => {
//   if (err) {
//     throw err
//   }
//   console.log("done");
// })

//прочитать файл
// fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// })

//записать файл с постами
// ;(async() => {
//   const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

//  fs.writeFile(path.resolve(__dirname, '1.json'), JSON.stringify(data), 'utf-8', (err) => {
//    if (err) {
//      throw err
//   }
//   console.log("done");
// })

// }) ()

//создаем сервер
// http
//   .createServer((request, response) => {
//     if (request.url === "/user") {
//       response.write("users list");
//     } else if (request.url === "/posts") {
//       response.write("posts list");
//     } else if (request.url === "/user-posts") {
//       response.write("users posts list star");
//     }

//     response.end();
//   })
//   .listen(3000);


//homework 2.1
// let n = 20;

// simpleNum:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let m = 2; m < i; m++) { //проверяем, делится ли число
//     if (i % m == 0) continue simpleNum; // если не подходит, то берем следующее
//   }

//   console.log(i);
// }
