import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { UserService } from "src/User/user.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {}

    async canActivate(context: ExecutionContext){

        const request = context.switchToHttp().getRequest();
        const {authorization} = request.headers;
        try{
            const data = this.authService.checkToken((authorization ?? '').split(' ')[1]);
            request.tokenPayload = data;

            request.user = await this.userService.show(data.id); // vai no banco carregar os dados e colocar dentro do user 
            return true;

        } catch(e){
            return false;
        }

    }
}