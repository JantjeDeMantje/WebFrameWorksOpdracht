import { Component } from '@angular/core';
import { IUserInfo, UserGender, UserRole } from '@avans-nx-workshop/shared/api';


@Component({
    selector: 'avans-nx-workshop-user-list',
    templateUrl: './user-list.component.html',
    styles: []
})
export class UserListComponent {

    users: IUserInfo[] = [
        { 
            _id: '1',
            name: 'John Doe',
            emailAddress: 'johndoe@mail.com',
            profileImgUrl: 'https://via.placeholder.com/150',
            role: UserRole.Admin,
            gender: UserGender.Male,
            isActive: true,
            password: 'password'
        },
        { 
            _id: '2',
            name: 'Jane Doe',
            emailAddress: 'janedoe@mail.com',
            profileImgUrl: 'https://via.placeholder.com/150',
            role: UserRole.Guest,
            gender: UserGender.Female,
            isActive: true,
            password: 'password'
        }
    ] 
}
