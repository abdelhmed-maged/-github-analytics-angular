import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from './api/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserFilterationComponent } from './components/user-filteration/user-filteration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UserCardComponent,
    UserFilterationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ApiModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
