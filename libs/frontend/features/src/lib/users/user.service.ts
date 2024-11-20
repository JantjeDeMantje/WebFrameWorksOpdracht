import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User, UserRole } from './user.model';
import { HttpClient } from '@angular/common/http';
import { IUserInfo } from '../../../../../shared/api/src/lib/models/user.interface';
import { environment } from '../../../../../shared/util-env/src/lib/environment';
import { ApiResponse } from '@avans-nx-workshop/shared/api';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly users: User[] = [
        // {
        //   id: 0,
        //   firstName: 'John',
        //   lastName: 'Doe',
        //   emailAdress: 'johndoe@mail.com',
        //   role: UserRole.admin,
        // },
        // {
        //   id: 1,
        //   firstName: 'Jane',
        //   lastName: 'Doe',
        //   emailAdress: 'janedoe@mail.com',
        //   role: UserRole.guest,
        // },
        // {
        //   id: 2,
        //   firstName: 'Dick',
        //   lastName: 'Rich',
        //   emailAdress: 'dickrich@mail.com',
        //   role: UserRole.editor,
        // },
    ];

    constructor(private http: HttpClient) {
        console.log('Service constructor aangeroepen');
    }

    getUsersAsync(): Observable<IUserInfo[]> {
        console.log('GetUsersAsync Aangeroepen.');

        return this.http
            .get<ApiResponse<any>>(environment.dataApiUrl + '/user')
            .pipe(map((response) => response.results));
    }

    getUserByIdAsync(id: number): Observable<IUserInfo> {
      console.log('getUserByIdAsync aangeroepen');

      return this.http
        .get<ApiResponse<any>>(environment.dataApiUrl + `/user/${id}`)
        .pipe(map((response) => response.results[0]));
    }
}
