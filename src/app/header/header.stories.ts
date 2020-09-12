import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';


import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

export default {
  title: 'Header component',
  component: HeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  // template: `<app-header></app-header>`,
  // styles: ['./app-header.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [HeaderComponent],
    providers: [provideMockStore(), AuthService],
  },
  props: args,
});

// export const Header = Template.bind({});
// Header.args = {
//   viewLogin : true,
// };


export const Default = Template.bind({});
Default.args = {
  user: {},
  isAuthenticated: false
};
export const NotAuth = Template.bind({});
NotAuth.args = {
  user: {},
  isAuthenticated: true
};
