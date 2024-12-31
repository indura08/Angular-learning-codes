import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../shared/models/wishItem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wish-list', //methna app kiyla kallak thibba eka kapuwa 
  standalone: true,
  imports: [CommonModule, FormsModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit { 

  @Input() wishes : WishItem[] = [];

  constructor(){}

  ngOnInit(): void {
      
  }

  // toggleItem(item: WishItem){
  //   item.isComplete = !item.isComplete
  //   console.log(item);
  // };

}
