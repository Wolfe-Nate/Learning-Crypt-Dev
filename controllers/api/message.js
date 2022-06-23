// const message = require("express").Router();
// const fs = require("fs");
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");

// const messages = require("");

// function newMessage(body, messages) {
//   const message = body;

//   const news = body;
//   message.id = uuidv4();
//   console.log("this is the spot" + news + "  the next  " + message.id);

//   message.push(message);
//   console.log("newMessage " + message);

//   fs.writeFileSync(
//     path.join(__dirname, "../db/db.json"),
//     JSON.stringify(messages, null, 2)
//   );
//   return message;
// }

// function validateMessage(message) {
//   if (!message.text || typeof message.text !== "string") {
//     return false;
//   }
//   return true;
// }

// message.get("/", (req, res) => {
//   fs.readFile("./db/db.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const messageReturn = JSON.parse(data);
//       // console.log(noteReturn);
//       return res.json(messageReturn);
//     }
//   });
// });

// message.post("/", (req, res) => {
//   console.log("message functions");

//   // req.body.id = notes.length.toString();
//   if (validateMessage(req.body)) {
//     const message = newMessage(req.body, messages);

//     res.json(message);
//   }
// });

// module.exports = message;
