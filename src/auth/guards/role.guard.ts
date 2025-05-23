import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { UserService } from "src/User/user.service";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "src/decorators/roles.decorator";
import { Role } from "src/enums/role.enum";

@Injectable()
export class RoleGuard implements CanActivate{

    constructor(
        private readonly reflector: Reflector
    ) {}

    async canActivate(context: ExecutionContext){

        const requeridRoles =  this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [context.getHandler(), context.getClass()])

        if(!requeridRoles){
            return true;
        }

        const {user} = context.switchToHttp().getRequest();

        const rolesFilted = requeridRoles.filter(role => role === user.role) // estou filtrando e verificado se essa regra é igual a do usuário 

        if (rolesFilted.length > 0){
            return true;
        }else {
            return false;
        }
    }
}