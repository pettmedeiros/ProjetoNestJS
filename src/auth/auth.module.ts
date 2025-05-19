import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/User/user.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthService } from "./auth.service";

@Module({
    imports: [JwtModule.register({
        secret: `dg9f!A<!'/wA|U&9HyB204akhmYre}Ut` //chave para vlidar o token
    }),
    UserModule, 
    PrismaModule
],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {


}