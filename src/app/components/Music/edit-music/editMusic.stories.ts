import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { EditMusicComponent } from './edit-music.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';

export default {
  title: 'EditMusic component',
  component: EditMusicComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<EditMusicComponent> = (args: EditMusicComponent) => ({
  component: EditMusicComponent,
//   template: `<app-edit-music></app-edit-music>`,
//   styles: ['./app-edit-music.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [EditMusicComponent],
    providers: [provideMockStore(), AuthService],
  },
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  viewLogin : true,
};

export const edit = Template.bind({});
edit.args = {
  id : 1
};

// export const SignUp = Template.bind({});
// SignUp.args = {
//   viewLogin : true,
// };


