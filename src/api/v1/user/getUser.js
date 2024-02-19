const { usersCollection } = require("../../../db/collectionDB");
const User = require("../../../models/Users");


const getUsers = async (req, res) => {
    const query = { role: "user"}
    const data = await User.find(query);
    res.send(data)
    console.log(data)
}

module.exports = { getUsers };