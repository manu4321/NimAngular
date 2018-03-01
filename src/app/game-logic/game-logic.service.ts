import { Injectable } from '@angular/core';
import { GamePlayer } from '../model/game-player.enum';
import { Game } from '../model/game';
import { Stick } from '../model/stick';
@Injectable()
export class GameLogicService {

  players: Game[];
  turn: GamePlayer;
  time: Date
  numberOfSticks: number = 0;
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

  getTimeTaken() {
    return (this.time);

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

  GetOppositePlayer() {
    if (this.turn === GamePlayer.PLAYER) {
      return this.players[1];
    } else {
      return this.players[0];
    }
  }


  endTurn(turn: GamePlayer): GamePlayer {
    if (this.GetGamePlayer().selectedRow === -1) {
      console.log("Not allowed to end turn");
      return this.turn;
    }
    if (this.isTurn(turn)) {
      this.GetGamePlayer().selectedRow = -1;
      this.turn = this.turn === GamePlayer.PLAYER ?
        GamePlayer.BOT : GamePlayer.PLAYER;
      this.time = new Date();
      if (this.turn === GamePlayer.BOT && !this.isEndGame()) {
        this.BotTurn();
      }
    }
    return this.turn;
  }

  initializeSticks() {
    this.sticks = [];
    let count = 1;
    for (let i = 0; i < 4; i++) {
      this.sticks[i] = [];
      for (let j = 0; j < count; j++) {
        this.sticks[i][j] = new Stick();
        this.numberOfSticks++;
      }
      count += 2;
    }
  }
  isEndGame() {
    return this.numberOfSticks <= 0;
  }
  SelectRow(turn: GamePlayer, rowId) {

    if (this.isTurn(turn) && this.isAllowedRow(rowId)) {
      let length = this.sticks[rowId].length - 1;
      this.sticks[rowId].pop();
      this.numberOfSticks--;
      this.GetGamePlayer().selectedRow = rowId;
    }

    if (this.isEndGame()) {
      this.endGame();
    }

  }
  endGame() {
    console.log("in end game");
    this.endTurn(this.turn);
    console.log("Winner is: " + this.GetGamePlayer().name);
  }
  BotTurn() {
    if (this.endGame()) {
      return;
    }
    let random = -1;
    do {
      random = Math.floor(Math.random() * this.sticks.length);
    } while (this.sticks[random].length <= 0);
    let randomSticks = Math.floor(Math.random() * this.sticks[random].length) + 1;
    for (let i = 0; i < randomSticks; i++) {
      this.SelectRow(GamePlayer.BOT, random);
    }
    this.endTurn(GamePlayer.BOT);

  }

}
