import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';

// const routers : Routes = [
//   {path: "" , component:FirstComponent},
//   {path: 'second' , component: SecondComponent},
//   {path: 'contact' , component: ContactComponent},
//   {path: 'products' , component: ProductslistComponent},

//   {path: 'products/:id' , component:ProductdetailsComponent},  //menna me wage thami route parameters ekkala routes define krnne , methna id kiyna eka nikan ara spring boot walal path variable wage , id ekat agayak watunama e id ekt anuwa adla data templete ekt deela web page ekn render krgnnwa 

//   {path: '**' , component: NotFoundComponent} //mekn kiynne user dnata nathi page ekt ynna haduwoth danat define krla nathi route link ekkin (in this case first second nowena onema rourte link ekk) me component eka e hama welema pennana kiyna eki
//   //meka hma welema enna one routing list eke anthimt. mokd ehm une nattnm angulr use krnne firt math policy ekk hinda list eke palaweniytm match wena eka anuwa thamai angular result eka denne , ithin second ekat kalin ** watunoth mulima match wenne eka hinda angular denne e result eka

// ]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

