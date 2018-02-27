import { GamePlayer } from './game-player.enum';
export class Game {
    turn: GamePlayer;
    name: string;
    selectedRow: Number;
    constructor(name: string, turn: GamePlayer){
        this.name = name;
        this.turn = turn;
        this.selectedRow = -1;

    }


}
