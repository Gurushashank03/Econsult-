const bookAppointment = require("../../../models/BookAppointment");
const Doctors = require("../../../models/Doctors")
const { ObjectId } = require('mongoose').Types;

const getDoctorAppointment = async(req,res)=>{
    const email = req.params.email
    const query = { email: email}
    // console.log(query)
    const data = await Doctors.findOne(query)
    // console.log(data)
    const id = data?._id
    // console.log(id)
    const appointmentQuery={_id:new ObjectId(id)};
    const appointments = await bookAppointment.find(appointmentQuery)
    res.send(appointments)
}

module.exports = {getDoctorAppointment}