import status from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { USER_SEARCHABLE_FIELDS } from './user.constant';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.mode';
import * as crypto from 'crypto';
import config from '../../config';
import { generateJWTToken } from './user.utils';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .search(USER_SEARCHABLE_FIELDS)
    .filter()
    .sort()
    .paginate()
    .fieldLimiting();

  const result = await userQuery.modelQuery;
  const meta = await userQuery.countTotal();

  return { meta, result };
};

const createGuestToken = async () => {
  const guestToken = crypto.randomBytes(64).toString('hex');

  return { guestToken: guestToken };
};

const loginUser = async (payload: TLoginUser) => {
  const { email, password } = payload;

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new AppError(status.NOT_FOUND, 'User not found');
  }

  const isPasswordMatched = await User.isPasswordMatched(
    password,
    user.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(status.UNAUTHORIZED, 'Password is incorrect');
  }

  const jwtPayload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  const token = generateJWTToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {token};
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  createGuestToken,
  loginUser,
};
