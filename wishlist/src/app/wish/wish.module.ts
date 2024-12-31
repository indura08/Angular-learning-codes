import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { WishService } from './wish.service';
import { WishComponent } from './wish.component';


@NgModule({
  declarations: [],//samnyen delclaration wala newei imports daanne angular 17 wala eka imports walamai daanna one , videos wala tutorial wala eka declaration wla danwa namuth angular 17 waldi apu standalone components ekkala ehma krnna bha 

  imports: [
    WishComponent,CommonModule,FormsModule,HttpClientModule , WishFilterComponent,WishListComponent, AddWishFormComponent, WishListItemComponent
  ],

  exports: [WishComponent/*WishFilterComponent, WishListComponent, AddWishFormComponent, WishListItemComponent*/] //menna me wage import krpuwa export knnath one one , mokd ethkot thami app.component eka adurgnne me wish walata adla component tika. eta passe thami app component.html ekndeela thiyna properties attributes ehma app component ekn aduragena ewat aniuwa wada tika krgnne 
})
export class WishModule { }
