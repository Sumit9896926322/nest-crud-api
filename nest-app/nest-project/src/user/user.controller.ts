import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import {jwtauthguard} from './guard/jwtauthguard';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}
    
    @Post('/signup')
  
    addUser(@Body(ValidationPipe) userDto:UserDto){
        return this.userService.addUser(userDto);
    }

 
    @Post('/login')
    signIn(@Body(ValidationPipe) userDto:UserDto){
        return this.userService.validateUserPassword(userDto);
    }


    @Get('/resource')
    @UseGuards(jwtauthguard)
    resource( @Req() req
    ):string{
        console.log(req);
        return 'Validated User';
    }
}
