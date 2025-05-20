import { forwardRef, MiddlewareConsumer, Module, NestModule, Request, RequestMethod } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService} from "./user.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserIdCheckMiddleware } from "src/middlewares/user-id-check.middleware";
import path from "path";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [PrismaModule, forwardRef(() => AuthModule)],  // se criou um ciclo de dependencia, usei forwardRef para adiar a resolução 
                                                            //dessa dependência até que o NestJS tenha carregado tudo.
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule implements NestModule{

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: `users/:id`,
            method: RequestMethod.ALL
         })
    
    }
}