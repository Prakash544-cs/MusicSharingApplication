import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AuthService } from '../../../services/auth.service';
import { Music } from '../../../models/music';
import { Observable } from 'rxjs';
import { AppState, selectMusicState } from 'src/app/store/app.states';
import {UpdateMusics,ListMusics} from '../../../store/actions/music.actions';

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.scss']
})
export class EditMusicComponent implements OnInit {


  id:any;
  music: Music;
  editform: FormGroup;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    public musicService:AuthService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    public fbs: FormBuilder,
    private router: Router
  ) 
  {  this.getState = this.store.select(selectMusicState); }

  ngOnInit(): void {

      this.id = this.route.snapshot.params['musicId'];
      this.musicService.getMusicById(this.id).subscribe((data:Music)=>{
      this.music= data;
      });
      
      this.editform = this.fbs.group({
          id:[''],
          song: [''],
          movie: [''],   
      })
  
      this.musicService.getMusicById(this.id)
      .subscribe( data => {
        this.editform.setValue(data);
      });
  
    }

   submit(){
        const payload = {
          index: this.id,
          newProduct: this.editform.value
        };
        this.store.dispatch(new UpdateMusics(payload));
        this.store.dispatch(new ListMusics());
        this.router.navigateByUrl('/list-music');
      }
}
