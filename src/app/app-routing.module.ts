import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MembersComponent } from './components/members/members.component';
import { AutobotsComponent } from './components/autobots/autobots.component';
import { DecepticonsComponent } from './components/decepticons/decepticons.component';
import { ErrorComponent } from './components/error/error.component';
import { FactionsComponent } from './components/factions/factions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  { path: 'autobots', component: AutobotsComponent },
  { path: 'decepticons', component: DecepticonsComponent },

  { path: 'factions', component: FactionsComponent },
  { path: '**', component: ErrorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
