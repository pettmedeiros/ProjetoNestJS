import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword, minLength } from "class-validator";

export class CreateUserDto{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({ //serve para dizer como a senha deve ser 
        minLength: 6,
        minNumbers: 0,
        minLowercase: 0,
        minUppercase: 0,
        minSymbols: 0

    })
    password: string

    @IsOptional()
    @IsDateString()
    birthAt: string;
}