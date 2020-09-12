import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { LogInComponent } from './log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

export default {
  title: 'Login component',
  component: LogInComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<LogInComponent> = (args: LogInComponent) => ({
  component: LogInComponent,
  template: `<app-log-in></app-log-in>`,
  styles: ['./app-log-in.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [LogInComponent],
    providers: [provideMockStore(), AuthService],
  },
  props: args,
});
const Template1: Story<LogInComponent> = (args: LogInComponent) => ({
  component: LogInComponent,
  // template: `<app-log-in></app-log-in>`,
  // styles: ['./app-log-in.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [LogInComponent],
    providers: [provideMockStore(), AuthService],
  },
  props: args,
});
export const Default = Template.bind({});
Default.args = {
  viewLogin : true,
  incorrectError : false
};

export const Logins = Template1.bind({});
Logins.args = {
  incorrectError : true
};

// export const SignUp = Template.bind({});
// SignUp.args = {
//   viewLogin : true,
// };


