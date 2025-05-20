import { IsDateString, IsEmail, IsEnum, IsOptional, IsString, IsStrongPassword, minLength } from "class-validator";
import { Role } from "src/enums/role.enum";

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

    @IsOptional()
    @IsEnum(Role)
    role: number;
}