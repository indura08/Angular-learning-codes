import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {'path': "" ,component: NotFoundComponent},
    {'path': "first", component: FirstComponent},
    {"path": "second" , component:SecondComponent},
    {"path": "prouct/list", component:ProductslistComponent},
    {"path": "product/detials" , component:ProductdetailsComponent}

];
