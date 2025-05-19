import { BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator((filter: string | undefined, context: ExecutionContext) => { //O tipo string | undefined permite o parâmetro opcional.

    const request = context.switchToHttp().getRequest();

    if (request.user){ //Verifica se tem usuário autenticado
        if (filter){ // verifica se tem filtro, retorna só aquela propriedade do user

            return request.user[filter];
        } else{
            return request.user;
        }
    } else {
        throw new BadRequestException("Usuário não encotrando no Request. Use o AuthGuard para obter o usuário.");
    }
    },
);
