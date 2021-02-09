import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UserDto{
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username:string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message:"Password should contain special characters"})
    password:string;
}