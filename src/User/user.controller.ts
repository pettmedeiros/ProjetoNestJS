import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseInterceptors } from "@nestjs/common";
import { CreateUserDto} from "./dto/create-user-dto";
import { UpdatePutUserDto } from "./dto/update-put-user.dto";
import { UpdatePatchUserDto } from "./dto/updatePatchUser.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";

@Controller('users')
export class UserController{

    constructor(private readonly userService: UserService){}

    @UseInterceptors(LogInterceptor) // estou interceptando e fazendo um log para calcular o tempo que levar para criar um usuario
    @Post()
    async create(@Body() data: CreateUserDto){
        return this.userService.create(data);
    }
    @UseInterceptors(LogInterceptor) // estou interceptando e fazendo um log para calcular o tempo que levar listar todos os usurios 
    @Get()
    async list(){
        return this.userService.list();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number){
        return this.userService.show(id);
    }

    @Put(':id')
    async update(@Body() data: UpdatePutUserDto, @Param('id', ParseIntPipe) id: number){
        return this.userService.update(id, data);

    }

    @Patch(':id')
    async updatePartial (@Body() data: UpdatePatchUserDto , @Param('id', ParseIntPipe) id: number){
        return this.userService.updatePartial(id, data);
        }
    

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.userService.delete(id);
    }

}