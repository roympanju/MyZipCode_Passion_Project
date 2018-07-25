import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamSchedulePage } from './team-schedule';

@NgModule({
  declarations: [
    TeamSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(TeamSchedulePage),
  ],
})
export class TeamSchedulePageModule {}
