import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { AccessGuardService } from './services/access-guard.service';
import { ParcoursComponent } from './parcours/parcours.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'contact', component: ContactpageComponent},
  { path: 'parcours', component: ParcoursComponent},
  { path: 'check', component: AdminviewComponent,
  canActivate: [AccessGuardService]},
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
