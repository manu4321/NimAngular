import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameLogicService } from './game-logic/game-logic.service';
import { AppComponent } from './app.component';
import { StickComponent } from './stick/stick.component';
import { StickRowComponent } from './stick-row/stick-row.component';
import { SticksContainerComponent } from './sticks-container/sticks-container.component';


@NgModule({
  declarations: [
    AppComponent,
    StickComponent,
    StickRowComponent,
    SticksContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
