import { InputsModule } from 'src/app/shared/inputs/inputs.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuditorModule } from './pages/auditor/auditor.module';
import { ReportReferencesModule } from './pages/report-references/report-references.module';
import { VisitorModule } from './pages/visitor/visitor.module';
import { ButtonsModule } from './shared/buttons/buttons.module';
import { CardsModule } from './shared/cards/cards.module';
import { CoreModule } from './shared/core/core.module';
import { MatStepperModule } from '@angular/material/stepper';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './pages/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,   
    AuditorModule,
    ReportReferencesModule,
    VisitorModule,
    AccountModule,
    ButtonsModule,
    CardsModule,
    CoreModule,
    InputsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
