// src/models/user.model.ts

import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
    unique: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    unique: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
