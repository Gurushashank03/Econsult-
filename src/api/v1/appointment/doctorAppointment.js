const bookAppointment = require("../../../models/BookAppointment");
const Doctors = require("../../../models/Doctors")
const { ObjectId } = require('mongoose').Types;

const getDoctorAppointment = async(req,res)=>{
    const email = req.params.email
    const query = { email: email}
    const data = await Doctors.findOne(query)
    const id = data?._id
    const appointmentQuery={_id:new ObjectId(id)};
    const appointments = await bookAppointment.find(query)
    res.send(appointments)
}

module.exports = {getDoctorAppointment}