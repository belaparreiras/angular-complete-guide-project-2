import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { DEFAULT_CURRENCY_CODE } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
