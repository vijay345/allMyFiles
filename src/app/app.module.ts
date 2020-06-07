import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { HomeComponent } from './home/home.component';
import { FormlyFieldCustomInputComponent } from './formly-field-custom-input/formly-field-custom-input.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormlyFieldCustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // FormlyBootstrapModule,
    FormlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
