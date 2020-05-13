import { AuthResponse } from '../../models/interfaces/AuthResponse';

type LoginInput = {
  email: string;
  password: string;
};

function login(obj: any, args: LoginInput): AuthResponse {
  return {
    user: {
      id: '1',
      name: 'Test user',
      roles: ['user'],
      email: 'abc@test.com'
    },
    token: 'Test token'
  };
}

export default login;
