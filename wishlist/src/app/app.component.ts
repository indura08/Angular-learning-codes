import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';  //menna meka mata awa hoda error ekak , structured directive use krddi one wena import ekek thami meka meka import kloth thami ngFor ngIf wage ewa use krnna puluwn wenne 
//import { FormsModule } from '@angular/forms';  //mewa wish folder eke wish module ekt aran giya
//import { EventService } from '../shared/services/EventService'; 
//import { HttpClientModule } from '@angular/common/http'; //mekath wish folder eke wish module ekat aran giya
//import { WishService } from './wish/wish.service';
import { WishModule } from './wish/wish.module'; //module ekt hama ekm dala menna mehm module ek withrk import krgnnwa 
import { WishComponent } from './wish/wish.component';
import { ContactModule } from './contact/contact.module';
//import { ContactComponent } from './contact/contact.component'; //comtact component ekt import krnna one imports tika contact component eka athuledi sidda krla comtact component eka mehma eka paara app component eka athule import krganimeda eya import kirima sidu krgtha haka just like contact module eken eeka import krgnnwa wage 


// const filters = [
//   (item: WishItem) => item,
//   (item: WishItem) => !item.isComplete,
//   (item: WishItem) => item.isComplete
// ]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WishModule, WishComponent,ContactModule],  //e wage import krna hama module ekakma me wage imports array eka athule ennath one 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers: [EventService]
})
export class AppComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
      
  }

  // items : WishItem[] = [  //methna WishItemn kiyla damma wishlist withrk ganna array ekk bawt meka path wenwa 
  //   new WishItem("to learn angular"),
  //   new WishItem("get coffee" , true),
  //   new WishItem("find grass that cut itself")  
  // ] 

  //menna me items kiyla methna uda thiyna tika api use kale mul lessons waldi , api ewaye kale mthna data set ekk me wage hdla e tika use kra kra angular iagagttu eka , eta passe http requests lesson ekt awama sidda una json data hdla ewa use kra krs wada krna widiya ignganna mokda apita database ekka wada krnna giyma eka one wenwa godakma

  //json data ekka yna itesm array saha eyt adala datam

//   items: WishItem[] = [];

//   //varibales , value holders 

//   constructor(events: EventService, private wishService : WishService){
//     events.listen('removeWish' , (wish) => {
//       //remove wish from items
//       let index = this.items.indexOf(wish)
//       this.items.splice(index, 1)
//     })
//   }

  
//   ngOnInit(): void {
//     this.wishService.getWishes().subscribe((data: any) => {
//       this.items = data;
//     },

//     (error: any) => {
//       alert(error.message);
//     }  //subscribe method ekt sond argument eka widiyt me wage callback function ekk dunnama eken error eka handle wenwa 

//    )
// }

//   filter:any ;


  //functions /methods

  

  // get visibleItems() : WishItem[]{ me funcftion eka wenuwat thami app component eke visibleItems nathuwa items.filter margayen gihin thiynne 
  //   // let value = this.listFilter;
  //   // if(value === '0'){
  //   //   return this.items
  //   // }
  //   // else if(value === "1"){
  //   //   return this.items.filter(item => !item.isComplete)
  //   // }
  //   // else{
  //   //   return this.items.filter(item => item.isComplete)
  //   // }

  //   return this.items.filter(this.filter);


  // };

  

  //  

  
}
