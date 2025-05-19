import { Body, Controller, Headers, Post, Req, Request, UseGuards } from "@nestjs/common";
import { AuthLoginDto } from "./auth-login.dto";
import { AuthRegisterDto } from "./auth-register.dto";
import { AuthForgetDto } from "./auth-forget.dto";
import { AuthResetDto } from "./auth-reset.dto";
import { UserService } from "src/User/user.service";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { User } from "src/decorators/user.decorator";

@Controller('auth')
export class AuthController{

    constructor( 
        private readonly userService: UserService,
        private readonly authService: AuthService
    ){}

    @Post('login')
    async login(@Body() body: AuthLoginDto){
        const { email, password } = body; //destructuring do DTO e passar explicitamente
        return this.authService.login(email, password);
    }

    @Post('register')
    async register(@Body() body: AuthRegisterDto){
        return this.userService.register(body);
    }

    @Post('forget')
    async forget(@Body() body: AuthForgetDto) {
        const { email } = body; //destructuring do DTO e passar explicitamente
        return this.authService.forget(email); 
    }

    @Post('reset')
    async reset(@Body() body : AuthResetDto) {
        const { password, token } = body; // destructuring do DTO e passar explicitamente
        return this.authService.reset(password, token); 
    }


    @UseGuards(AuthGuard)
    @Post('me')
    async me(@User('email') user){  
         
        return {user};  // verifica os dados do token e verifica tbm os dados do banco de dados 
    } 
} 