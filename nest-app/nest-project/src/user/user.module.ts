import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwtstrategy';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository]),
  PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.register({
    secret:'simplesecretfornow',
    signOptions: { expiresIn: '3600s' },
  })],
 
  providers: [UserService,JwtStrategy],
  controllers: [UserController],
  exports:[PassportModule,JwtStrategy]
})
export class UserModule {}
