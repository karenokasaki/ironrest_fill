const [collectionName, data] = require("./data");
const axios = require("axios");

function fillAPI() {
  data.map(async (currentElement) => {
    await axios.post(
      `https://ironrest.herokuapp.com/${collectionName}`,
      currentElement
    );
  });
}

fillAPI();
