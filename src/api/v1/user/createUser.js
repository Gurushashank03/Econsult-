const { usersCollection } = require("../../../db/collectionDB");
const User = require("../../../models/Users");

// register the user details inside database
const createUser = async (req, res) => {
    const userData = req.body
    // Check if user with the provided email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        return res.send({ message: 'user already exists', _id: null })
      }
    const data = await User.create(userData)
    res.send(data)
}

module.exports = { createUser };