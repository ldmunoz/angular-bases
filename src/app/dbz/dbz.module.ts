import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AddCharacterComponent } from './pages/add-character/add-character.component';
import { ListComponent } from './pages/list/list.component';
import { MainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
