import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public selectionCounter : number;
  public addedStock : any;
  stocks = [
    {title: "AMZN",companyName:"Amazon Inc.",imgUrl:""},
    {title: "abcd",companyName:"Nothing Inc.",imgUrl:""},
    {title: "asdf",companyName:"sdfas Inc.",imgUrl:""},
    {title: ";lkj",companyName:"asdf Inc.",imgUrl:""}
  ]

}
