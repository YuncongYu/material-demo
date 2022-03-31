import { Component, Input, OnInit } from '@angular/core';
import { ComponentListService } from "../../services/component-list.service";
import { ComponentListItem } from "../../interfaces/component-list-item";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  componentList: ComponentListItem[] = [];
  @Input() isSidebarCollapsed = false;

  constructor(private componentListService: ComponentListService) { }

  ngOnInit() {
    this.componentList = this.componentListService.getComponents();
  }
}
