import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { User } from './user.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userLogin: string
  userPassword: string
  userEmail: string
  userId:number;

  formButton: boolean = true;

  users: Array<IUser> = []

  constructor() { }

  ngOnInit(): void {
  }

  addUser():void {
    // if (this.userLogin) {
    //   if (this.userPassword) {
    //     if (this.userEmail) {
          const user: IUser = new User(this.userLogin, this.userPassword, this.userEmail)
          this.users.push(user)
          console.log(this.users)
          this.userLogin = ''
          this.userPassword = ''
          this.userEmail = ''
    //     }
    //   }
    // }
  }

  Edit(num:number):void{
    // for (let i = 0; i < this.users.length; i++) {
    //   if (i === num) {
          console.log(this.users[num])
          this.userLogin = this.users[num].login
          this.userPassword = this.users[num].password
          this.userEmail = this.users[num].email
          // }
          // this.users.push(this.users[i])
  //     }
  this.formButton=false
  this.userId=num
  }


  Delete(num:number):void{
    this.users.splice(num, 1);
  }

  saveEdit():void{
    const editUser: IUser = new User(this.userLogin, this.userPassword, this.userEmail)
    this.users.splice(this.userId,1,editUser)

  }
}


// users.splice(num, 1);
//         let user = new User(num +1, login.value, password.value, email.value)
//         users.splice(num, num-1 , user);