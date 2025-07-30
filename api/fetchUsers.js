// fetchUsers.js

const axios = require("axios");

const exposedUrl = "http://34.133.61.14/";

axios
  .get(exposedUrl)
  .then((response) => {
    console.log("Users data from external API:");
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching users:", error.message);
  });
