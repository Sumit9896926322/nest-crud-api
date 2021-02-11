import { IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UserDto{

    @IsOptional()
    id:number;

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