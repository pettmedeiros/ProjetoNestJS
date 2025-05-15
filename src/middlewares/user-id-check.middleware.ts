import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class UserIdCheckMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {

        console.log(`UserIdCheckMidleware`, `antes`)
        console.log(`URL: ${req.originalUrl}`);
        console.log(`METHOD: ${req.method}`);

        if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0){
        throw new BadRequestException("ID Inaválido!.");
        }

        console.log(`UserIdCheckMidleware`, `depois`)
        next();
    }
}
