import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDB(req.query);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'All Users are retrieved successfully',
    data: result,
  });
});

const generateGuestToken = catchAsync(async (req, res) => {
  const result = await UserServices.createGuestToken();

  const { guestToken } = result;

  res.cookie('guestToken', guestToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  });

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Guest token generated successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getAllUsers,
  generateGuestToken,
  loginUser
};
