import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { GameLogicService } from '../game-logic/game-logic.service';
import { Stick } from '../model/stick';
import { GamePlayer } from '../model/game-player.enum';
@Component({
  selector: 'sticks-container',
  templateUrl: './sticks-container.component.html',
  styleUrls: ['./sticks-container.component.css']
})
export class SticksContainerComponent implements OnInit {
  sticks: Stick[][]
  turn: GamePlayer;
  date: Date;
  constructor(private gameLogic: GameLogicService, private cdr: ChangeDetectorRef) {
    this.initializeGame();
    this.getTimeTaken();
  }

  ngOnInit() {
  }

  initializeGame(){
    this.turn = this.gameLogic.startGame();
    this.sticks = this.gameLogic.getSticks();
  }
  selectRow(rowId: Number) {
    this.gameLogic.SelectRow(this.turn, rowId);
  }

  endTurn() {
    console.log("inside component");
    this.gameLogic.endTurn(this.turn);
  }

  restartGame() {
    this.initializeGame();
  }

  getFriendlyName(){
    return this.gameLogic.GetGamePlayer().name;
  }

  getTimeTaken(){
    setInterval(()=>{
      this.date = this.gameLogic.getTimeTaken();
      console.log("wait 1 second");
    }, 1000);
  }


}
