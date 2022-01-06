import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'Shivam',
        password: 'shivam1234',
      },
      {
        userId: 2,
        username: 'noname',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'kapil',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
