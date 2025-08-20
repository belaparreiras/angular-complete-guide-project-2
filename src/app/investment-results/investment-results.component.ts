import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  constructor(private investmentService: InvestmentService){}

  get results(){
    return this.investmentService.resultsData;
  }
}
