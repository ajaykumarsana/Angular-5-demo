import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss'],
  animations : [
    trigger('trigger',[
      transition('* => *',[
        query(':enter',style({opacity:0}),{optional:true}),
        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:0,transform:'translateY(-75%)',offset: 0}),
            style({opacity:0.4,transform:'translateY(35px)',offset: .3}),
            style({opacity:1,transform:'translateY(0)',offset: 1}),
          ]))
        ]),{optional:true}),
        query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:1,transform:'translateY(0)',offset: 0}),
            style({opacity:0.4,transform:'translateY(35px)',offset: .3}),
            style({opacity:0,transform:'translateY(-75%)',offset: 1}),
          ]))
        ]),{optional:true})
      ])
    ])
  ]
})
export class TempComponent implements OnInit {
  variable: number ;
  buttonText : string = 'Add item (added)';
  finalText : string = 'nothing';
  routerParamet : string = '';
  constructor(private routervalue: ActivatedRoute) { 
    this.routervalue.params.subscribe(res => this.routerParamet = res.id);
  }
  list = ['sleep','eat'];
  ngOnInit() {
    this.variable = this.list.length;
  }
addItem()
{
  this.list.push(this.finalText);
  this.finalText = '';
  this.variable = this.list.length;
}
removeItem(index)
{
  this.list.splice(index,1);
}
}
