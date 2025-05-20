import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { CreateUserDto} from "./dto/create-user-dto";
import { UpdatePutUserDto } from "./dto/update-put-user.dto";
import { UpdatePatchUserDto } from "./dto/updatePatchUser.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/enums/role.enum";
import { RoleGuard } from "src/auth/guards/role.guard";
import { AuthGuard } from "src/auth/guards/auth.guard";

@UseGuards(AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController{

    constructor(private readonly userService: UserService){}

    @Roles(Role.admin) // apenas o usuário administrador pode ter acesso 
    @UseInterceptors(LogInterceptor) // estou interceptando e fazendo um log para calcular o tempo que levar para criar um usuario
    @Post()
    async create(@Body() data: CreateUserDto){
        return this.userService.create(data);
    }

    @Roles(Role.admin) // apenas o usuário administrador pode ter acesso
    @UseInterceptors(LogInterceptor) // estou interceptando e fazendo um log para calcular o tempo que levar listar todos os usurios 
    @Get()
    async list(){
        return this.userService.list();
    }

    @Roles(Role.admin) // apenas o usuário administrador pode ter acesso
    @Get(':id')
    async show(@ParamId() id: number){ // usei @ParamID() como um exemplo de decorator personalizado, o que permite um código menor
        return this.userService.show(id);
    }

    @Roles(Role.admin) // apenas o usuário administrador pode ter acesso
    @Put(':id')
    async update(@Body() data: UpdatePutUserDto, @Param('id', ParseIntPipe) id: number){ //aqui deixei o @Param() normal, o que fica maior o código
        return this.userService.update(id, data);

    }

    @Roles(Role.admin) // apenas o usuário administrador pode ter acesso
    @Patch(':id')
    async updatePartial (@Body() data: UpdatePatchUserDto , @Param('id', ParseIntPipe) id: number){
        return this.userService.updatePartial(id, data);
        }
    
    @Roles(Role.admin) // apenas o usuário administrador pode ter acesso
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.userService.delete(id);
    }

}