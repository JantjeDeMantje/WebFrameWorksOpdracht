import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      firstName: 'John',
      lastName: 'Doe',
      emailAdress: 'johndoe@mail.com',
      role: UserRole.admin,
    },
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      emailAdress: 'janedoe@mail.com',
      role: UserRole.guest,
    },
    {
      id: 2,
      firstName: 'Dick',
      lastName: 'Rich',
      emailAdress: 'dickrich@mail.com',
      role: UserRole.editor,
    },
  ];

  constructor() {
    console.log('Service constructor aangeroepen');
  }

  getUsers(): User[] {
    console.log('getUsers aangeroepen');
    return this.users;
  }

  getUsersAsObservable(): Observable<User[]> {
    console.log('getUsersAsObservable aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    return of(this.users);
  }

  getUserById(id: number): User {
    console.log('getUserById aangeroepen');
    return this.users.filter((user) => user.id === id)[0];
  }
}
