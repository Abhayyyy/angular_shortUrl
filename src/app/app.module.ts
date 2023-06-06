import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { URLFormComponent } from './urlform/urlform.component'; 
import { RedirectionComponent } from './redirection/redirection.component';
import { UrlMappingService } from'./url-mapping.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    URLFormComponent,
    RedirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    UrlMappingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
