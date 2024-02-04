const Appointment = require("../../../models/Appointment")

const getAppointment = async(req,res)=>{
    const email = req.params.email
    const query = {email: email}
    const data = await Appointment.find(query)
    res.send(data)
}

module.exports = {getAppointment}