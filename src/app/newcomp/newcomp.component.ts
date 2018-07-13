import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.scss']
})
export class NewcompComponent implements OnInit {
  
  constructor(private routevar : Router) {
  }

  ngOnInit() {
  }
  redirect()
  {
    this.routevar.navigate(['temp/13'])
  }
}
