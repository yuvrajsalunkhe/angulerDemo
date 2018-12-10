import { CorsesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesServises } from './courses.servises';

@NgModule({
  declarations: [
    AppComponent,
    CorsesComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesServises
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
