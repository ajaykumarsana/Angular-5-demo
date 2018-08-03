import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  constructor() { }
  staticmessage = 'This is @Input decorator '
  
  onClicked(data : String)
  {
    console.log("YOu have clicked");
    console.log("Emitted Value is "+ data);
  }
  ngOnInit() {
  }
}
