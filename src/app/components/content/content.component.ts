import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ComponentListService } from "../../services/component-list.service";

export interface ComponentListItemModified {
  id: number,
  name: string,
  templateId: string,
  component: Type<any>
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // barIcon = faBars;
  componentList: ComponentListItemModified[] = [];
  @Output() collapseSidebarEmitter = new EventEmitter();

  constructor(private componentListService: ComponentListService) { }

  ngOnInit(): void {
    this.componentList = <ComponentListItemModified[]>this.componentListService.getComponents();
  }

  onCollapseSidebar() {
    this.collapseSidebarEmitter.emit();
  }

}
