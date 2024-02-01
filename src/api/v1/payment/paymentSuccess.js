const Payment = require("../../../models/Payment");

const paymentSuccess = async (req, res) => {
    const tranId = req.params.tranId;

        const result = await Payment.updateOne(
            { transactionId: tranId },
            { $set: { paidStatus: true } }
        );

        console.log("Update Result:", result);

        if (result.modifiedCount > 0) {
            res.redirect(`http://localhost:5173/dashboard/payment/success/${tranId}`);
        }
};

module.exports = { paymentSuccess };