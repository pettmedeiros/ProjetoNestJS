import { SetMetadata } from "@nestjs/common";
import { Role } from "src/enums/role.enum";

export const ROLES_KEY = "roles";
export const Roles = (...role: Role[]) => SetMetadata(ROLES_KEY, role); //A ideia é associar um array de papéis (roles) à uma rota ou controller para controle de acesso.

//...roles: Role[] — captura todos os papéis passados.
//SetMetadata('roles', roles) — salva esses papéis no metadado da rota com a chave 'roles'.

