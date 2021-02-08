import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class catDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsString()
    breed: string;
}