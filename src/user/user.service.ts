import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const { username, email, password } = createUserInput;
    const input = {
      // todo: implement password hashing
      hashedPassword: createUserInput.password,
      username,
      email,
    };
    try {
      const newUser = await this.userRepository.create(input);
      return await this.userRepository.save(newUser);
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new BadRequestException('username exists');
      } else throw new InternalServerErrorException();
    }
  }

  findAll() {

    return `This action returns all user`;
  }

  findOne(uuid: string) {
    return this.userRepository.findOne({
      where: {
        uuid
      },
      relations: ['events']
    })
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
