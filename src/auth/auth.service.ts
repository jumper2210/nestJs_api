import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private authService: PrismaService) {}
  signUp(dto: AuthDto) {
    return { msg: 'test signup' };
  }
  singIn() {
    return { msg: 'test login' };
  }
}
