const { usersCollection } = require("../../../db/collectionDB");
const User = require("../../../models/Users");


const getUsers = async (req, res) => {
    const data = await User.find();
    console.log(req.cookies)
    res.send(data)
}

module.exports = { getUsers };