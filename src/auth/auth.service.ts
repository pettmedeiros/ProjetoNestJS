import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Prisma, PrismaClient, User } from 'generated/prisma';
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "src/User/user.service";
import { AuthRegisterDto } from "./auth-register.dto";

@Injectable()
export class AuthService{

    private issuer = 'login';
    private audience = 'users';
    constructor(
        private readonly jwtService: JwtService, 
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ){}

     createToken(user: User){ //criando token para login
       return{
        accessToken: this.jwtService.sign({
        id: user.id,
        name: user.name,
        email: user.email,
       }, {
        expiresIn: "7 days",
        subject: String(user.id),
        issuer: 'this.issuer',
        audience: 'this.audience'
       })
     }
    };

    checkToken(token : string){

        try{ 
            const data = this.jwtService.verify(token, {

            issuer: 'this.issuer',
            audience: 'this.audience'
        });

        return data;
    } catch(e){
            throw new BadRequestException(e);
        }
    } 

    IsValidToken(token: string){
        try{
            this.checkToken(token);
            return true;
        } catch (e){
            return false;
        }

    }
    
    async login(email: string, password: string){
        const user = await this.prisma.user.findFirst({
            where: {
                email,
                password
            }
        }); 

        if (!user) {
        throw new UnauthorizedException('E-mail ou senha incorrertos"');
        }

        return this.createToken(user);
    }

    async forget(email: string){
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });

        if (!user) {
            throw new UnauthorizedException('E-mail esta incorrerto"');
        }
        // vai enviar email .. 
        return true; 
    }

    async reset(password: string, token: string){

        // validar o token

        const id = 0 ;
        const user = await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                password, 
            }
        });

        return this.createToken(user); 
    }

    async register(data:AuthRegisterDto){

        const user = await this.userService.create(data);
    }
}