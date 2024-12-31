import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule , ContactComponent, ProductslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router){}

  title = 'router-app';

  goToContacts(){
    this.router.navigate(['contact']) //methanin attama denne url eke thiyna parts tika , ekiynne diffrenet texts , dan methna deela thiyna widiyt url eka localhost:4200/contact namuth othana array eka dunnoth mehem ['contact' , 'us'] ethkot enne localhost:4200/contact/us
  }



}
