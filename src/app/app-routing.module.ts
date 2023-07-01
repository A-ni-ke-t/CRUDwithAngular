import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './student/home/home.component';
import { CreateComponent } from './student/create/create.component';
import { EditComponent } from './student/edit/edit.component';
import { DeleteComponent } from './student/delete/delete.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
