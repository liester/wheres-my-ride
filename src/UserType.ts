import { UserStatus } from './UserStatus';

export interface UserType {
  firstName: string;
  lastName: string;
  status: UserStatus;
  updatedAt: Date;
  id: number;
}
