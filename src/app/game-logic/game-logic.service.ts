import { Injectable } from '@angular/core';
import { GamePlayer } from '../model/game-player.enum';
import { Game } from '../model/game';
import { Stick } from '../model/stick';
@Injectable()
export class GameLogicService {

  players: Game[];
  turn: GamePlayer;
  time: Date
  private sticks: Stick[][];

  constructor() {

  }

  getSticks() {
    return this.sticks;
  }
  initializePlayers() {
    this.players = [
      new Game("Player", GamePlayer.PLAYER),
      new Game("Machine", GamePlayer.BOT),
    ]
  }

  getTimeTaken(){
    return (new Date().getSeconds() - this.time.getSeconds());

  }
  startGame() {
    this.initializeSticks();
    this.initializePlayers();
    this.turn = this.players[0].turn;
    this.time = new Date();
    return this.turn;
  }

  isTurn(turn: GamePlayer) {
    return (this.turn === turn);
  }

  isAllowedRow(rowId) {
    let currentUser: Game = this.GetGamePlayer();
    return currentUser.selectedRow === rowId || currentUser.selectedRow === -1;

  }

  GetGamePlayer() {
    if (this.turn === GamePlayer.PLAYER) {
      return this.players[0];
    } else {
      return this.players[1];
    }
  }


  endTurn(): GamePlayer {
    this.GetGamePlayer().selectedRow = -1;
    this.turn = this.turn === GamePlayer.PLAYER ?
      GamePlayer.BOT : GamePlayer.PLAYER;
    this.time = new Date();
    return this.turn;
  }

  initializeSticks() {
    this.sticks = [];
    let count = 1;
    for (let i = 0; i < 4; i++) {
      this.sticks[i] = [];
      for (let j = 0; j < count; j++) {
        this.sticks[i][j] = new Stick();
      }
      count += 2;
    }
  }

  SelectRow(turn: GamePlayer, rowId) {
    if (this.isTurn(turn) && this.isAllowedRow(rowId)) {
      let length = this.sticks[rowId].length - 1;
      this.sticks[rowId].pop();
      this.GetGamePlayer().selectedRow = rowId;
    }

  }

}
