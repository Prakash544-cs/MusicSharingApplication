import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { AppState , selectAuthState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  allSignupData: any;
  incorrectError: boolean;

  constructor(private store: Store<AppState>, private authService: AuthService ) {

    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void  {
    this.getState.subscribe((state) => {
      if (state){
        this.errorMessage = state.errorMessage;
      }
    });
  }

  onSubmit(): void {
    this.authService.getSignUpData().subscribe((response) => {
      this.allSignupData = response;
      const even = (item: any) => this.user.email === item.email && this.user.password === item.password;
      if (this.allSignupData.some(even) === true) {
        const payload = {
          email: this.user.email,
          password: this.user.password
        };
        this.store.dispatch(new LogIn(payload));
      } else {
        this.incorrectError = true;
        setTimeout(() => {
          this.incorrectError = false;
        }, 3000);
      }
    });
  }

}
