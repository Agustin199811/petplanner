import { In, IsNull, Repository } from "typeorm";
import { Role } from "../roles/entity/roles.entity";
import { User } from "./entity/users.entity";
import { TypeOrmConfig } from "../../common/config/database.config";
import { CreateUserDto } from "./dto/create-users.dto";
import { HttpException } from "../../common/utils/http.exception";

export class UsersService {
    private readonly userRepository: Repository<User>
    private readonly roleRepository: Repository<Role>;

    constructor() {
        this.userRepository = TypeOrmConfig.getRepository(User);
        this.roleRepository = TypeOrmConfig.getRepository(Role);
    }

    public async createUser(dtoRegister: CreateUserDto): Promise<User> {
        let roles: Role[] = [];
        if (dtoRegister.roles && dtoRegister.roles.length > 0 && typeof dtoRegister.roles[0] === 'object') {
            roles = dtoRegister.roles;
        } else if (dtoRegister.roles && dtoRegister.roles.length > 0) {
            roles = await this.roleRepository.findBy({ name: In(dtoRegister.roles) })
        }
        const newuser = this.userRepository.create({ ...dtoRegister, roles });
        return await this.userRepository.save(newuser);
    }

    public async findUserOneByEmail(email: string): Promise<User | null> {
        const user = await this.userRepository.findOne({ where: { email, deletedAt: IsNull() }, relations: ['roles'], });
        return user;
    }


    public async updateUser(id: string, updateData: Partial<CreateUserDto>): Promise<User> {
        const { roles, ...data } = updateData;
        const user = await this.userRepository.findOne({ where: { id }, relations: ['roles'] });
        if (!user) {
            throw new HttpException(400, "User not found");
        }
        let updateRoles: Role[] = [];
        if (updateData.roles && updateData.roles.length > 0 && typeof updateData.roles[0] === 'object') {
            updateRoles = updateData.roles;
        } else if (updateData.roles && updateData.roles.length > 0) {
            updateRoles = await this.roleRepository.findBy({ name: In(updateData.roles) })
        }
        Object.assign(user, data);
        return await this.userRepository.save(user);

    }

}