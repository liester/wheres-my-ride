import { Injectable } from '@nestjs/common';
import { UserType } from './UserType';
import { UserStatus } from './UserStatus';
import moment from 'moment';

@Injectable()
export class AppService {
  users: UserType[] = [];

  getUsers(): UserType[] {
    return this.users;
  }

  addUsers(user: UserType): UserType[] {
    user.id = Math.floor(Math.random() * 1000000);
    user = {
      ...user,
      status: UserStatus.CHECKED_OUT,
    };
    this.users.push(user);
    return this.users;
  }

  checkIn(userId: number): UserType {
    const user = this.users.filter((user) => user.id == userId)[0];
    if (user) {
      user.status = UserStatus.CHECKED_IN;
      user.updatedAt = moment().toDate();
    }
    return user;
  }

  checkOut(userId: number): UserType {
    const user = this.users.filter((user) => user.id == userId)[0];
    if (user) {
      user.status = UserStatus.CHECKED_OUT;
      user.updatedAt = moment().toDate();
    }
    return user;
  }
}
