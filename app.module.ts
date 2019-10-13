import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { BeerDataService } from './service/beer-data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BeerListComponent,
    NewcompComponent,
    FooterComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BeerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
