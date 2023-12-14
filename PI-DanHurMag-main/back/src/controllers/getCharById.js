const axios = require("axios");
const { urlCharacterId } = require("../utils/reusable");

function getCharById(res, id) {
    axios(urlCharacterId(id))
        .then((res) => res.data)
        .then((character) => console.log(character));
}

module.exports = getCharById;