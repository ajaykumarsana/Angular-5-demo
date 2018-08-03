import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  constructor() { }
  @Output() buttonClicked = new EventEmitter();

  clicker()
  {
    this.buttonClicked.emit("Emitted Value triggered");
  }
  ngOnInit() {
  }

}
