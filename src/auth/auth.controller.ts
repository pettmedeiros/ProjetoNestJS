import { Body, Controller, Post } from "@nestjs/common";
import { AuthLoginDto } from "./auth-login.dto";
import { AuthRegisterDto } from "./auth-register.dto";
import { AuthForgetDto } from "./auth-forget.dto";
import { AuthResetDto } from "./auth-reset.dto";
import { UserService } from "src/User/user.service";
import { AuthService } from "./auth.service";

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


    @Post('me')
    async me(@Body() body){
        return this.authService.checkToken(body.token)
    }
}