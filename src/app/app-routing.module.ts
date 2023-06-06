import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URLFormComponent } from './urlform/urlform.component';
import { RedirectionComponent } from './redirection/redirection.component';

const routes: Routes = [
  { path: '', component: URLFormComponent },
  { path: ':shortCode', component: RedirectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
