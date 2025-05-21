import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/User/user.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthService } from "./auth.service";

@Module({
    imports: [JwtModule.register({
        secret: process.env.JWT_SECRET // VAI PROCURAR O TOKEN NO ARQUIVO ENV
    }),
    forwardRef(() => UserModule), // usei para anular o ciclo de dependencia 
    PrismaModule
],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {


}