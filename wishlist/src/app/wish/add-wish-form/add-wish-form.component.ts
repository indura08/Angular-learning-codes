import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';   //input kiyla mokakma hari html code ekk thiynwa anm aniwarynema formModule eka import wennama one

@Component({
  selector: 'add-wish-form', //add kalla ain kala , eka ian krnna one
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit {

  @Output() addWish = new EventEmitter<WishItem>();
  //meken attama wenne main app component ekath ekkala data exchage krgnna eka , dna mekat ena dta tika main compponent ekat output krnawa kiyla kiynne menna me output kiyla thiyna annotation ekn
  

  constructor(){}

  ngOnInit(): void {
      
  }

  newWishText = "";

  addNewWish(){
    //todo is add wish to the list
    //clear text fiekld
    //this.items.push(new WishItem(this.newWishText));

    this.addWish.emit(new WishItem(this.newWishText));    //menna meke this.newWishText thami $event ek mokda eka thami emit wenne emit wena de tami $event kiyla api hamahtnama wage liynne 
    this.newWishText = "";
  };


}
