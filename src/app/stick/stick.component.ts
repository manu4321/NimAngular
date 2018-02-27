import { Component, OnInit, Input } from '@angular/core';
import { Stick } from '../model/stick';
@Component({
  selector: 'stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.css']
})
export class StickComponent implements OnInit {

  @Input("stick") stick: Stick;
  constructor() { 
    this.stick = new Stick();
  }

  ngOnInit() {
  }

}
