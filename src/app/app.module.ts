import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentService } from './student/students.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './student/home/home.component';
import { EditComponent } from './student/edit/edit.component';
import { CreateComponent } from './student/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './student/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    CreateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
