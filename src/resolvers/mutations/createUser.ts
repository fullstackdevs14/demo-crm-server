import { AuthResponse } from '../../models/interfaces/AuthResponse';

type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
};

function createUser(obj: any, args: CreateUserRequest): AuthResponse {
  return {
    user: {
      id: '2',
      name: args.name,
      roles: ['user'],
      email: args.email
    },
    token: args.password
  };
}

export default createUser;
