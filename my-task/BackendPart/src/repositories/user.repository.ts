// user.repository.ts
import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: juggler.DataSource) {
    super(User, dataSource);
  }
}
