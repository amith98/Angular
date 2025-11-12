import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileContactComponent } from './profile-contact/profile-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
