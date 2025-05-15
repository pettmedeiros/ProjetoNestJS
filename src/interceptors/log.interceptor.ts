import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Observable, tap } from "rxjs";

export class LogInterceptor implements NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>> {
        
        const dt = Date.now();

        return next.handle().pipe(tap(() => {

            const request = context.switchToHttp().getRequest();

            console.log(`URL: ${request.url}`);       
            console.log(`METOD: ${request.method}`);      
            console.log(`Execução levou: ${Date.now() - dt} milisengundos.`);

        }));
    }
}