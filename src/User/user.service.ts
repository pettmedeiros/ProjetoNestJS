import { Injectable, NotFoundException, Param, ParseIntPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDto } from "./dto/update-put-user.dto";
import { UpdatePatchUserDto } from "./dto/updatePatchUser.dto";
import { Role } from "src/enums/role.enum";

@Injectable()
export class UserService {
    [x: string]: any;

    constructor(private readonly prisma: PrismaService){

    }

    async create({email, name, password}: CreateUserDto){    

        return await this.prisma.user.create({
            data: {
                email,
                name,
                password
            },
       })

    }
    
    async list(){

        return this.prisma.user.findMany();
    }

    async show(id: number){

        await this.exists(id);

        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: number, {email, name, password, birthAt, role}: UpdatePutUserDto){

        await this.exists(id); // chamada do metodo para verificar se o usuario existe 

        console.log({email, name, password, birthAt});

        if (!birthAt){

        }

        return this.prisma.user.update({
            data: {email, name, password, birthAt: birthAt ? new Date(birthAt) : null, role},
            where: {
                id
            }
        });
    }

    async updatePartial(id: number, {email, name, password, birthAt, role} : UpdatePatchUserDto){

        await this.exists(id); // chamada do metodo para verificar se o usuario existe 

        const data: any = {};

        if (birthAt) {
            data.birthAt = new Date (birthAt);
        }

        if (email) {
            data.email = email;
        }
        
        if (name) {
            data.name = name;
        }
        
        if (password) {
            data.password = password;
        }

        if (role) {
            data.role = role;
        }
        
        return this.prisma.user.update({
            data, 
            where: {
                id
            }
        });
    }    

    async delete (id: number){

        await this.exists(id); // chamada do metodo para verificar se o usuario existe 

        return this.prisma.user.delete({
            where: { id },
        });
    }

    async exists (id: number){ // criando método para verificar se id existe
        if (!await this.prisma.user.count({
            where: {
                id
            }
        })){
            throw new NotFoundException(`O usuario com esse ${id} nao existe!`);
        }
    }
}