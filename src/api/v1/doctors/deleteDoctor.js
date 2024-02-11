const Doctors = require('../../../models/Doctors');
const { ObjectId } = require('mongoose').Types;

const deleteDoctor = async(req, res)=>{
    const id=req.params.id;
    console.log(id)
    const query = { _id: new ObjectId(id) };
    const result = await Doctors.deleteOne(query);
    res.send(result);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
}

module.exports = { deleteDoctor }