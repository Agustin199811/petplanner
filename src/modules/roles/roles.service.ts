import { Repository } from "typeorm";
import { TypeOrmConfig } from "../../common/config/database.config";
import { Role } from "./entity/roles.entity";

export class RolesService {
    private readonly roleRepository: Repository<Role>;

    constructor() {
        this.roleRepository = TypeOrmConfig.getRepository(Role);
    }


    public async findRoleOneByName(name: string): Promise<Role | null> {
        const role = await this.roleRepository.findOneBy({ name });
        return role;
    }
}