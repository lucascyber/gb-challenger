import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CashbackService } from '../../core/services/cashback.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.scss']
})
export class CashbackComponent implements OnInit, AfterViewInit {

  constructor(private cashbackService: CashbackService) { }
  cashbackData;
  take: boolean = true;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getCashback();
  }

  getCashback() {
    this.cashbackService.getCashback()
      .pipe(takeWhile(() => this.take))
      .subscribe(cashback => {
        if (cashback) {
          this.cashbackData = cashback;
        }
      });
  }

}
