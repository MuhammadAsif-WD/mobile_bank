const { registrationService } = require("../service/user.service");

exports.registration = async (req, res) => {
  try {
    const user = await registrationService(req.body);
    console.log(user)
    res.status(200).json({
      status: "success",
      message: "Successfully registration",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error,
    });
  }
};
