"use strict";

const { default: axios } = require("axios");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */

  bootstrap(/* { strapi } */) {
    var io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });
    io.on("connection", function (socket) {
      socket.on("join", async ({ username, adId, callerId }) => {
        console.log("user connected");
        // console.log("username is ", username);
        console.log(adId);
        console.log(callerId);

        let seller = "";
        await axios
          .get("http://localhost:1337/api/ads/" + adId + "?populate=*")
          .then(async (e) => {
            // res = e.json();
            // console.log(e.data.data.attributes.seller.data[0].id);
            seller = e.data.data.attributes.seller.data[0].id;
            // socket.emit("roomData", { done: "true" });
          })
          .catch((e) => {
            if (e.message == "Request failed with status code 400") {
              // socket.emit("roomData", { done: "existing" });
            }
          });


        let isCallerTheSeller = false;
        if (seller === callerId) {
          isCallerOwner = true;
        }
        if (!isCallerTheSeller) {
          let chatRoomExist = false;
          let chatRoomId = 0;
          await axios
            .get("http://localhost:1337/api/chat-rooms?populate=*&filters[ad][id][$eq]=" + adId + "&filters[seller][id][$eq]=" + seller + "&filters[buyer][id][$eq]=" + callerId)
            .then(async (e) => {
              console.log(e.data);
              if (e.data.data.length != 0) {
                chatRoomExist = true;
                chatRoomId = e.data.data[0].id;
              }

            })
            .catch((e) => {
              if (e.message == "Request failed with status code 400") {
                // socket.emit("roomData", { done: "existing" });
              }
            });

          if (chatRoomExist === false) {
            let strapiData = {
              data: {
                ad: [adId],
                seller: [seller],
                buyer: [callerId],
              },
            };


            await axios
              .post("http://localhost:1337/api/chat-rooms", strapiData)
              .then(async (e) => {
                // console.log(e.data);
                chatRoomId = e.data.data.id;
                // socket.emit("roomData", { done: "true" });
              })
              .catch((e) => {
                if (e.message == "Request failed with status code 400") {
                  // socket.emit("roomData", { done: "existing" });
                }
              });

          }

          socket.join(chatRoomId);
          socket.emit("welcome", {
            user: "bot",
            text: `${username}, Welcome to the group chat`,
            userData: username,
          });
          socket.emit("roomData", { done: "true" });

          //   let strapiData = {
          //     data: {
          //       users: username,
          //       socketid: socket.id,
          //     },
          //   };
          //   await axios
          //     .post("http://localhost:1337/api/active-users", strapiData)
          //     .then(async (e) => {
          //       socket.emit("roomData", { done: "true" });
          //     })
          //     .catch((e) => {
          //       if (e.message == "Request failed with status code 400") {
          //         socket.emit("roomData", { done: "existing" });
          //       }
          //     });
          // } else {
          //   console.log("e no work");
        }
      });
      socket.on("sendMessage", async (data) => {
        let strapiData = {
          data: {
            user: data.user,
            message: data.message,
          },
        };
        var axios = require("axios");
        await axios
          .post("http://localhost:1337/api/messages", strapiData)
          .then((e) => {
            socket.broadcast.to("group").emit("message", {
              user: data.username,
              text: data.message,
            });
          })
          .catch((e) => console.log("error", e.message));
      });
      socket.on("kick", (data) => {
        io.sockets.sockets.forEach((socket) => {
          if (socket.id === data.socketid) {
            socket.disconnect();
            socket.removeAllListeners();
            return console.log("kicked", socket.id, data.socketid);
          } else {
            console.log("Couldn't kick", socket.id, data.socketid);
          }
        });
      });
    });
  },
};