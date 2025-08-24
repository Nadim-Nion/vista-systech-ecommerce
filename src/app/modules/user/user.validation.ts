import { z } from 'zod';
import { TUserRole } from './user.interface';
import { USER_ROLES } from './user.constant';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ error: 'Name is required' })
      .min(1, 'Name cannot be empty'),
    email: z
      .string({ error: 'Email is required' })
      .email('Invalid email format'),
    password: z
      .string({ error: 'Password is required' })
      .min(6, 'Password must be at least 6 characters'),
    role: z
      .enum(USER_ROLES as [TUserRole, ...TUserRole[]], {
        error: 'Role is required',
      })
      .default('guest'),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};
