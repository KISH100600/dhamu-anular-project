import { FormControl } from '@angular/forms';
import { user } from 'src/app/interfaces/login';
import { Component } from '@angular/core';
import { GetUsersService } from 'src/app/services/user/get-users.service';
import { changeError, errorstatus } from 'src/app/controller/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private userService: GetUsersService) {}
  activityName = new FormControl();
  description = new FormControl();
  image: any = '';
  priority = new FormControl();
  users: user[] = [];
  getUSers() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        console.log(data);
        this.users = data.body;
      },
      (e: any) => {
        alert('something went wrong!');
      }
    );
  }
  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        console.log(data);
        this.users = data.body;
      },
      (e: any) => {
        alert('something went wrong!');
      }
    );
  }
  createUser() {
    console.log('ji', this.image);

    this.userService
      .createUsers({
        activity: this.activityName.value,
        description: this.description.value,
        fileName: this.image,
        priority: this.priority.value,
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.users = data.body;
          this.getUSers();
        },
        (e: any) => {
          changeError(true);
          alert('something went wrong!');
        }
      );
  }
  handleChange(data: Event) {
    const element = data.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log('FileUpload -> files', fileList[0]);
      this.image = fileList[0];
    }
    // this.image = data.target.files[0].name;
  }
}
