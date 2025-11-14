import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { ShoeListComponent } from './shoes/shoe-list/shoe-list.component';
import { ShoeDetailComponent } from './shoes/shoe-detail/shoe-detail.component';
import { StatsComponent } from './stats/stats.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'players/:id', component: PlayerDetailComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'teams/:id', component: TeamDetailComponent },
  { path: 'shoes', component: ShoeListComponent },
  { path: 'shoes/:id', component: ShoeDetailComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'history', component: HistoryComponent },
];
