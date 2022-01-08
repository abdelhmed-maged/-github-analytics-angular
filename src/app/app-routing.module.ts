import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersContainerComponent } from './components/users-container/users-container.component';

const routes: Routes = [
  {path: '', component: UsersContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
