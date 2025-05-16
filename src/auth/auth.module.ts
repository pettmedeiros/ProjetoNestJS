import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: `dg9f!A<!'/wA|U&9HyB204akhmYre}Ut`
    })]
})
export class AuthModule {


}