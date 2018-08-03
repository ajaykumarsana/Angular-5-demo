import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stock-overview',
  templateUrl: './stock-overview.component.html',
  styleUrls: ['./stock-overview.component.scss']
})
export class StockOverviewComponent implements OnInit {
  faveStocks = [];
  selectedNum = 0;
  @Input('addedStock')
  set addedStock(selectedStock: any){
    console.log('added stock'+JSON.stringify(selectedStock));
    if(selectedStock)
    {
      let stockIndex = this.faveStocks.indexOf(selectedStock.title);
      if(stockIndex > -1)
      {
        this.faveStocks.splice(stockIndex,1);
      }
      else
      {
        this.faveStocks.push(selectedStock.title);
      }
    }
  }
  getFaveStocks()
  {
    return JSON.stringify(this.faveStocks);
  }
  constructor() { }

  ngOnInit() {
  }

}
