import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import {Store} from '@ngrx/store';


import { ListMusicComponent } from './list-music.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';

export default {
  title: 'ListMusic component',
  component: ListMusicComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<ListMusicComponent> = (args: ListMusicComponent) => ({
  component: ListMusicComponent,
  template: `<app-list-music></app-list-music>`,
  styles: ['./list-music.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [ListMusicComponent],
    providers: [provideMockStore(), AuthService, Store],
  },
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  viewLogin : true,
};



  
// import { ListMusicComponent } from '../list-music/list-music.component';
// import { provideMockStore } from '@ngrx/store/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Meta, Story } from '@storybook/angular/types-6-0';
// import { HttpClientModule } from '@angular/common/http';

// const mockOffers = [
//     {
//         id: 1,
//         song: 'Grab It!',
//         movie: 'App Offer'
//     },
//     {
//         id: 2,
//         song: 'Buy 1 Get 1',
//         movie: 'App Offer'
//     },
//     {
//         id: 3,
//         song: 'Free Shipping',
//         movie: 'New User'
//     }
// ];

// export default {
//     title: 'ListMusic Component',
//     component: ListMusicComponent,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as Meta;

// const Template: Story<ListMusicComponent> = (args: ListMusicComponent) => ({
//     component: ListMusicComponent,
//     moduleMetadata: {
//         imports: [RouterTestingModule.withRoutes([]), FormsModule, HttpClientModule, ReactiveFormsModule],
//         declarations: [ListMusicComponent],
//         providers: [provideMockStore({})],
//     },
//     props: { args, offers: mockOffers },
// });

// export const Landing = Template.bind({});
