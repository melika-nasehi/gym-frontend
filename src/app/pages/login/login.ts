import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private api: ApiService) {}

  login() {
    this.api.login({
      username: this.username,
      password: this.password
    }).subscribe(res => {
      console.log('Logged in', res);
    });
  }
}
