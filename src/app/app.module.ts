import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './layout/navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import { DocumentListComponent } from './component/document-list/document-list.component';
import { DocumentAddComponent } from './component/document-add/document-add.component';
import {DialogModule} from "primeng/dialog";
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import { DocumentListV2Component } from './component/document-list-v2/document-list-v2.component';
import {TableModule} from "primeng/table";
import { BytesToMegabytesPipe } from './pipe/bytes-to-megabytes.pipe';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DocumentListComponent,
    DocumentAddComponent,
    DocumentListV2Component,
    BytesToMegabytesPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    FileUploadModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    TableModule,
    HttpClientModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
