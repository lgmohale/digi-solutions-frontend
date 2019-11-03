import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent} from './about-page/about-page.component';
import { ContactPageComponent} from './contact-page/contact-page.component';
import { FindCoursesComponent } from './find-courses/find-courses.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  { path: 'app', component: LandingPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'about',  component: AboutPageComponent },
  { path: 'find-courses',  component: FindCoursesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    AboutPageComponent,
    ContactPageComponent,
    FindCoursesComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlideshowModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
