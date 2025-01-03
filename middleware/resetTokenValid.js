import authModel from "../models/authModel.js";
import resetPassword from "../models/resetPasswordModel.js";
import pkg from 'mongoose';
import { sendError } from "../utilitis/responseHandler.js";

const { isValidObjectId } = pkg;

export const isResetTokenValid = async (req, res, next) => {
  const { uniqueToken, id } = req.query;
  if (!uniqueToken || !id) return sendError(res, "invalid  request");

  if (!isValidObjectId(id)) return sendError(res, "invalid user Id");

  const user = await authModel.findById(id);
  if (!user) return sendError(res, "user not found");

  const userResetToken = await resetPassword.findOne({ userId: user._id });
  if (!userResetToken)
    return sendError(res, "invalid request , missing parameter");

  const isValid = await userResetToken.compareUniqueToken(uniqueToken);
  if (!isValid) return sendError(res, "Reset link is not valid");

  req.user = user;
  next();
};
