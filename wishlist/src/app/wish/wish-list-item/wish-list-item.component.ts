import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
  //providers:  [EventService]
})    
export class WishListItemComponent {

  @Input() wish! : WishItem; 

  get cssClass(){
    return this.wish.isComplete ? ['strikeout'] : [];  //mehem array widiyt dnwa wagema array eka noda dannath puluwan , array eka daana eka hodi inline thwh additionl css part ekk methndi define krla denna one wena welawal walt
  
    //return{'strikeout text-muted' : this.fullfilled}; //menna me wage object widiyt dennath puluwan cas properties define krla e e css propert ekata mona class component eke property kad balapanne balala
  }

  constructor(private events : EventService){}

  ngOnInit():void{}

  removeWish(){
    this.events.emit('removeWish' , this.wish)
  }

  togglefullfilled(){
    this.wish.isComplete = !this.wish.isComplete;
    //console.log(item);
  };

}
