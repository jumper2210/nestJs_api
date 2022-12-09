import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'test login' };
  }
  signUp() {
    return { msg: 'test signup' };
  }
}
