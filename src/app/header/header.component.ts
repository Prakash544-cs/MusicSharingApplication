import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Music } from '../models/music';
import { ThemeService } from '../services/theme-color.service';
import { LogOut } from '../store/actions/auth.actions';
import { AppState , selectAuthState } from '../store/app.states';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated: boolean;
  quotes: Music[];
  user = null;
  theme = 'ligth';
  errorMessage = null;

  constructor(private store: Store<AppState>, private router: Router, public themeService: ThemeService) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
        this.isAuthenticated = state.isAuthenticated;
        this.user = state.user;
        this.errorMessage = state.errorMessage;
    });
  }

  changeTheme(): void{
    if (this.theme === 'ligth'){
      this.themeService.setLightTheme();
    } else{
      this.themeService.setDarkTheme();
    }
  }

  public logOut(): void{
    this.store.dispatch(new LogOut());
    this.router.navigateByUrl('/');
  }
}
