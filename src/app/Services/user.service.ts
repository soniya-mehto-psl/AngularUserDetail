import { EventEmitter } from '@angular/core';

export class UserService{
    users = [
        { name: 'Hansika', job: 'HR', gender: 'Female', country: 'India', age: 25, avatar: 'https://cdn.onlinewebfonts.com/svg/img_87237.png'},
        { name: 'Soniya', job: 'Developer', gender: 'Female', country: 'India', age: 26, avatar: 'https://cdn.onlinewebfonts.com/svg/img_87237.png' },
        { name: 'Rishita', job: 'AgniVeer', gender: 'Female', country: 'India', age: 27, avatar: 'https://cdn.onlinewebfonts.com/svg/img_87237.png' },
        { name: 'Jyoti', job: 'Developer', gender: 'Female', country: 'India', age: 28, avatar: 'https://cdn.onlinewebfonts.com/svg/img_87237.png' }
    ];

    onShowDetailsClicked = new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>();

    showUserDetails(user: { name: string, job: string, gender: string, country: string, age: number, avatar: string }){
        this.onShowDetailsClicked.emit(user);
    }
}