import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.components';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';


const appRoutes: Routes = [
  { path: '', component: PropertyCardComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'property-detail/:id', component: PropertyDetailsComponent },
  { path: 'property-list', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
];


@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
      NavBarComponent,
      PropertyListComponent,
     AddPropertyComponent,
     PropertyDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
