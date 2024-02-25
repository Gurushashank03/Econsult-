
const User = require("../../../models/Users");


const getUsers = async (req, res) => {
    const query = { role: "user"}
    const data = await User.find(query);
    res.send(data)
    // console.log(data)
}

const getUser = async (req, res) => {
    const query = { email: req?.params?.email }
    // console.log(query)
    const data = await User.find(query);
    res.send(data)
}

module.exports = { getUsers, getUser };