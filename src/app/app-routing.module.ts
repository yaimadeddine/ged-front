import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/component/login/login.component';
import { DocumentListV2Component } from '../app/component/document-list-v2/document-list-v2.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'document-list', component: DocumentListV2Component },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }