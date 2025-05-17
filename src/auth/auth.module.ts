import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/User/user.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [JwtModule.register({
        secret: `dg9f!A<!'/wA|U&9HyB204akhmYre}Ut`
    }),
    UserModule, 
    PrismaModule
],
    controllers: [AuthController]
})
export class AuthModule {


}