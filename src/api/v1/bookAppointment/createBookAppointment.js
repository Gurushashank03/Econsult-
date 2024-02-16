const bookAppointment = require("../../../models/BookAppointment");

// register the user details inside database
const createBookAppointment = async (req, res) => {
    const appointmentData = req.body
    console.log('req send',appointmentData);
    // Check if user with the provided email already exists
    const checkAppointmentAvailability = await bookAppointment.findOne({ doctor_id: appointmentData.doctor_id,timing_slot:appointmentData.timing_slot,date:appointmentData.date });
    if (checkAppointmentAvailability) {
       return res.send({ message: 'Appointment already exists', _id: null })
     }
    const data = await bookAppointment.create(appointmentData)
    console.log('response send',data);
    res.send(data._id)
}

module.exports = { createBookAppointment };