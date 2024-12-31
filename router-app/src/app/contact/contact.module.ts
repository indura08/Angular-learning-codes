import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactComponent
  ],
  exports:[ContactComponent , ReactiveFormsModule, CommonModule]  //reactive forms kiyna eka import kala nm export wennathone mkokda ethkot thami mkeke thiyna dewal class component ekn ehama aduragnna 
})
export class ContactModule {}
