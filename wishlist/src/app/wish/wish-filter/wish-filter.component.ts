import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';   //forms module saha anik commonmodule eka nm hama component ekktm one una

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
];

@Component({
  selector: 'wish-filter', //metha hama wlema app kiyl watena kalla ain krla danna one blnna hama component ekema liyal thiynne 
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {

  @Input() filter: any;

  @Output() filterChange = new EventEmitter<any>(); //mehna any daala thiynne filter kiybna eka onema jathiye deyk gnna puluwan hinda  ekynne attama methn meka ganne function ekak neh , e hinda any dame functon unath gannwa kiynna 
  
  constructor(){}

  ngOnInit(): void {
      this.updateFilter('0') //meken wenne filter ekt page ek load weddima agayak nathi hinda mulin page ek render weddi list eke alla yatathe mukuth pennane nha , all,unfculfilled,fulfilled mukutma penne nah , ithin ekt wiisdamuak widiyt thami mthna onit method ekedi on initinalize waladi kelinma agayk deela eka nathi krla thiynne 
      //mekath hari - //this.filter.emit(filters[value])
  }

  listFilter: any  /*(sting nathuwa any kale ara udama thiynna filter method eka use krla filter krnna yaddi)string*/ = '0';


  updateFilter(value:any){
    this.filter = filters[value];
    this.filterChange.emit(filters[value])
  }


}
