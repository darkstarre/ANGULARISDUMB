import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConnectorComponent } from './connector/connector.component';
import { ConnectorListComponent } from './connector-list/connector-list.component';
import { NewConnectorInputComponent } from './new-connector-input/new-connector-input.component';
import { ConnectorService } from './services/connector.service';


@NgModule({
  declarations: [
    AppComponent,
    ConnectorComponent,
    ConnectorListComponent,
    NewConnectorInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
