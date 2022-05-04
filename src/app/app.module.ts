import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractTypesModule } from './contract-types/contract-types.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ContractTypesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
