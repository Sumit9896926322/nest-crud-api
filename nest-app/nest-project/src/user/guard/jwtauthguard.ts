import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class jwtauthguard extends AuthGuard('jwt'){};