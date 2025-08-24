/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUserRole = 'loggedInUser' | 'guest';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TUserRole;
};

export type TLoginUser = {
  email: string;
  password: string;
}

export interface UserModelType extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
