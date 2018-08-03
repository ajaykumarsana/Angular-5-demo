import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { TempComponent } from './temp/temp.component';
import { DirectiDirective } from './directi.directive';
import { PipetestPipe } from './pipetest.pipe';
import { ChildComponent } from './child/child.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { OutputComponent } from './output/output.component';
import { StockComponent } from './stock/stock.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { StockOverviewComponent } from './stock-overview/stock-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    TempComponent,
    DirectiDirective,
    PipetestPipe,
    ChildComponent,
    InputOutputComponent,
    OutputComponent,
    StockComponent,
    StockCardComponent,
    StockOverviewComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
