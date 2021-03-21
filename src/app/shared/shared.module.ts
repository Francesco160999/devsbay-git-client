import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule, TranslateModule, FormsModule, MaterialModule],
  exports: [BrowserModule, BrowserAnimationsModule, TranslateModule, WebviewDirective, FormsModule, MaterialModule]
})
export class SharedModule {}
