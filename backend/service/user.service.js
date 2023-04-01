const User = require("../models/user.model");

exports.registrationService = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};
