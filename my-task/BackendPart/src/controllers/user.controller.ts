import {repository} from '@loopback/repository';
import {post, requestBody} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  // Kayıt işlemi
  @post('/register')
  async register(@requestBody() user: User) {
    // Şifreyi hashle
    user.password = await bcrypt.hash(user.password, 12);

    // Kullanıcıyı veritabanına kaydet
    const createdUser = await this.userRepository.create(user);
    return createdUser;
  }

  // Giriş işlemi
  @post('/login')
  async login(@requestBody() credentials: {email: string, password: string}) {
    const user = await this.userRepository.findOne({
      where: {email: credentials.email},
    });

    if (user && (await bcrypt.compare(credentials.password, user.password))) {
      const token = jwt.sign({id: user.id}, 'your_secret_key', {expiresIn: '1h'});
      return {message: 'Login successful', token};
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
