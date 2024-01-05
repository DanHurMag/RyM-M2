const axios = require("axios");
const { urlCharacterId } = require("../utils/reusable");
const { headers } = require("../utils/reusable")

// async await
async function getCharById(req, res) {
    try {
        const { id } = req.params;
        const result = await axios(urlCharacterId(id));
        const character = result.data
        if (character.name) {
            const personaje = {
                id: id,
                name: character.name,
                status: character.status,
                gender: character.gender,
                origin: character.origin,
                location: character.location,
                image: character.image,
            };
            res.json(personaje);
        } else {
            res.satus(404).send("Character not found");
        }
    } catch (err) {
        res.status(500).send(err);
    }
};


//con express

// function getCharById(req, res) {
//     const { id } = req.params;
//     axios(urlCharacterId(id))
//         .then((res) => res.data)
//         .then((character) => {
//             if (character.name) {
//                 const personaje = {
//                     id: id,
//                     name: character.name,
//                     status: character.status,
//                     gender: character.gender,
//                     origin: character.origin,
//                     location: character.location,
//                     image: character.image,
//                  };
//                 res.json(personaje);
//             } else {
//                 res.status(404).send("Character not found");
//             }
//         });
//         .catch((err) => {
//             res.status(500).send(err);
//         });
// }

module.exports = getCharById;