import QueryBuilder from '../../builder/QueryBuilder';
import { USER_SEARCHABLE_FIELDS } from './user.constant';
import { TUser } from './user.interface';
import { User } from './user.mode';

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

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
};
