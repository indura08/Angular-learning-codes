import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService'; 
import { WishService } from './wish.service';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


@Component({
  selector: 'app-wish', //methana thiuyna nama thami app.component.html ekt html tag ekk widiyt denne 
  standalone: true,
  imports: [AddWishFormComponent, WishListComponent, WishFilterComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {

  items: WishItem[] = [];

  //varibales , value holders 

  constructor(events: EventService, private wishService : WishService){
    events.listen('removeWish' , (wish) => {
      //remove wish from items
      let index = this.items.indexOf(wish)
      this.items.splice(index, 1)
    })
  }

  
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    },

    (error: any) => {
      alert(error.message);
    }  //subscribe method ekt sond argument eka widiyt me wage callback function ekk dunnama eken error eka handle wenwa 

   )
}

  filter:any ;  //attatama meken wenne wish filter component eknganna wish filter function ea save krla thiygnnw wish list eke thiyna wishes tika select krla thiynaselect option eka anuwa change krgnna 


}
