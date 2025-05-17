import { IsEmail } from "class-validator";

export class AuthForgetDto {
 // validando recuperar de senha por email 
@IsEmail()
email: string;

}