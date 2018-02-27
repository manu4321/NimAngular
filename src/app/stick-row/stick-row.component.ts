import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stick } from '../model/stick';
@Component({
  selector: 'stick-row',
  templateUrl: './stick-row.component.html',
  styleUrls: ['./stick-row.component.css']
})
export class StickRowComponent implements OnInit {

  @Input("sticks") sticks: Stick[];
  @Input("number") number: Number;
  @Output() rowSelected = new EventEmitter<Number>();
  constructor() {
  }

  ngOnInit() {
  }

  play(){
    this.rowSelected.emit(this.number);
    
  }



}
