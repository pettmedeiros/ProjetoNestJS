import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDto } from "./dto/update-put-user.dto";
import { UpdatePatchUserDto } from "./dto/updatePatchUser.dto";

@Injectable()
export class UserService {

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
        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: number, {email, name, password, birthAt}: UpdatePutUserDto){

        console.log({email, name, password, birthAt});

        if (!birthAt){

        }

        return this.prisma.user.update({
            data: {email, name, password, birthAt: birthAt ? new Date(birthAt) : null},
            where: {
                id
            }
        });
    }

    async updatePartial(id: number, {email, name, password, birthAt} : UpdatePatchUserDto){

        const data: any = {};

        if (birthAt) {
            data.birthAt = new Date (birthAt);
        }

        if (email) {
            data.email = new Date (email);
        }

        if (name) {
            data.name = new Date (name);
        }

        if (password) {
            data.password = new Date (password);
        }
        
        return this.prisma.user.update({
            data, 
            where: {
                id
            }
        });
    }    
}