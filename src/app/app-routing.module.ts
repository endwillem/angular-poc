import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MembersComponent } from './components/members/members.component';
import { MemberComponent } from './components/modular-block/member/member.component'
import { AutobotsComponent } from './components/autobots/autobots.component';
import { DecepticonsComponent } from './components/decepticons/decepticons.component';
import { SingleMemberComponent } from './components/single-member/single-member.component';
import { ErrorComponent } from './components/error/error.component';
import { FactionsComponent } from './components/factions/factions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  { path: 'autobots', component: AutobotsComponent },
  { path: 'decepticons', component: DecepticonsComponent },
  { path: 'optimus', component: SingleMemberComponent },
  { path: 'ironhide', component: SingleMemberComponent },
  { path: 'ratchet', component: SingleMemberComponent },
  { path: 'bumblebee', component: SingleMemberComponent },
  { path: 'jazz', component: SingleMemberComponent },
  { path: 'megatron', component: SingleMemberComponent },
  { path: 'blackout', component: SingleMemberComponent },
  { path: 'barricade', component: SingleMemberComponent },
  { path: 'starscream', component: SingleMemberComponent },

  { path: 'factions', component: FactionsComponent },
  { path: '**', component: ErrorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
