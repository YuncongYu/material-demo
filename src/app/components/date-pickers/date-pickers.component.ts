import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pickers',
  templateUrl: './date-pickers.component.html',
  styleUrls: ['./date-pickers.component.css']
})
export class DatePickersComponent implements OnInit {

  public date: Date | undefined;
  public minDate = new Date(2021, 1, 1);
  public maxDate = new Date(2022, 12, 31);

  constructor() { }

  ngOnInit(): void {
  }

}
