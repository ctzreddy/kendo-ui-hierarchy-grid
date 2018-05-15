import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { AppKendoGridCoreComponent } from './kendo-grid-core/kendo-grid-core.component';
import { ProductsService } from './service/products.service';
import { CategoryDetailComponent } from './kendo-grid-core/kendo-child/kendo-child.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AppKendoGridCoreComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, GridModule, HttpModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
