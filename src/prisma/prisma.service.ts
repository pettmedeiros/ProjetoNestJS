import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";

@Injectable ()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy  {

    async onModuleInit() {
      await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
      }  

     /* async enableShutdownHooks(app: INestApplication) {
        // opcional — se quiser interceptar o beforeExit (não obrigatório no Prisma 6+)
        this.$on('beforeExit', async () => {
          await app.close();
        });*/
    }
