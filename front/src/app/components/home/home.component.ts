import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser: User;

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(
      user => this.currentUser = user
    );
  }
}
