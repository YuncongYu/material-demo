import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public prefix = "admin.";
  public suffix = "@domain.com"
  public username = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
