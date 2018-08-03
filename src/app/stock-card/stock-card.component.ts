import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {
  imageUrl = '';
  @Input() title:string = "Its my Title";
  @Input() companyName="<no company>";
  
  @Input()
  set imgUrl(imgUrl : string){
    this.imageUrl = imgUrl;
  }
  get imgUrl(): string {
    return this.imageUrl;
  }
  @Output() addToList = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  background_color = 'white';
  selected: boolean = false;
  buttonLabel = "Bet";
  selectedCard()
  {
    this.selected = !this.selected;
    this.background_color = this.selected ? 'lightgreen' : 'white';
    console.log(this.title);
    this.buttonLabel = this.selected ? 'Remove Bet': 'Bet';
    this.addToList.emit({title:this.title,selected:this.selected});
  }

}
